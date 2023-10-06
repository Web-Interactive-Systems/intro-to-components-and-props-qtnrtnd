[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/KZ8vpTCY)
---
type: NoteCard
---

# lab - components and props

> Create reusable UI elements, and customizing their appearance and interactivity declaratively.

Reusing code is often beneficial. Modern web framework provides a set of features to create components. We can think of them as the building blocks of HTML UI. Modern web components allow encapsulating HTML, JS, and CSS. Because of this encapsulation, we can create, combine, and reuse small components to construct more complex UIs.

Note that it is possible to create web components using DOM native APIs in JS, such as custom elements, shadow DOM, and HTML templates (\<template> and \<slot>). We will touch on this very briefly. However, for the most part, we will focus on web components using frameworks, such as React, Vue, and Svelte.

Encapsulation of JS and HTML to create components enables us to

1.  Render DOM based on (or similar) JS APIs and
2.  Pass properties to components (called props for short)

Props allow us to build dynamic UI, simply because props often represent values of JS objects that are interpolated and rendered as DOM by modern frameworks.

Props can be passed down the components tree, i.e., from one component to another.
