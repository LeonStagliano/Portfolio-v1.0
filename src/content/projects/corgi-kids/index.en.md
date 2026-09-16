---
title: Corgi Kids (WIP)
slug: corgi-kids
description: Playful web for children, with games and stories
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

## Description

This project involves the development of a children's web platform focused on learning through play, whose main goal is to stimulate children's reasoning, logic, and problem-solving skills through interactive activities and narrative content.

The application combines a collection of educational games with children's stories, aiming to create a simple, engaging, and accessible digital environment for young users.

Beyond offering entertainment, the project proposes the development of an experience that allows children to learn and exercise different cognitive skills while interacting with the platform.

The interface was designed with the target audience especially in mind. Clear visual elements, simple navigation, engaging colors, large components, and direct interaction that reduces unnecessary complexity were prioritized.

## Problem and objectives

### Problem

The use of digital devices is a common part of children's daily lives. However, much of the digital content aimed at this audience is primarily oriented toward entertainment, without necessarily incorporating an educational or cognitive stimulation purpose.

From this problem arises the need to develop a platform that leverages the possibilities of web technology to create interactive experiences that combine entertainment and learning.

The main challenge was to develop an application engaging enough to maintain children's attention, yet structured around activities that require observation, reasoning, memory, association, and problem-solving.

### Main objectives

- Create a web platform specifically aimed at a children's audience.
- Incorporate interactive games focused on reasoning and logic.
- Incorporate stories as a complement to activities.
- Create an attractive and easy-to-understand visual interface.
- Simplify navigation and reduce the number of steps needed to access content.
- Design reusable components that allow the platform to be expanded later.
- Maintain an organized and scalable code structure.
- Apply modern frontend development technologies.
- Ensure a proper experience for both desktop and mobile devices.

## Target audience

The application is primarily intended for school-age children, so design and interaction decisions were made considering the particular characteristics of this type of user.

Unlike a conventional application, where the user may be accustomed to certain navigation patterns, in a children's platform the interface must visually communicate available actions and minimize reliance on complex instructions.

For this reason, the following were prioritized:

- Easily identifiable buttons and interactive elements.
- Clear visual hierarchies.
- Brief and understandable texts.
- Graphic elements as support for communication.
- Direct navigation.
- Visual feedback for interactions.
- Responsive design.
- Reduction of unnecessary elements that may cause confusion.

## Design and UX/UI considerations

The platform's design was approached from a child-friendly perspective, seeking to create a friendly visual experience without sacrificing interface clarity.

One of the main challenges of this type of applications is finding a balance between an interface that is stimulating enough and one that is overloaded with visual elements.

Therefore, it was sought to use a visual composition based on:

- Attractive colors and clear differentiation between sections.
- Easy-to-read typography.
- Recognizable navigation elements.
- Sufficient visual spaces between components.
- Complementary iconography.
- Clearly differentiated interactive components.
- Animations and transitions used to support interaction and not solely as decoration.

### Interaction-oriented design

Interactive elements must clearly communicate that they can be used. Therefore, the visual states of buttons and components are considered an important part of the experience to allow the user to receive immediate feedback after performing an action.

### Responsive Design

The application was designed following a responsive approach to allow its use from different screen sizes.

## Application architecture

The application was built using Vue.js as the main framework for the interface layer.

The use of Vue allows dividing the application into independent and reusable components, facilitating both maintenance and the incorporation of new functionalities.

Conceptually, the application can be divided into different responsibilities:

Application
│
├── Main interface
│   ├── Navigation
│   ├── Home
│   └── Content sections
│
├── Games
│   ├── Game selection
│   ├── Game logic
│   ├── User interaction
│   └── Result / feedback
│
├── Stories
│   ├── Listing
│   ├── Selection
│   └── Reading
│
└── Reusable components
    ├── Buttons
    ├── Cards
    ├── Containers
    └── Interface elements

This separation allows keeping the specific logic of each functionality isolated and prevents concentrating all the application's logic in a single component.

## Code organization

The project combines HTML, CSS, and JavaScript with Vue.js and Bootstrap.

Vue.js is mainly used to manage the dynamic structure of the interface and the state associated with different interactions.

Bootstrap provides CSS components and utilities that help speed up interface development and facilitate responsive adaptation.

The folder structure is as follows:

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