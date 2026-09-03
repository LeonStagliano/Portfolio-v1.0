const markdownModules = import.meta.glob('/src/content/projects/*/index.*.md', {
  eager: true
})

const coverImages = import.meta.glob('/src/content/projects/*/cover.*', {
  eager: true,
  import: 'default'
})

const galleryItems = import.meta.glob('/src/content/projects/*/gallery-*', {
  eager: true,
  import: 'default'
})

function getGallery(slug) {
  const prefix = `/src/content/projects/${slug}/gallery-`
  const items = []

  for (const [path, src] of Object.entries(galleryItems)) {
    if (path.startsWith(prefix)) {
      const filename = path.split('/').pop()
      const ext = filename.split('.').pop().toLowerCase()

      items.push({
        src,
        type: ext === 'webm' ? 'video' : 'image',
        filename
      })
    }
  }

  items.sort((a, b) => {
    const numA = parseInt(a.filename.match(/\d+/)?.[0] || '0')
    const numB = parseInt(b.filename.match(/\d+/)?.[0] || '0')
    return numA - numB
  })

  return items
}

function getCover(slug) {
  const prefix = `/src/content/projects/${slug}/cover.`
  for (const [path, src] of Object.entries(coverImages)) {
    if (path.startsWith(prefix)) return src
  }
  return null
}

function parseProject(path, lang = 'es') {
  const module = markdownModules[path]
  if (!module) return null

  const parts = path.split('/')
  const slug = parts[parts.length - 2]

  return {
    slug,
    title: module.title || slug,
    image: module.description || '',
    tech: module.tech || [],
    image: module.image || '',
    github: module.github || '#',
    deploy: module.deploy || '#',
    component: module.default,
    cover: getCover(slug),
    gallery: getGallery(slug)
  }
}

export function getAllProjects(lang = 'es') {
  const projects = []
  const seen = new Set()
  
  for (const path in markdownModules) {
    if (!path.includes('/projects/')) continue

    const parts = path.split('/')
    const slug = parts[parts.length - 2]
    const fileLang = path.includes('.es.md') ? 'es' : 'en'

    if (fileLang !== lang) continue
    if (seen.has(slug)) continue
    seen.add(slug)

    const project = parseProject(path, lang)
    if (project) projects.push(project)
  }

  return projects
}

export function getProjectBySlug(slug, lang = 'es') {
  const path = `/src/content/projects/${slug}/index.${lang}.md`
  return parseProject(path, lang)
}

export function projectExists(slug) {
  const esPath = `/src/content/projects/${slug}/index.es.md`
  const enPath = `/src/content/projects/${slug}/index.en.md`
  return !!(markdownModules[esPath] || markdownModules[enPath])
}
