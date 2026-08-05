---
title: "Smart Dashboard SaaS Analytics — Full Responsive Edition"
description: "Prompt para construir un dashboard SaaS completo: KPI cards animados, analytics con Recharts, activity feed, insights dinámicos, role-aware, full responsive desde mobile hasta ultrawide, sin romper nada existente."
categorySlug: "desarrollo-de-software"
subcategorySlug: "proyectos-de-contenido"
tags: ["Dashboard", "Analytics", "Recharts", "SaaS", "Responsive", "RBAC", "TanStack Query"]
difficulty: "advanced"
createdAt: "2025-07-26"
updatedAt: "2025-07-26"
isFeatured: false
project:
  slug: "tasks-app"
  name: "Tasks App"
  description: "Aplicación de gestión de tareas construida paso a paso en TikTok con arquitectura empresarial."
  order: 12
  totalParts: 17
---

## Smart Dashboard SaaS Analytics — Full Responsive Edition

### Context

You are working inside an existing application built with: React, TypeScript, Vite, TanStack Query, JSON Server, Clean Architecture, Repository Pattern, RBAC, Notification Center, Activity Feed, Task Assignment System, Multi-user Synchronization.

The application already supports: Authentication, Roles, Users, Tasks, Notifications, Activity Feed, Audit Logs, Task Assignments, Real-time synchronization through polling.

**DO NOT BREAK ANY EXISTING FEATURE. DO NOT REMOVE ANY EXISTING FUNCTIONALITY.**

The objective is to EVOLVE the platform into a more professional SaaS experience.

---

### Autonomous Execution Mode

You have full permission to: Analyze the project, Inspect all modules, Create new folders, components, hooks, repositories, datasources, DTOs, entities, Install dependencies, Execute terminal commands, Run lint, build, type checks, Fix discovered issues, Improve UX where needed.

DO NOT ASK FOR PERMISSION. DO NOT ASK FOR CONFIRMATION. DO NOT ASK ME TO RUN COMMANDS. DO NOT ASK WHICH OPTION TO CHOOSE.

Make the best engineering decisions autonomously using: SOLID, DRY, KISS, Clean Architecture, Reusability, Accessibility, Scalability.

---

### Critical Requirement — Do Not Break Existing Features

The following modules are already working and MUST remain functional:

- Authentication
- Role management
- Tasks CRUD
- Task Assignments
- Notifications
- Activity Feed
- Audit Logs
- JSON Server integration
- TanStack Query integration
- Real-time synchronization
- Dark Mode / Light Mode

Before modifying anything: Analyze the current architecture. Reuse existing code whenever possible. Extend existing modules instead of replacing them. The Dashboard must consume existing data sources. Never duplicate business logic.

---

### Primary Objective

Create a professional SaaS Dashboard that uses all information already available in the system.

The dashboard should feel inspired by: Linear, Jira, ClickUp, Notion, Asana.

The dashboard must transform system data into useful business information — not just display numbers, but display insights, activity, trends, productivity.

---

### Full Responsive Requirement (Highest Priority)

**DESKTOP (1440px / 1920px / 2K / Ultrawide)**

- USE THE AVAILABLE SCREEN WIDTH.
- Do not leave large empty areas.
- Do not center a narrow container.
- Do not artificially limit width.
- Do not create giant margins.
- Use modern grid layouts with multiple columns.
- KPI cards displayed across the width.
- Analytics displayed side by side.
- Activity Feed and Insights displayed simultaneously.

**LAPTOP (1366–1536px)** — Use most of horizontal space, maintain multi-column layout, avoid unnecessary wrapping.

**TABLET (iPad / Galaxy Tab)** — Reorganize layout gracefully, reduce columns, no horizontal scrolling.

**MOBILE** — Single-column layout, cards stacked vertically, charts adapted for small screens, touch-friendly, no overflow, no broken charts, no horizontal scroll.

---

### Responsive Grid System

Suggested behavior:

