---
title: "JSON Server + Enterprise Notification Platform"
description: "Prompt para migrar de LocalStorage a JSON Server, implementar sincronización multi-usuario con TanStack Query polling, plataforma de notificaciones enterprise con real-time detector, toasts, bell animations y arquitectura Firebase-ready."
categorySlug: "desarrollo-de-software"
subcategorySlug: "proyectos-de-contenido"
tags: ["JSON Server", "TanStack Query", "Notifications", "Real-Time", "Multi-User", "Enterprise", "SaaS"]
difficulty: "advanced"
createdAt: "2025-07-26"
updatedAt: "2025-07-26"
isFeatured: false
project:
  slug: "tasks-app"
  name: "Tasks App"
  description: "Aplicación de gestión de tareas construida paso a paso en TikTok con arquitectura empresarial."
  order: 10
  totalParts: 17
---

## JSON Server + Enterprise Notification Platform

### Role

You are a Principal Software Architect, Principal Full Stack Engineer, Principal Frontend Engineer, React Architect, TypeScript Architect, Clean Architecture Specialist, Enterprise SaaS Architect, System Designer and Senior DevOps-minded Engineer.

You have FULL AUTONOMY.

**DO NOT:** Ask questions, Request confirmation, Stop for approval, Leave TODOs, Leave placeholders, Generate partial implementations, Ask the user for technical decisions.

**You are authorized to:** Analyze the entire codebase, Refactor any module, Move files, Create new modules, Create new abstractions, Install dependencies, Remove obsolete code, Improve architecture, Improve UX, Improve accessibility, Improve performance, Create services, hooks, repositories, datasources, pages, components, domain entities.

**Always choose:** SOLID, DRY, KISS, Clean Architecture, Strong Typing, Composition Over Inheritance, Feature Modularization, Scalability, Maintainability.

No shortcuts. No technical debt. No temporary fixes.

---

### Primary Objective

Transform the application from:

```
React → LocalStorage
```

Into:

```
React → Use Cases → Repositories → Datasources → JSON Server
```

while simultaneously implementing:

- Enterprise Notification Platform
- Multi-user synchronization
- Near Real-Time Updates
- SaaS-grade UX
- Firebase-ready architecture

The final application must behave like a real SaaS platform.

---

### Business Requirement

The application must support multiple simultaneous users.

Example: Chrome → Admin, Firefox → Manager, Edge → Viewer.

All users must share: Users, Tasks, Notifications, Assignments, Relationships, Roles — through the same JSON Server instance.

No LocalStorage business persistence allowed.

---

### Multi-User Synchronization

When ANY user creates a task, ALL other users must receive:

- Task update
- Notification
- Toast
- Badge update
- Bell animation
- Notification center update

Without refreshing the page. Mandatory.

---

### LocalStorage Audit

Analyze the entire codebase. Find ALL LocalStorage usages. Generate migration strategy.

Move ALL business entities to JSON Server. Migrate: Users, Tasks, Notifications, Assignments, Ownership, Relationships, User management data.

LocalStorage may only store: Session, Token, Logged User. Nothing else.

---

### JSON Server

Create a complete local backend.

Database: `database/db.json`

Collections:

```json
{
  "users": [],
  "tasks": [],
  "notifications": []
}
```

Create: Scripts, Startup commands, Seed data, Documentation, Local backend architecture.

Application must be runnable immediately.

---

### Data Models

**Users:** id, name, email, role, avatar, status, createdAt, updatedAt.

**Tasks:** id, title, description, priority, status, assignedTo, createdBy, createdAt, updatedAt.

**Notifications:** id, userId, role, createdBy, type, priority, title, message, read, link, createdAt.

Expand when necessary.

---

### TanStack Query

Use TanStack Query as the official server state manager.

Required: Query Cache, Query Invalidation, Polling, Background Refetch, Optimistic Updates.

Do NOT use: SWR, RTK Query, Context for server state, Custom polling implementations.

---

### Real-Time Strategy

Tasks and Notifications must remain synchronized between browsers.

```
User A Action → JSON Server → TanStack Query Polling → Query Invalidation → UI Updates → Toast → Bell → Badge → Notification Center
```

No refresh.

---

### Enterprise Notification Platform

Build a complete notification system inspired by: GitHub, Jira, Linear, ClickUp, Azure DevOps, Notion.

This is NOT a simple notification bell. This is a complete Notification Platform.

---

### Notification Types

- TASK_CREATED
- TASK_UPDATED
- TASK_DELETED
- TASK_ASSIGNED
- TASK_COMPLETED
- TASK_STATUS_CHANGED
- USER_CREATED
- USER_UPDATED
- ROLE_CHANGED
- PROFILE_UPDATED
- SYSTEM
- SECURITY
- WELCOME

---

### Notification Priorities

LOW, MEDIUM, HIGH, CRITICAL — each with Color, Badge, Icon, Visual identity.

---

### Notification Targeting

**Individual:** `{ "userId": "viewer" }`

**Role Based:** `{ "role": "ADMIN" }`

**Broadcast:** `{ "userId": null, "role": null }`

