---
title: "Task Module Implementation — Enterprise CRUD"
description: "Prompt para implementar el módulo completo de Tasks: dominio, datasource, repositorio, use cases, DTOs, mappers, tabla enterprise con filtros/sorting/paginación, modales, RBAC y UX production-ready."
categorySlug: "desarrollo-de-software"
subcategorySlug: "proyectos-de-contenido"
tags: ["CRUD", "Clean Architecture", "Repository Pattern", "Enterprise", "React", "TypeScript", "DDD"]
difficulty: "advanced"
createdAt: "2025-07-26"
updatedAt: "2025-07-26"
isFeatured: false
project:
  slug: "tasks-app"
  name: "Tasks App"
  description: "Aplicación de gestión de tareas construida paso a paso en TikTok con arquitectura empresarial."
  order: 8
  totalParts: 12
---

## Task Module Implementation — Enterprise CRUD

### Role

Act as a Principal Software Architect, Senior Frontend Engineer and Technical Lead specialized in:

- React 19
- Vite
- TypeScript
- Clean Architecture
- Domain Driven Design (DDD)
- SOLID Principles
- Enterprise Frontend Architecture
- Repository Pattern
- Datasource Pattern
- Feature-Based Architecture
- RBAC
- UX Engineering
- UI Engineering
- Form Validation
- Enterprise CRUD Design

You are not a code generator.

You are the Lead Architect responsible for evolving this project while preserving every architectural decision already implemented.

You must inspect the project first. Understand the current architecture. Understand every layer. Understand every module.

Then build the complete Task module fully integrated into the existing application.

---

### Execution Mode

You are fully autonomous.

Do NOT ask questions. Do NOT ask for confirmation. Do NOT ask permission. Do NOT generate partial implementations. Do NOT stop after creating folders. Do NOT stop after creating interfaces. Do NOT wait for additional prompts.

Inspect the project. Understand it. Take architectural decisions. Execute absolutely everything necessary until the Task module is completely functional.

If something must be improved, improve it. If something must be refactored, refactor it. If new reusable components are needed, create them. If existing components should evolve, evolve them.

Always preserve the existing architecture.

---

### Project Context

The project already includes:

- React
- Vite
- TypeScript
- Clean Architecture
- Datasource Pattern
- Repository Pattern
- Authentication
- RBAC Authorization
- Responsive Sidebar
- Production UX
- Loading States
- Empty States
- Error States

The application is architecturally ready. Now it needs its first complete business module.

---

### Objective

Implement the entire **Task Module**.

Not just a CRUD. A complete enterprise-ready module.

Every layer must follow the project's architecture. The result must look like it was developed by a Senior Software Engineer.

---

### Domain

Create a complete Task domain.

**Entity: Task**

Suggested fields:

- id
- title
- description
- status
- priority
- dueDate
- createdAt
- updatedAt
- createdBy

**Status** — Todo, In Progress, Done

**Priority** — Low, Medium, High

Create any additional fields you consider necessary.

---

### Domain Layer

Implement every required domain object:

- Entities
- Enums
- Value Objects (if appropriate)
- Interfaces
- Repository Contracts
- Use Case Contracts
- Validation Rules
- Business Rules

The domain must remain framework-independent.

---

### Datasource Layer

Implement a LocalStorage datasource.

The datasource must expose every CRUD operation. Completely abstract persistence. The rest of the application must never know LocalStorage exists.

The implementation must allow replacing LocalStorage later with Firebase, REST API, GraphQL, Supabase — without changing UI or business logic.

---

### Repository Layer

Implement repository implementations. Repositories must consume Datasources. Never access LocalStorage directly outside the datasource. Follow Clean Architecture.

---

### Use Cases

Implement every business use case:

- CreateTask
- UpdateTask
- DeleteTask
- GetTask
- GetTaskById
- SearchTasks
- FilterTasks
- SortTasks
- ToggleTaskStatus
- BulkDeleteTasks (if appropriate)
- BulkStatusUpdate (if appropriate)

Create any additional use cases that improve scalability.

---

### DTOs

Create every DTO required: Input DTOs, Output DTOs, Mapper DTOs, Validation DTOs.

Everything should remain strongly typed.

---

### Mappers

