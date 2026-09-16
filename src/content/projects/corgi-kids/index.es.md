---
title: Corgi Kids (WIP)
slug: corgi-kids
description: Web lúdica para niños, con juegos y cuentos
tech:
  - HTML
  - CSS
  - JS
  - Vue.js
  - Firebase
image: portfolio-v2-cover.jpg
github: https://github.com/LeonStagliano/Corgi-Kids
deploy: https://corgi-kids.web.app
---

# Corgi Kids Playground

## Descripción

Este proyecto consiste en el desarrollo de una plataforma web infantil orientada al aprendizaje mediante el juego, cuyo objetivo principal es estimular el razonamiento, la lógica y la capacidad de resolución de problemas de los niños mediante actividades interactivas y contenidos narrativos.

La aplicación combina una colección de juegos educativos con cuentos infantiles, buscando crear un entorno digital sencillo, atractivo y accesible para los usuarios más pequeños.

Más allá de ofrecer entretenimiento, el proyecto plantea el desarrollo de una experiencia que permita que los niños aprendan y ejerciten diferentes capacidades cognitivas mientras interactúan con la plataforma.

La interfaz fue diseñada teniendo especialmente en cuenta el público objetivo. Se priorizaron elementos visuales claros, navegación sencilla, colores atractivos, componentes de gran tamaño y una interacción directa que reduzca la complejidad innecesaria.

## Problemática y objetivos

### Problemática

El uso de dispositivos digitales forma parte habitual de la vida cotidiana de los niños. Sin embargo, gran parte del contenido digital dirigido a este público está orientado principalmente al entretenimiento, sin incorporar necesariamente una finalidad educativa o de estimulación cognitiva.

A partir de esta problemática surge la necesidad de desarrollar una plataforma que aproveche las posibilidades de la tecnología web para crear experiencias interactivas que combinen entretenimiento y aprendizaje.

El desafío principal consistió en desarrollar una aplicación suficientemente atractiva para mantener la atención de los niños, pero al mismo tiempo estructurada alrededor de actividades que requieran observación, razonamiento, memoria, asociación y resolución de problemas.

### Objetivos principales

- Crear una plataforma web dirigida específicamente a un público infantil.
- Incorporar juegos interactivos orientados al razonamiento y la lógica.
- Incorporar cuentos como complemento de las actividades.
- Crear una interfaz visual atractiva y fácil de comprender.
- Simplificar la navegación y reducir la cantidad de pasos necesarios para acceder al contenido.
- Diseñar componentes reutilizables que permitan ampliar la plataforma posteriormente.
- Mantener una estructura de código organizada y escalable.
- Aplicar tecnologías modernas de desarrollo frontend.
- Garantizar una experiencia adecuada tanto para ordenadores como para dispositivos móviles.

## Público objetivo

La aplicación está destinada principalmente a niños en edad escolar, por lo que las decisiones de diseño e interacción se realizaron considerando las características particulares de este tipo de usuario.

A diferencia de una aplicación convencional, donde el usuario puede estar acostumbrado a determinados patrones de navegación, en una plataforma infantil la interfaz debe comunicar visualmente las acciones disponibles y minimizar la dependencia de instrucciones complejas.

Por este motivo, se priorizaron:

- Botones y elementos interactivos fácilmente identificables.
- Jerarquías visuales claras.
- Textos breves y comprensibles.
- Elementos gráficos como apoyo a la comunicación.
- Navegación directa.
- Feedback visual ante las interacciones.
- Diseño responsive.
- Reducción de elementos innecesarios que puedan generar confusión.

## Consideraciones de diseño y UX/UI

El diseño de la plataforma se planteó desde una perspectiva child-friendly, procurando generar una experiencia visual amigable sin sacrificar la claridad de la interfaz.

Uno de los principales desafíos de este tipo de aplicaciones es encontrar un equilibrio entre una interfaz suficientemente estimulante y una interfaz sobrecargada de elementos visuales.

Por ello, se buscó utilizar una composición visual basada en:

- Colores atractivos y diferenciación clara entre secciones.
- Tipografías de fácil lectura.
- Elementos de navegación reconocibles.
- Espacios visuales suficientes entre los componentes.
- Iconografía complementaria.
- Componentes interactivos claramente diferenciados.
- Animaciones y transiciones utilizadas como apoyo a la interacción y no únicamente como decoración.

### Diseño orientado a la interacción

Los elementos interactivos deben comunicar claramente que pueden ser utilizados. En consecuencia, los estados visuales de botones y componentes se consideran parte importante de la experiencia para permitir que el usuario reciba feedback inmediato después de realizar una acción.

### Responsive Design

La aplicación fue planteada siguiendo un enfoque responsive para permitir su utilización desde diferentes tamaños de pantalla.

## Arquitectura de la aplicación

La aplicación se construyó utilizando Vue.js como framework principal para la capa de interfaz.

El uso de Vue permite dividir la aplicación en componentes independientes y reutilizables, facilitando tanto el mantenimiento como la incorporación de nuevas funcionalidades.

Conceptualmente, la aplicación puede dividirse en diferentes responsabilidades:

Aplicación 
│ 
├── Interfaz principal 
│   ├── Navegación 
│   ├── Inicio 
│   └── Secciones de contenido 
│ 
├── Juegos 
│   ├── Selección de juegos 
│   ├── Lógica de juego 
│   ├── Interacción del usuario 
│   └── Resultado / feedback 
│ 
├── Cuentos 
│   ├── Listado 
│   ├── Selección 
│   └── Lectura 
│ 
└── Componentes reutilizables 
    ├── Botones 
    ├── Cards 
    ├── Contenedores 
    └── Elementos de interfaz

Esta separación permite mantener aislada la lógica específica de cada funcionalidad y evita concentrar toda la lógica de la aplicación en un único componente.

## Organización del código

El proyecto combina HTML, CSS y JavaScript con Vue.js y Bootstrap.

Vue.js se utiliza principalmente para gestionar la estructura dinámica de la interfaz y el estado asociado a las diferentes interacciones.

Bootstrap proporciona componentes y utilidades CSS que permiten acelerar el desarrollo de la interfaz y facilitar la adaptación responsive.

La estructura de carpetas es la siguiente:

src/ 
│ 
├── components/ 
│   ├── Games/
│   |   ├── Game_01
│   |   ├── Game_02
│   |   └── ... 
│   |
│   ├── Stories/
│   |   ├── Story_01
│   |   ├── Story_02
│   |   └── ... 
│   |
│   ├── Navbar 
│   ├── GameCard 
│   ├── StoryCard 
│   ├── Button 
│   ├── Modal 
│   └── ...
│ 
├── views/ 
│   ├── Home 
│   ├── Games  
│   └── Stories
│ 
├── assets/ 
│   ├── images/ 
│   ├── icons/ 
│   └── styles/ 
│ 
├── data/ 
│   ├── games 
│   └── stories 
│ 
└── App.vue
