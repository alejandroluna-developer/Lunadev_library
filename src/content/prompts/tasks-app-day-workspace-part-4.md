---
title: "Multi-Workspace SaaS Platform — Part 4: Member Management + Role Management + UX Enhancement"
description: "Prompt para mejorar la gestión de miembros (Add/Remove/Search), role management, transfer ownership, fixes de bugs críticos, hover states, accessibility y refinamiento responsive del módulo Workspace."
categorySlug: "desarrollo-de-software"
subcategorySlug: "proyectos-de-contenido"
tags: ["Members", "Roles", "Collaboration", "UX", "Accessibility", "Bug Fixes", "SaaS"]
difficulty: "advanced"
createdAt: "2025-07-26"
updatedAt: "2025-07-26"
isFeatured: false
project:
  slug: "tasks-app"
  name: "Tasks App"
  description: "Aplicación de gestión de tareas construida paso a paso en TikTok con arquitectura empresarial."
  order: 16
  totalParts: 17
---

## TaskFlow — Workspace UX Enhancement & Collaboration System

### Context

The Workspace module has already been implemented and is working correctly.

DO NOT REBUILD IT. DO NOT BREAK EXISTING FUNCTIONALITY. DO NOT MODIFY BUSINESS RULES THAT ARE ALREADY WORKING.

This task is focused on: Improving Workspace UX/UI, Member Management, Role Management, Accessibility, Responsive Behavior, Visual Consistency, SaaS Experience.

---

### Autonomous Execution Mode

You are authorized to: Execute commands, Install dependencies, Create/modify files, Refactor code, Run migrations/lint/build/tests, Fix issues automatically.

DO NOT ASK FOR PERMISSION. DO NOT REQUEST CONFIRMATION. DO NOT STOP TO ASK QUESTIONS.

---

### Critical Bugs to Fix First

**Bug #1 — Add Member Search Not Showing Users**

The `useUsers` hook automatically filters by active workspace, resulting in empty results in AddMemberModal.

Fix: Support fetching ALL users without workspace filtering by passing `workspaceId: ''` (empty string) to skip auto-filtering. In AddMemberModal, use `useUsers({ pageSize: 200, workspaceId: '' })` then filter client-side to show only users NOT already in the workspace.

**Bug #2 — Remove Member Not Updating UI**

Root cause: `useWorkspaceMembers().removeMember` only invalidates `['workspaces']` but NOT `['workspace_members_detail']` or `['users']`. WorkspaceSettings reads stale Redux snapshot.

Fix: Invalidate all related queries after add/remove. Use `useWorkspaceById(activeWorkspace?.id)` to get fresh server data instead of relying on Redux snapshot.

---

### Add Member Feature

Create "Add Member" action — visible only to Owner and Admin.

**Add Member Modal:** Search User (by name/email, dynamic results), Role Selector (Owner/Admin/Member/Viewer), Department (optional: Engineering, Design, Product, Marketing, Operations), Add Member Button (assign user, create relationship, refresh UI, invalidate queries).

---

### Role Management

Implement role editing with dropdown per member row. No modal required.

**Role Change Rules:** Owner cannot remove/demote himself unless ownership transferred. Admin cannot promote to Owner. Viewer is read-only.

---

### Transfer Ownership

Action visible only to Owner. Confirmation modal with current owner, new owner info.

---

### Member Table Redesign

Replace current table with: Avatar, Name, Email, Role, Department, Status (🟢 Online, 🟡 Away, ⚫ Offline), Last Activity (relative time), Actions.

**Search Members** — Support Name, Email, Role. Real-time filtering.

**Member Empty State** — "No members yet. Invite your first member to start collaborating." + Add Member button.

---

### Workspace Overview Panel

**Workspace Summary Card:** Logo, Name, Slug, Created Date, Owner, Members count, Tasks count, Notifications count, Activity Records.

**Quick Stats Cards:** Members, Tasks, Completed Tasks, Notifications, Activity Events.

---

### Hover States Fix (Critical)

Current UI has accessibility problems — buttons become difficult to read on hover.

- **Primary Buttons:** Normal = Blue bg + White text. Hover = Darker Blue bg + White text.
- **Secondary Buttons:** Normal = White bg + Blue border + Blue text. Hover = Light Blue bg + Blue text.
- **Danger Buttons:** Normal = Red bg + White text. Hover = Dark Red bg + White text.

Never change text to white on white. Never lose contrast.

---

### Accessibility Improvements

Verify contrast ratios (WCAG AA minimum). No text should disappear during Hover, Focus, Active State. Focus ring: Blue Glow, Visible Border, Accessible Contrast.

---

### Workspace Header Improvements

Enhance workspace selector: Display Logo, Name, Members Count, Status Badge (🟢 Active, 🟡 Archived, 🔴 Inactive).

---

### Responsive Improvements

- **Desktop** — Full width, avoid excessive empty space, improve spacing balance.
- **Tablet** — Adaptive grid, responsive cards, proper spacing.
- **Mobile** — Tables become cards (Name, Role, Email, Department, Status, Actions), no horizontal scrolling.

---

### Notifications & Activity Feed

Show notification when: Member Added, Member Removed, Role Changed, Ownership Transferred, Workspace Updated.

Create activity logs: MEMBER_ADDED, MEMBER_REMOVED, ROLE_CHANGED, OWNERSHIP_TRANSFERRED.

---

### Performance

Use existing TanStack Query strategy. Invalidate only necessary queries. Avoid full page refreshes and unnecessary re-renders. Use useMemo, useCallback where appropriate.

---

### QA Checklist

Validate: Add Member, Remove Member, Change Role, Transfer Ownership, Search Members, Workspace Overview Card, Statistics, Notifications, Activity Feed Logs, Hover States, Accessibility, Desktop/Tablet/Mobile, Dark/Light Theme, TypeScript, ESLint, Build.

---

### Final Acceptance Criteria

The Workspace module should now feel like a professional SaaS collaboration platform. Owners and Admins can manage members, assign roles, transfer ownership, search members, monitor workspace statistics. Users experience better UI, UX, accessibility, responsiveness and visual consistency. No existing functionality may break.
