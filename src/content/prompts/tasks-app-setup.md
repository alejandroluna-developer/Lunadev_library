---
title: "Tasks App — Setup inicial del proyecto"
description: "Prompt para generar el scaffold inicial del proyecto Tasks App con Astro, React y TypeScript siguiendo Clean Architecture."
categorySlug: "desarrollo-de-software"
subcategorySlug: "proyectos-de-contenido"
tags: ["Astro", "React", "TypeScript", "Setup", "TikTok"]
difficulty: "beginner"
createdAt: "2025-07-26"
updatedAt: "2025-07-26"
isFeatured: false
project:
  slug: "tasks-app"
  name: "Tasks App"
  description: "Aplicación de gestión de tareas construida paso a paso en TikTok con Astro + React."
  order: 1
  totalParts: 3
---

## Prompt

Crea el scaffold inicial para una aplicación de gestión de tareas usando:

- Astro como framework principal
- React para componentes interactivos
- TypeScript estricto
- Clean Architecture (domain, application, infrastructure, presentation)

La estructura debe incluir:

- `src/modules/tasks/` con las carpetas domain, application, infrastructure y presentation
- Interfaces para `Task` (id, title, description, completed, createdAt)
- Un repositorio abstracto `TaskRepository`
- Configuración de Astro con integración React

No incluyas lógica de negocio aún, solo la estructura y las interfaces base.
