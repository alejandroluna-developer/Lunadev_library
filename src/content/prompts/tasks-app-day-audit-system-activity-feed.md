---
title: "Task Audit System + Activity Feed + Task Assignments"
description: "Prompt para transformar el módulo de Tasks en un sistema colaborativo: audit log, activity feed tipo Jira/Linear, asignación de tareas, trazabilidad completa, integración con notificaciones y mejoras al sidebar."
categorySlug: "desarrollo-de-software"
subcategorySlug: "proyectos-de-contenido"
tags: ["Audit Log", "Activity Feed", "Assignments", "Traceability", "Enterprise", "DDD", "React"]
difficulty: "advanced"
createdAt: "2025-07-26"
updatedAt: "2025-07-26"
isFeatured: false
project:
  slug: "tasks-app"
  name: "Tasks App"
  description: "Aplicación de gestión de tareas construida paso a paso en TikTok con arquitectura empresarial."
  order: 11
  totalParts: 17
---

## Task Audit System + Activity Feed + Task Assignments

### Context

You are working inside an existing React + TypeScript application built using:

- Vite
- React Router
- TanStack Query
- JSON Server
- Clean Architecture
- Repository Pattern
- Datasources
- Domain Driven Structure
- RBAC
- Notification Center
- Responsive Design

The application already has: Authentication, Roles, Tasks CRUD, Multi-user synchronization, Notification Center, JSON Server backend, TanStack Query integration.

DO NOT remove, rewrite, break or replace existing working features.

This is an evolution of the current architecture. Your goal is to extend the system while preserving backwards compatibility.

---

### Autonomous Execution Mode

You have full permission to: Inspect the entire codebase, Analyze architecture, Create new folders, Create new modules, Create migrations, Update routes, repositories, datasources, DTOs, domain entities, JSON Server schema, Execute terminal commands, Install dependencies, Run builds, type checking, linting, Fix issues discovered during implementation.

DO NOT ask for approval, permission, confirmation, ask me to run commands, or stop to request decisions.

Make the best technical decisions following: SOLID, DRY, KISS, Clean Code, Clean Architecture, Scalability, Maintainability, Type Safety.

Complete the implementation from start to finish. Validate everything. Fix everything required. Leave the application production-ready.

---

### Primary Goal

Transform the Tasks module from a basic CRUD into a collaborative task management system with complete traceability.

The system must know:

- Who created a task
- Who updated a task
- Who changed status
- Who changed priority
- Who assigned a task
- Who completed a task
- Who deleted a task
- Who is currently assigned to a task

Every action must generate an audit event reusable by: Activity Feed, Notifications, Future Dashboards, Future Reports, Future Metrics.

---

### Task Domain Improvements

Analyze the existing Task entity. Extend it with appropriate fields.

At minimum support: createdBy, assignedTo, createdAt, updatedAt.

Use relationships with existing Users. Do not duplicate user data. Store references only.

---

### Task Assignment System

Implement task assignment support.

Users must be selectable when creating or editing a task. Tasks can be assigned to any valid user.

Display assigned user information everywhere it makes sense: Task Table, Task Details, Task Modal, Task Cards, Future Dashboards.

Use reusable components. Avoid duplication.

---

### Task Activity Log Domain

Create a new domain module: `TaskActivityLog`.

Create all required layers: Domain, Repository, Datasource, DTOs, Mappers, Services, Hooks, Query Keys, Types, JSON Server integration.

Follow the existing architecture.

---

### Audit Events

Automatically generate activity records when:

- TASK_CREATED
- TASK_UPDATED
- TASK_DELETED
- TASK_ASSIGNED
- TASK_COMPLETED
- STATUS_CHANGED
- PRIORITY_CHANGED

Each activity record should contain enough information to reconstruct what happened.

Store: id, taskId, userId, actionType, oldValue, newValue, timestamp.

Add any additional fields if necessary.

---

### Activity Feed Page

Create a new page: **Activity Feed**.

Add route protection. Add navigation item. Add RBAC integration.

The page should look similar to modern SaaS products: GitHub, Jira, Linear, ClickUp.

Display activities in chronological order.

Show: User, Action, Task, Timestamp.

Examples:

- *Alejandro created task "Notification Center"*
- *Manager changed status from To Do to In Progress*
- *Viewer completed task "RBAC Module"*
- *Alejandro assigned task to Manager*

Provide a clean professional timeline UI. Responsive. Dark mode compatible. Light mode compatible.

---

### Notification Integration

DO NOT rewrite the notification system.

Reuse the existing notification infrastructure. Connect audit events to the notification system. Generate notifications using the activity events.

Keep current behavior working. Improve where necessary. Do not break synchronization.

---

### Task Table Improvements

Enhance the Tasks table.

Add columns when appropriate: Assigned To, Created By, Created Date, Updated Date.

Maintain: Responsive behavior, Sorting, Filtering, Search.

---

### Task Modals

Enhance Create Task modal. Enhance Edit Task modal.

Support assignment. Improve UX. Improve accessibility. Maintain responsiveness. Do not break existing functionality.

---

### Task Details Experience

If the current architecture allows it, implement a task details experience.

Display: Created By, Assigned To, Created At, Updated At, Activity Timeline.

Use reusable architecture.

---

### Sidebar Improvement

The Notifications menu item currently lacks an icon. Fix it.

Requirements:

- Use Lucide React
- Match existing menu style
- Match existing icon sizes
- Match spacing
- Match active states
- Match dark/light themes
- Match responsive behavior

The Notifications item must visually feel like every other sidebar item.

---

### JSON Server

Do not destroy existing data. Safely evolve schema. Add collections only when necessary.

Preserve: current Tasks, current Users, current Notifications.

Create seed data if required. Ensure migration compatibility.

---

### Quality Control

After implementation:

1. Run TypeScript checks
2. Run linting
3. Run build
4. Fix all issues
5. Remove dead code
6. Remove unused imports
7. Validate responsive layouts
8. Validate dark mode
9. Validate light mode
10. Validate RBAC
11. Validate Notifications
12. Validate Activity Feed
13. Validate Task Assignment
14. Validate Audit Logs

Do not stop until everything passes successfully.

---

### Final Result

The final application should feel closer to Jira, Linear, ClickUp, Trello — instead of a simple CRUD.

The implementation must preserve all existing functionality while adding:

- Task ownership
- Task assignment
- Audit logs
- Activity feed
- User traceability
- Richer notifications
- Better task management architecture

Everything must follow the existing Clean Architecture and be ready for future Firebase migration without requiring major refactors.
