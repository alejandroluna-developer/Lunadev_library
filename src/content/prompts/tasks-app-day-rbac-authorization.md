---
title: "RBAC Authorization Module — Enterprise Implementation"
description: "Prompt para implementar un sistema completo de autorización RBAC: protección de rutas, navegación role-aware, Access Denied UX, component-level authorization y arquitectura centralizada extensible."
categorySlug: "desarrollo-de-software"
subcategorySlug: "proyectos-de-contenido"
tags: ["RBAC", "Authorization", "Guards", "Clean Architecture", "Security", "Enterprise", "React"]
difficulty: "advanced"
createdAt: "2025-07-26"
updatedAt: "2025-07-26"
isFeatured: false
project:
  slug: "tasks-app"
  name: "Tasks App"
  description: "Aplicación de gestión de tareas construida paso a paso en TikTok con arquitectura empresarial."
  order: 5
  totalParts: 7
---

## RBAC Authorization Module — Enterprise Implementation

### Role

Act as a Principal Software Architect with deep expertise in:

- React 19
- Vite
- TypeScript
- Clean Architecture
- Domain Driven Design (DDD)
- SOLID Principles
- Feature First Architecture
- Repository Pattern
- Datasource Pattern
- Enterprise Frontend Architecture
- Authentication & Authorization
- RBAC (Role Based Access Control)

Your responsibility is NOT to generate isolated code.

Your responsibility is to inspect the entire project, understand the current architecture, detect improvement opportunities and evolve the project while preserving every architectural decision already implemented.

Think like a Senior Software Architect working on a production enterprise application.

---

### Context

The project already contains a complete Authentication Module.

Authentication is already working.

Current features include:

- Login
- Register
- Forgot Password
- Session Management
- AuthGuard
- GuestGuard
- Local Datasource
- Repository Pattern
- Clean Architecture
- Domain Layer
- Infrastructure Layer
- Presentation Layer

Do NOT rebuild anything that already exists.

Inspect the current implementation first.

Understand how every module communicates before making changes.

Your implementation must feel native to the existing architecture.

---

### Current Problem

The application already defines three roles inside the domain:

```ts
ADMIN
MANAGER
VIEWER
```

However, those roles are only stored as user information.

They are NOT used to control:

- Routes
- Pages
- Navigation
- Views
- Components
- Permissions
- Access Rules

Current behavior:

```
User Login → AuthGuard → isAuthenticated() → Access Granted → User can access every page
```

This is NOT acceptable for a production application.

---

### Objective

Transform the current authentication architecture into a complete enterprise authorization architecture based on RBAC (Role Based Access Control).

This implementation must be: Enterprise Ready, Production Ready, Clean, Scalable, Extensible, Maintainable, Decoupled, Reusable.

Do NOT implement quick fixes. Implement a complete architecture.

---

### Business Rules

**ADMIN** — Can access every application page. No restrictions.

**MANAGER** — Can ONLY access: Profile, Users. Everything else must be restricted.

**VIEWER** — Can ONLY access: Tasks. Everything else must be restricted.

---

### Important

Do NOT hardcode permissions inside React components.

Examples like this are forbidden:

```tsx
if (role === "ADMIN")
```

```tsx
role === UserRole.ADMIN
```

Authorization rules must live in a centralized architecture.

---

### What You Should Do

Inspect the entire project. Detect the existing routing architecture. Detect the authentication architecture. Detect how guards are implemented. Detect how repositories work. Detect how datasources work. Detect shared utilities. Detect presentation layer conventions. Detect dependency injection patterns if they exist.

After understanding the architecture, design the best authorization solution that naturally integrates into the project.

Do NOT force an architecture. Adapt to the existing one.

---

### Authorization Architecture

Create a centralized authorization system.

The authorization rules must live in a single place.

It must be extremely easy to:

- Add a new role
- Remove a role
- Modify permissions
- Protect a new page
- Protect components
- Change navigation

