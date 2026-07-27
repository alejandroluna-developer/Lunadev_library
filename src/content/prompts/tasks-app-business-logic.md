---
title: "Tasks App — Lógica de negocio y casos de uso"
description: "Prompt para implementar los casos de uso principales: crear, completar, eliminar y listar tareas con validaciones."
categorySlug: "desarrollo-de-software"
subcategorySlug: "proyectos-de-contenido"
tags: ["Use Cases", "Domain", "Validation", "TypeScript", "TikTok"]
difficulty: "intermediate"
createdAt: "2025-07-26"
updatedAt: "2025-07-26"
isFeatured: false
project:
  slug: "tasks-app"
  name: "Tasks App"
  description: "Aplicación de gestión de tareas construida paso a paso en TikTok con Astro + React."
  order: 2
  totalParts: 3
---

## Prompt

Implementa los casos de uso para el módulo de tareas siguiendo Clean Architecture:

1. **CreateTask** — Recibe title y description. Valida que el título no esté vacío y no supere 100 caracteres. Genera un ID único y timestamp.
2. **CompleteTask** — Recibe taskId. Marca la tarea como completada. Lanza error si no existe.
3. **DeleteTask** — Recibe taskId. Elimina la tarea del repositorio.
4. **GetAllTasks** — Retorna todas las tareas ordenadas por fecha de creación (más reciente primero).

Cada caso de uso debe:

- Ser una clase con un método `execute()`
- Recibir el repositorio por inyección de dependencias
- Tipar correctamente inputs y outputs
- Manejar errores con excepciones de dominio personalizadas

Implementa también un `LocalStorageTaskRepository` que implemente `TaskRepository` para persistir en el navegador.