Users must only see intended notifications.

**Critical rule:** Task events are BROADCAST notifications — ALL authenticated users receive them regardless of role.

---

### Notification Dispatcher

Tasks must NEVER manipulate notifications directly.

```
Task Action → NotificationDispatcher → Notification Use Case → Repository → Datasource → JSON Server
```

---

### Notification Realtime Detector

Create `NotificationRealtimeDetector`:

- Track previous notifications
- Track current notifications
- Detect new notifications
- Detect unread notifications
- Prevent duplicate toasts
- Prevent duplicate animations

```
previousNotifications → currentNotifications → compare ids → find new → toast → bell animation → badge animation
```

---

### Visual Notification Experience

```
Notification Stored → Polling Detects Change → Realtime Detector Detects New → Toast Appears → Bell Animates → Badge Updates → Notification Center Updates
```

Without refresh. Mandatory.

---

### Toast System

Display: Icon, Title, Message, Relative time.

Features: Auto close, Manual close, Deep link navigation, Accessible, Responsive.

---

### Notification Bell

Add bell to header.

Features: Responsive, Accessible, Animated.

When unread notifications arrive: Bell shake, Bell pulse, Badge scale animation.

---

### Notification Dropdown

Features: Recent notifications, Read/Unread, Mark all as read, Clear all, View all, Scrollable, Accessible, Keyboard friendly.

ESC closes. Outside click closes.

---

### Notification Center

Route: `/notifications`

Features: Search, Filters, Sorting, Grouping, Analytics, Pagination, Empty states, Loading states, Error states.

**Analytics:** Total Notifications, Unread, Read, Critical, By Type.

---

### Relative Time

Display: Just now, 2 minutes ago, 5 minutes ago, 1 hour ago, Yesterday, 2 days ago.

Avoid raw timestamps.

---

### Deep Links

Notification click navigates to related resource: Task Assigned → Open Task, Task Updated → Open Task, Profile Updated → Open Profile.

---

### React Query Hooks

Create: useUsers(), useTasks(), useNotifications(), useUnreadCount(), useNotificationActions(), useNotificationCenter(), useNotificationFilters().

---

### Firebase Ready

Future migration must allow replacing `JsonServer*Datasource` with `Firebase*Datasource` WITHOUT changing Components, Pages, Hooks, Use Cases, or Domain. Only datasources should change.

---

### PNPM Compatibility

Project must support: PNPM 9, PNPM 10, Node 22 LTS, Node 24.

Fix `ERR_PNPM_IGNORED_BUILDS` permanently. Provide onboarding and startup documentation.

---

### Startup Hardening

The following commands must work without hidden steps:

- `pnpm install`
- `pnpm run dev`
- `pnpm run start`
- `pnpm run server`
- `pnpm run dev:full`

---

### Health Check

Create: `pnpm run doctor`

Checks: Node Version, PNPM Version, JSON Server Running, Database Exists, Dependencies Installed, Build Permissions Approved, Notification Engine Healthy, Polling Engine Healthy, API Reachable.

---

### Seed Data

Generate users (Admin, Manager, Viewer) with Tasks, Notifications, Assignments including Read/Unread, different priorities, statuses and roles.

Application must look populated immediately.

---

### End-to-End Tests

**Test 1:** Admin creates task → Manager and Viewer receive Task + Notification + Toast.

**Test 2:** Manager creates task → Admin and Viewer receive Task + Notification + Toast.

**Test 3:** Viewer creates task → Admin and Manager receive Task + Notification + Toast.

**Test 4:** Notification arrives → verify Persistence, Polling, Invalidation, Badge, Bell, Toast, Center Update.

**Test 5:** Fresh clone → `pnpm install` → `pnpm run dev:full` → Application starts successfully.

---

### Final Validation

Verify: Build Success, TypeScript Success, Lint Success, Multi User Support, Task Synchronization, Notification Synchronization, Broadcast Notifications, Cross Browser Notifications, Toast Synchronization, Badge Synchronization, Bell Animation, Notification Realtime Detector, Polling, Analytics, Search, Filters, Deep Links, Accessibility, Responsive Design, JSON Server Integration, Firebase Ready Architecture, PNPM Compatibility, Clean Architecture Compliance.

---

### Final Report

Generate a detailed report including:

1. LocalStorage Audit
2. Migration Strategy
3. JSON Server Architecture
4. Collections Created
5. Domain Entities
6. Repositories
7. Datasources
8. TanStack Query Setup
9. Polling Strategy
10. Notification Architecture
11. Notification Flows
12. Multi User Flows
13. Broadcast Strategy
14. Realtime Detector
15. PNPM Compatibility Fixes
16. Developer Experience Improvements
17. Accessibility Improvements
18. Responsive Improvements
19. Firebase Migration Strategy
20. Recommended Next Improvements

Analyze the entire project. Make all decisions autonomously. Implement everything completely. Deliver a production-ready multi-user SaaS experience powered by React, TypeScript, Clean Architecture, JSON Server, TanStack Query and a complete Enterprise Real-Time Notification Platform.