without editing dozens of files.

---

### Route Protection

Inspect every application route.

Protect them according to the business rules.

Every protected route must clearly define which roles can access it.

Authentication and Authorization must be independent responsibilities.

- Authentication answers: "Who are you?"
- Authorization answers: "What are you allowed to do?"

Do NOT mix both responsibilities.

---

### Navigation

The application's navigation must become role-aware.

A user should NEVER see navigation entries for pages they cannot access.

Navigation must be generated using the authorization system.

Do NOT hide links using CSS. Generate navigation from permissions.

---

### URL Protection

Typing a URL manually must NEVER bypass authorization.

Example: A Viewer types `/users`

Expected behavior:

- Route must never render.
- Protected components must never mount.
- User must be redirected immediately.
- Show a professional Access Denied experience.

---

### Access Denied Experience

Create a professional unauthorized page.

It should include:

- Modern UI
- Responsive Design
- Dark Mode / Light Mode
- Clear explanation
- Return button
- Safe navigation
- Logout option when appropriate

The UX should feel polished.

---

### Component Authorization

Analyze whether component-level authorization is necessary.

If appropriate, create reusable authorization helpers/components that can hide or display sections based on permissions.

Do NOT duplicate authorization logic. Everything should reuse the centralized authorization engine.

---

### Future Backend Compatibility

This authorization system MUST NOT depend on the current datasource.

Today authentication comes from Local Storage.

Tomorrow it may come from: Firebase Authentication, Auth0, Supabase, Keycloak, JWT, OAuth, REST API, GraphQL.

The authorization layer must remain exactly the same. Only the datasource should change. This is mandatory.

---

### Clean Architecture

Respect the current architecture.

Never place business rules inside UI components. Never mix Presentation with Domain. Never break dependency direction. Never introduce tight coupling.

Follow: SOLID, DRY, KISS, Separation of Concerns, Single Responsibility Principle.

Refactor only where it adds architectural value.

---

### Performance

Avoid unnecessary renders. Avoid duplicated calculations. Reuse existing abstractions. Keep authorization lightweight. No regressions.

---

### Scalability

The solution must easily support future roles such as:

- SUPER_ADMIN
- SUPPORT
- EDITOR
- AUDITOR
- CLIENT
- FINANCE

without requiring structural changes.

It should also support future permission-based authorization if the application evolves beyond role-based access.

Design for long-term scalability.

---

### Developer Experience

The resulting architecture should be intuitive.

A developer should immediately understand:

- Where permissions live
- Where roles are configured
- How to protect a page
- How to protect a component
- How to add a new role

without reading extensive documentation.

---

### Code Quality

Eliminate duplicated logic. Improve readability. Improve maintainability. Prefer composition over duplication. Prefer reusable abstractions. Produce production-quality code.

---

### Final Deliverable

After implementation, generate a complete architectural report including:

**Architecture Overview** — Explain the new authorization architecture.

**Files Created** — List every new file.

**Files Modified** — List every modified file.

**Authorization Flow** — Explain the complete authorization flow.

**Authentication Flow** — Explain how authentication and authorization now work together.

**Route Protection** — Explain how routes are protected.

**Navigation Protection** — Explain how navigation is generated.

**Future Backend Integration** — Explain why replacing the datasource requires no authorization changes.

**Adding New Roles** — Explain how developers should add a new role.

**Protecting New Pages** — Explain how new pages should be protected.

**Best Practices Implemented** — List all architectural improvements.

**Possible Future Enhancements** — Suggest future improvements while preserving the current architecture.

---

### Execution Mode

Do NOT ask questions. Do NOT ask for confirmation. Do NOT provide alternatives. Do NOT stop halfway.

Inspect the entire project. Understand the architecture. Make architectural decisions automatically. Implement everything necessary. Refactor only when beneficial.

Deliver a complete enterprise-grade RBAC implementation fully integrated into the existing project.