Create reusable mappers: Entity ↔ DTO, Storage ↔ Domain, Repository ↔ Entity.

Avoid duplicated mapping logic.

---

### Validation

Implement enterprise validation:

- Required fields
- Minimum title length
- Maximum title length
- Description limits
- Valid due date
- Priority validation
- Status validation
- Duplicate title prevention (if appropriate)

Create reusable validation utilities.

---

### Pages

Create complete pages:

- Tasks List
- Create Task
- Edit Task
- Task Details (if appropriate)

Everything integrated into routing.

---

### Components

Create reusable UI components:

- TaskTable
- TaskCard
- TaskFilters
- TaskSearch
- TaskForm
- TaskModal
- DeleteConfirmation
- PriorityBadge
- StatusBadge
- TaskActions
- TaskToolbar
- TaskPagination
- TaskStatistics
- TaskHeader
- TaskEmptyState
- TaskSkeleton

Reuse existing design system.

---

### Table

Implement an enterprise table.

Support: Sorting, Searching, Filtering, Pagination, Responsive, Bulk selection, Row actions, Loading state, Empty state, Error state.

Everything reusable.

---

### Search

Implement global search.

Search by: Title, Description, Status, Priority, Any additional fields considered useful.

---

### Filters

Support filters: Status, Priority, Date, Created By, Any additional filters that improve usability.

---

### Sorting

Support sorting: Title, Priority, Status, Due Date, Created Date, Updated Date — Ascending and Descending.

---

### Modals

Implement modern reusable modals: Create, Edit, Delete Confirmation, Bulk Delete (if appropriate).

Follow current UI style.

---

### User Experience

Respect everything implemented previously:

- Loading States
- Skeletons
- Empty States
- Error States
- Success States
- Responsive Layout
- Dark Mode
- Accessibility
- Animations

Everything should integrate naturally.

---

### RBAC

Respect authorization.

**Admin** — Full CRUD

**Manager** — Create, Edit, View, Delete according to project rules

**Viewer** — Read only

Hide forbidden actions. Hide forbidden buttons. Hide forbidden menu options. Never rely only on UI. Respect authorization architecture.

---

### Forms

Professional forms: Validation, Error messages, Loading buttons, Disabled states, Keyboard navigation, Accessibility, Auto focus, Good UX.

---

### Hooks

Create reusable hooks:

- useTasks
- useCreateTask
- useUpdateTask
- useDeleteTask
- useSearchTasks
- useTaskFilters

Any additional hooks that improve architecture.

---

### Services

Create every service required. Keep services reusable. Respect separation of concerns.

---

### Performance

Optimize rendering. Memoize where appropriate. Avoid unnecessary renders. Avoid duplicated state. Lazy load when appropriate. Keep excellent performance.

---

### Accessibility

Everything must support: ARIA, Keyboard navigation, Screen readers, Focus management, Semantic HTML, WCAG.

---

### Responsiveness

Inspect every screen. Ensure perfect behavior on: Desktop, Tablet, Mobile.

Reuse responsive layout created previously.

---

### Code Quality

Follow: SOLID, DRY, KISS, Composition over inheritance, Single Responsibility, Open/Closed Principle, Dependency Inversion.

Never introduce technical debt.

---

### Architecture

Respect the project's folder structure. Do not create architectural inconsistencies. Every new file must follow the existing conventions. Reuse patterns already implemented. Do not duplicate code.

---

### Test the Implementation

After finishing: Inspect the module. Verify imports. Verify routing. Verify RBAC. Verify CRUD. Verify LocalStorage persistence. Verify forms. Verify filters. Verify sorting. Verify responsive behavior. Verify build compatibility.

Fix every detected issue automatically. Do not stop until everything works correctly.

---

### Final Report

Generate a detailed implementation report.

Include:

- Architecture decisions
- Files created
- Files modified
- Domain entities
- DTOs
- Repositories
- Datasources
- Use Cases
- Hooks
- Components
- Pages
- Routing changes
- RBAC integration
- UX improvements
- Performance improvements
- Accessibility improvements
- Future recommendations

---

### Final Goal

The application should no longer feel like a template.

It should feel like a real enterprise SaaS application.

The Task module must become the reference implementation for every future business module.

Execute everything autonomously from start to finish without requesting any confirmation.
