---
title: "Multi-Workspace SaaS Platform — Part 2: CRUD + Relationships + Migration + RBAC + Switcher"
description: "Prompt para implementar el sistema completo de Workspaces: CRUD, migración de datos, relaciones con entidades existentes, context global, switcher, RBAC por workspace y filtrado automático."
categorySlug: "desarrollo-de-software"
subcategorySlug: "proyectos-de-contenido"
tags: ["Workspace", "CRUD", "Migration", "RBAC", "Context", "SaaS", "JSON Server"]
difficulty: "advanced"
createdAt: "2025-07-26"
updatedAt: "2025-07-26"
isFeatured: false
project:
  slug: "tasks-app"
  name: "Tasks App"
  description: "Aplicación de gestión de tareas construida paso a paso en TikTok con arquitectura empresarial."
  order: 14
  totalParts: 16
---

## TaskFlow Evolution — Part 2: Complete Workspace Implementation

### Objective

Implement the complete Workspace system without breaking any existing functionality.

Transform the platform from **Single Shared Environment** into **Multi-Workspace SaaS Platform**.

All current modules must continue working while becoming Workspace-aware.

---

### Workspace Module

Create: `workspace/ → domain, application, infrastructure, presentation`. Follow the exact architecture pattern already used.

**Domain:** Workspace Entity, Repository Contract, DTOs, Use Cases, Value Objects.

**Entity:**

```ts
interface Workspace {
  id: string;
  name: string;
  slug: string;
  description: string;
  logo?: string;
  primaryColor?: string;
  ownerId: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
```

---

### JSON Server

Extend database with `workspaces` collection. Do not lose existing data.

---

### Data Migration (Critical)

Automatically create a Default Workspace. Assign all existing records (Users, Tasks, Notifications, Activity) a `workspaceId: "workspace-default"`.

Migration must be idempotent — running multiple times must not duplicate data.

---

### Entity Relationships

- **User** — Add `workspaceId: string`
- **Task** — Add `workspaceId: string`, optional `createdBy`, `updatedBy`, `completedBy`
- **Notification** — Add `workspaceId: string`
- **Activity Feed** — Add `workspaceId: string`

---

### Query Filtering

Every query must automatically filter by current Workspace. Users, Tasks, Notifications, Activity Feed, Dashboard must only show Current Workspace Data.

---

### Current Workspace Context

Create Workspace Context responsible for: Current Workspace, Workspace Switching, Workspace Persistence, Workspace Synchronization, Global Workspace State.

Persist selection (localStorage). When user refreshes, Workspace remains selected.

---

### Workspace CRUD

- **Create** — Name, Description, Logo, Primary Color, Owner. Validation: Required Name, Unique Slug, Required Owner.
- **Edit** — Name, Description, Logo, Color, Status, Owner.
- **Delete** — SOFT DELETE ONLY (`isActive = false`). Protect Default Workspace.
- **View** — General Information, Members, Tasks, Statistics, Recent Activity.

---

### Workspace List Page (`/workspaces`)

Features: Search, Filters, Pagination, Sorting, Status, Responsive table, Cards for mobile.

---

### Workspace Details Page (`/workspaces/:id`)

Sections: Overview, Members, Tasks, Activity, Notifications, Settings, Analytics.

---

### Workspace Switcher

Location: Header, visible globally. Display: Logo, Name, Color, Current Workspace.

Click opens dropdown with all workspaces + "Create Workspace" option.

**Switch Action:** Update global state, Refresh queries, Invalidate caches, Reload workspace-aware data (Dashboard, Tasks, Users, Notifications, Activity Feed) without breaking UX.

---

### Workspace Member Management

- **Add Member** — Select existing users, assign to Workspace.
- **Remove Member** — Prevent removing Workspace Owner.

---

### Workspace Roles

```ts
OWNER   // Full access, Delete Workspace, Transfer Ownership
ADMIN   // Manage Tasks/Users/Notifications, cannot Delete Workspace
MEMBER  // Create/Edit own Tasks, View Workspace
VIEWER  // Read-only
```

Create Workspace RBAC protecting: Routes, Actions, Buttons, Menus, Forms, Modals.

---

### Routing

```
/workspaces
/workspaces/create
/workspaces/:id
/workspaces/:id/settings
/workspaces/:id/members
```

Use lazy loading.

---

### Integration with Existing Modules

- **Dashboard** — Only show Current Workspace Data.
- **Tasks** — Filter by workspace, assign workspaceId automatically on create.
- **Users** — Only show Workspace Members.
- **Notifications** — Workspace scoped, Unread counter workspace scoped.
- **Activity Feed** — Workspace scoped.

---

### Performance

Use workspace-scoped Query Keys: `["tasks", workspaceId]`, `["users", workspaceId]`, etc. Invalidate intelligently.

---

### Final Validation

Verify: Workspace CRUD, Switching, Persistence, Roles, Tasks/Users/Notifications/Activity/Dashboard filter correctly, No existing functionality breaks, Migration succeeds, JSON Server remains operational, Responsive behavior works, Architecture remains clean.
