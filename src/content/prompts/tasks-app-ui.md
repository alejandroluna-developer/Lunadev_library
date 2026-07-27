---
title: "Tasks App — UI y componentes React"
description: "Prompt para crear los componentes de interfaz: lista de tareas, formulario de creación y estados de interacción."
categorySlug: "desarrollo-de-software"
subcategorySlug: "proyectos-de-contenido"
tags: ["React", "Components", "UI", "Accessibility", "TikTok"]
difficulty: "intermediate"
createdAt: "2025-07-26"
updatedAt: "2025-07-26"
isFeatured: false
project:
  slug: "tasks-app"
  name: "Tasks App"
  description: "Aplicación de gestión de tareas construida paso a paso en TikTok con Astro + React."
  order: 3
  totalParts: 3
---

## Prompt

Crea los componentes React para la Tasks App con las siguientes especificaciones:

### TaskForm
- Input para título (required, max 100 chars)
- Textarea para descripción (opcional)
- Botón submit con estado loading
- Validación en tiempo real con mensajes de error
- Accesible: labels, aria-describedby para errores

### TaskList
- Renderiza la lista de tareas
- Estado vacío con mensaje e ilustración
- Cada item muestra: título, descripción truncada, fecha relativa, checkbox para completar, botón eliminar
- Animación al completar/eliminar (CSS transitions)

### TaskItem
- Checkbox accesible para marcar como completada
- Estilo tachado cuando está completada
- Botón de eliminar con confirmación
- Keyboard navigable

### Requisitos generales
- Usar CSS Modules para estilos
- Hidratar con `client:load` solo el componente raíz
- Conectar con los casos de uso via un custom hook `useTasks()`
- Responsive: stack vertical en mobile, grid en desktop
