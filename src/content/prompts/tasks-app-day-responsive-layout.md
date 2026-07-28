---
title: "Responsive Layout — Mobile Navigation"
description: "Prompt para transformar el layout en un dashboard responsive enterprise-grade: hamburger menu, navegación mobile role-aware, animaciones fluidas, accesibilidad completa y Dark Mode."
categorySlug: "desarrollo-de-software"
subcategorySlug: "proyectos-de-contenido"
tags: ["Responsive", "Mobile", "Navigation", "UX", "Accessibility", "Enterprise", "React"]
difficulty: "advanced"
createdAt: "2025-07-26"
updatedAt: "2025-07-26"
isFeatured: false
project:
  slug: "tasks-app"
  name: "Tasks App"
  description: "Aplicación de gestión de tareas construida paso a paso en TikTok con arquitectura empresarial."
  order: 6
  totalParts: 10
---

## Responsive Layout — Mobile Navigation

### Role

Act as a Principal Frontend Software Architect specialized in:

- React 19
- Vite
- TypeScript
- Clean Architecture
- Enterprise UI Architecture
- Responsive Design
- Accessibility (WCAG)
- Modern UX
- Mobile First Design
- Component Architecture

Your responsibility is not to simply create a hamburger menu.

Your responsibility is to inspect the current application layout and evolve it into a fully responsive navigation system while preserving the existing architecture.

Think like a Senior Frontend Architect building a production-ready enterprise dashboard.

---

### Project Context

The application already has:

- Authentication
- RBAC Authorization
- Protected Routes
- Dynamic Sidebar
- Role-based Navigation
- Clean Architecture
- Datasource Pattern
- Repository Pattern

Do NOT rebuild the layout.

Do NOT replace the current architecture.

Inspect the project first.

Understand how the layout works.

Then evolve it.

---

### Current Problem

The desktop layout works correctly.

However, the sidebar is not optimized for tablets and mobile devices.

The current navigation occupies too much space and negatively impacts usability on small screens.

The application needs a professional responsive navigation system.

---

### Objective

Transform the current layout into a fully responsive enterprise dashboard.

The experience should be similar to modern applications like:

- Notion
- Linear
- Jira
- GitHub
- Vercel Dashboard
- Firebase Console

The desktop experience should remain almost identical.

The mobile experience should be completely redesigned.

---

### Responsive Behavior

Analyze the existing layout.

Automatically detect the best responsive strategy.

**On desktop:**
- Keep the current sidebar behavior.
- Preserve the current navigation.
- Preserve RBAC navigation.
- Preserve all existing functionality.

**On tablet:**
- Optimize spacing.
- Adapt widths.
- Keep usability high.

**On mobile:**
- Replace the permanent sidebar with a mobile navigation system.

---

### Mobile Navigation

Implement a modern hamburger menu.

Requirements:

- Hamburger button visible on small screens.
- Smooth opening animation.
- Smooth closing animation.
- Backdrop overlay.
- Close when clicking outside.
- Close when navigating.
- Close with Escape key.
- Prevent background scrolling while open.
- Maintain focus accessibility.

The implementation should feel native.

---

### Sidebar

Do not duplicate the sidebar.

Reuse the existing navigation.

The mobile menu and desktop sidebar must consume the same source of truth.

RBAC navigation must continue working automatically.

If a user cannot access a route, it must never appear in the mobile menu either.

---

### Responsiveness

Inspect every page.

Detect layout issues.

Fix:

- Overflow
- Broken grids
- Excessive spacing
- Small touch targets
- Incorrect widths
- Mobile scrolling issues
- Horizontal scrolling

The application should work correctly on:

- Mobile phones
- Tablets
- Desktop
- Ultra-wide screens

---

### Header

Analyze whether the application header should evolve.

If appropriate:

- Add hamburger button.
- Keep page title.
- Preserve user profile.
- Preserve notifications if they exist.
- Maintain current architecture.

Do not redesign unnecessarily.

---

### User Experience

The application should feel like a premium SaaS dashboard.

Navigation should be: Fast, Smooth, Predictable, Clean, Accessible.

Avoid abrupt transitions.

---

### Accessibility

The mobile navigation must support:

- Keyboard navigation
- Focus management
- Escape key
- Proper ARIA attributes
- Screen readers

Accessibility is mandatory.

---

### Performance

Avoid unnecessary renders. Do not duplicate components. Reuse existing navigation. Lazy render mobile navigation if appropriate. Avoid layout shifts.

---

### Animations

Animations should be subtle.

Do not overuse effects. Prefer CSS transitions or the project's current animation strategy. The UI should feel fluid but professional.

---

### Dark Mode

If the application already supports dark mode, the responsive navigation must fully support it.

Do not introduce visual inconsistencies.

---

### Clean Architecture

Respect the existing architecture. Do not move responsibilities unnecessarily. Do not introduce tight coupling. Keep components reusable. Prefer composition over duplication.

---

### Code Quality

Follow: SOLID, DRY, KISS, Separation of Concerns.

Remove duplicated layout logic if found. Improve maintainability where appropriate.

---

### Final Deliverable

After implementation generate a complete report including:

- Architecture Changes
- Components Created
- Components Modified
- Responsive Strategy
- Mobile Navigation Flow
- Accessibility Improvements
- Performance Improvements
- UX Improvements
- Future Recommendations

---

### Execution Mode

Do NOT ask questions. Do NOT request confirmation. Do NOT generate partial implementations.

Inspect the entire project. Understand the existing layout. Automatically decide the best architectural solution. Implement a production-ready responsive navigation system fully integrated into the current application while preserving every existing feature.
