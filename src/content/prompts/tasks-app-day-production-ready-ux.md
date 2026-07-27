---
title: "Production-Ready UX Enhancement"
description: "Prompt para llevar la UX a nivel producción: Loading Skeletons, Empty States, Error States, Success Feedback, animaciones sutiles, accesibilidad y componentes reutilizables de feedback."
categorySlug: "desarrollo-de-software"
subcategorySlug: "proyectos-de-contenido"
tags: ["UX", "Loading States", "Empty States", "Skeletons", "Accessibility", "Enterprise", "React"]
difficulty: "advanced"
createdAt: "2025-07-26"
updatedAt: "2025-07-26"
isFeatured: false
project:
  slug: "tasks-app"
  name: "Tasks App"
  description: "Aplicación de gestión de tareas construida paso a paso en TikTok con arquitectura empresarial."
  order: 7
  totalParts: 7
---

## Production-Ready UX Enhancement

### Role

Act as a Principal Frontend Software Architect and Senior UX Engineer specialized in:

- React 19
- Vite
- TypeScript
- Clean Architecture
- Enterprise Frontend Architecture
- Design Systems
- Accessibility (WCAG 2.2)
- UX Engineering
- UI Engineering
- State Management
- Performance Optimization

Your responsibility is NOT to simply add loading spinners.

Your responsibility is to inspect the entire project and evolve the user experience to production quality while preserving the current architecture.

Think like a Senior Engineer working on products such as:

- Linear
- Notion
- GitHub
- Vercel
- Jira
- Firebase Console

Every decision must improve usability, consistency, accessibility and maintainability.

---

### Execution Mode

You are fully autonomous.

Do NOT ask questions. Do NOT ask for confirmation. Do NOT request permission. Do NOT stop halfway. Do NOT generate partial implementations.

Inspect the entire project. Understand the architecture. Detect improvement opportunities. Automatically implement every improvement you consider necessary regarding loading states, empty states, error handling and user feedback.

Take architectural decisions when appropriate. If multiple files require modification, modify them. If new reusable components are required, create them. If the design system needs to evolve, evolve it.

Complete the entire implementation autonomously.

---

### Project Context

The application already includes:

- React + Vite
- TypeScript
- Clean Architecture
- Datasource Pattern
- Repository Pattern
- Authentication
- RBAC Authorization
- Responsive Sidebar
- Protected Routes
- Dynamic Navigation

Do NOT rebuild the project. Do NOT replace the architecture. Respect every architectural decision already implemented.

---

### Objective

Transform the current application into a production-ready user experience.

The current application works correctly. However, the UX still feels incomplete because important application states are missing.

Users should always understand:

- What is happening
- Why it is happening
- What they should do next

The application should never feel empty, broken or frozen.

---

### 1. Loading States

Inspect every page.

Whenever data is loading: Implement proper loading states. Avoid blank screens. Avoid content jumping.

Use modern Skeleton components — not simple spinners.

Skeletons should resemble the final content:

- Tables
- Cards
- Dashboards
- User profile
- Forms
- Lists
- Statistics
- Navigation

Create reusable Skeleton components whenever possible.

---

### 2. Empty States

Whenever a page has no data: Do NOT display an empty table.

Create beautiful Empty States.

Each Empty State should include:

- Icon
- Title
- Description
- Helpful explanation
- Primary action (if applicable)

Examples: No tasks, No users, No notifications, No search results, No filters found, No projects, No profile information, No permissions.

Every page should communicate clearly.

---

### 3. Error States

Inspect every async operation.

Create reusable error components. Display friendly messages. Never expose technical errors. Provide recovery actions.

Examples: Retry button, Go back, Refresh page, Contact support (placeholder).

Improve all error handling.

---

### 4. Success Feedback

Whenever appropriate, add success feedback.

Examples: Profile updated, Task created, Task deleted, User updated, Changes saved.

Use the current design language. Avoid intrusive alerts.

---

### 5. Form Feedback

Inspect every form.

Improve validation. Improve error messages. Improve disabled states. Improve submit loading. Prevent duplicate submissions. Display validation near inputs.

---

### 6. Buttons

Improve buttons while loading.

Disable interactions during requests. Show inline loading indicators. Prevent multiple clicks. Maintain accessibility.

---

### 7. Tables

Improve every table.

Handle: Loading, Empty, Error, No search results, Pagination loading, Filtering loading.

Everything should feel polished.

---

### 8. Cards

Improve dashboard cards.

Display skeletons. Animate appearance. Avoid layout shifts.

---

### 9. Lists

Every list should support: Loading, Empty, Error, Refresh, Pagination, Filtering, Searching.

---

### 10. Search UX

Improve search experience.

If no results exist: Display a dedicated empty state. Suggest clearing filters. Suggest different search terms.

---

### 11. Accessibility

Everything created must support:

- Keyboard navigation
- Screen readers
- ARIA labels
- Focus management
- Proper semantic HTML
- WCAG compliance

Accessibility is mandatory.

---

### 12. Performance

Avoid unnecessary renders. Reuse components. Avoid duplicated logic. Memoize where appropriate. Prevent layout shifts. Lazy render expensive components. Maintain fast rendering.

---

### 13. Animations

Use subtle animations. Avoid excessive motion. Prefer CSS transitions. Improve perceived performance.

Skeletons should fade naturally. Cards should appear smoothly. Everything should feel modern.

---

### 14. Dark Mode

Inspect the current theme.

Ensure every new component supports: Light mode, Dark mode.

Maintain visual consistency.

---

### 15. Design Consistency

Use the existing design system.

Respect: Spacing, Typography, Colors, Border radius, Icons, Component hierarchy.

Do not introduce inconsistent UI.

---

### 16. Reusable Components

Whenever similar UI appears multiple times, create reusable components.

Examples:

- LoadingState
- SkeletonCard
- SkeletonTable
- EmptyState
- ErrorState
- SuccessMessage
- RetryButton
- LoadingButton

Keep components generic. Keep them reusable.

---

### 17. Clean Architecture

Respect the existing architecture.

Do NOT introduce coupling. Do NOT place business logic inside UI. Do NOT violate separation of concerns.

Follow: SOLID, DRY, KISS, Composition over inheritance, Single Responsibility Principle.

---

### Final Report

When implementation finishes, generate a complete implementation report.

Include:

- UX Improvements
- Components Created
- Components Modified
- Loading States Added
- Empty States Added
- Error Handling Improvements
- Accessibility Improvements
- Performance Improvements
- Architecture Decisions
- Future Recommendations

---

### Final Goal

The application should no longer feel like a demo.

It should feel like a polished SaaS product ready for production.

Every user interaction should provide meaningful feedback. Every state should have a professional UI. Every improvement should respect the existing architecture.

Execute everything autonomously without requesting any confirmation or permission.