- **Desktop:** 4 to 6 KPI cards per row, Analytics side by side, Activity Feed and Insights side by side
- **Laptop:** 3 to 4 KPI cards per row
- **Tablet:** 2 KPI cards per row
- **Mobile:** 1 KPI card per row

---

### Section 1 — Welcome Area

Display: User name, User role, Current date, Friendly welcome message.

Example: *Welcome back Alejandro — Here is your workspace summary for today.*

---

### Section 2 — KPI Cards

Create modern animated statistic cards.

At minimum:

- Total Tasks
- Completed Tasks
- In Progress Tasks
- Pending Tasks
- High Priority Tasks
- Active Users

Cards should include: Icon, Value, Label, Trend indicator, Hover effect, Responsive behavior.

---

### Section 3 — Task Status Analytics

Display: To Do, In Progress, Completed, Blocked.

Use Recharts. Select the most appropriate chart type. Must be responsive.

---

### Section 4 — Task Priority Analytics

Display: Low, Medium, High.

Use a modern chart. Must be responsive.

---

### Section 5 — Tasks by User

Display: Assigned Tasks, Completed Tasks, Productivity ranking.

Show top contributors.

---

### Section 6 — Recent Activity

Reuse Activity Feed.

Display: User, Action, Task, Timestamp.

Modern timeline design.

---

### Section 7 — Notification Summary

Reuse Notification Center.

Display: Recent notifications, Unread count.

Provide navigation shortcuts.

---

### Section 8 — My Tasks

Display tasks assigned to logged user.

Include: Status, Priority, Due Date.

Actions: View, Edit — all buttons functional.

---

### Section 9 — System Insights

Generate dynamic insights calculated from real data.

Examples:

- *You have 5 pending tasks.*
- *Most tasks are High Priority.*
- *The most active user this week is Alejandro.*
- *12 tasks were completed this week.*

---

### Dashboard Navigation Improvements

Perform a complete dashboard audit.

Identify and fix: Buttons without actions, Dead links, Placeholder interactions, Incomplete navigation.

Every visible action must work.

---

### Task Quick Actions

Add: Create Task, View Tasks, Activity Feed, Notifications.

All must navigate correctly.

---

### Role-Aware Dashboard

- **Admin:** Full visibility.
- **Manager:** Team visibility.
- **Viewer:** Personal visibility only.

Respect RBAC. Do not expose restricted information.

---

### Performance

Use: TanStack Query, Memoization, Query Keys, Optimized Selectors.

Avoid unnecessary rerenders. Optimize chart rendering. Optimize derived calculations.

---

### Dark Mode / Light Mode

Fully support both themes. No visual inconsistencies. No unreadable text. No hardcoded colors.

---

### Animations

Professional animations only: Card hover, Number transitions, Timeline appearance, Chart entrance.

Avoid excessive motion.

---

### Architecture

Create a dedicated Dashboard module.

Suggested structure:

```
dashboard/
├── domain
├── application
├── infrastructure
└── presentation
```

Follow existing architecture patterns. Consume data through repositories. Avoid coupling with Tasks module.

---

### Quality Control

Before finishing:

1. Run build
2. Run lint
3. Run type check
4. Fix all errors and warnings
5. Remove dead code
6. Validate responsiveness on Desktop, Laptop, Tablet, Mobile
7. Validate RBAC
8. Validate notifications
9. Validate Activity Feed
10. Validate charts
11. Validate Dark Mode / Light Mode
12. Validate navigation
13. Validate accessibility

Do not stop until everything passes.

---

### Final Goal

Transform the current application into a professional SaaS platform dashboard.

When a user logs in they should instantly understand: What is happening, What tasks exist, What changed recently, What requires attention, Who is most active, What their priorities are.

The Dashboard must feel like the operational center of the platform. It must leverage everything built in previous chapters. It must not break any existing functionality. It must be production-ready.

It must use the full available width on desktop and laptop screens while remaining perfectly responsive on tablets and mobile devices.
