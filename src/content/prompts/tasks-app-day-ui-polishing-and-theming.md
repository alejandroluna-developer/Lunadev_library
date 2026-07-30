---
title: "UI Polishing & Theme Implementation"
description: "Prompt para pulir la UI a nivel producción: estados de interacción, sistema de temas (light/dark), tokens semánticos, animaciones sutiles y revisión de consistencia visual."
categorySlug: "desarrollo-de-software"
subcategorySlug: "proyectos-de-contenido"
tags: ["UI/UX", "Theming", "Design Tokens", "Accessibility", "Dark Mode", "Enterprise"]
difficulty: "advanced"
createdAt: "2025-07-26"
updatedAt: "2025-07-26"
isFeatured: false
project:
  slug: "tasks-app"
  name: "Tasks App"
  description: "Aplicación de gestión de tareas construida paso a paso en TikTok con arquitectura empresarial."
  order: 3
  totalParts: 12
---

## UI Polishing & Theme Implementation

You are continuing the development of this project.

The project already contains a complete enterprise architecture, coding standards, reusable components, design tokens and folder structure.

Your responsibility is to polish the existing implementation until it reaches production quality.

Do NOT redesign the application.

Do NOT break the existing architecture.

Reuse every existing abstraction whenever possible.

Before making any modification, analyze the entire project and understand how the design system is implemented.

---

## Primary Goal

Refine the UI and improve the overall user experience while preserving the current design language.

Every change should feel like a natural improvement of the existing application.

---

## Design System Review

Inspect every reusable component and every page.

Identify visual inconsistencies.

Improve the overall visual quality.

Maintain consistency across the entire application.

---

## Forms

Review every form in the application.

Review all reusable input components.

Implement professional interaction states.

Required states:

- Default
- Hover
- Focus
- Active
- Disabled
- Readonly
- Invalid
- Success

---

## Focus State

The current implementation displays an aggressive browser-like focus outline that does not match the design system.

This behavior must be removed.

Do NOT display thick blue or black outlines around the inputs.

Do NOT use the browser default outline.

Instead, create a modern enterprise focus state.

The focus should feel elegant, subtle and premium.

Examples of acceptable improvements:

- Very subtle border color transition
- Soft focus ring
- Light glow
- Smooth shadow
- Slight elevation
- Animated transition

The focused input must integrate naturally with the design language.

Accessibility must still be preserved.

The user should clearly understand which field has focus without creating visual noise.

The focus style must be identical across every form in the application.

---

## Buttons

Review every button.

Implement consistent:

- Hover
- Active
- Focus
- Disabled
- Loading

Transitions should be subtle and professional.

---

## OAuth Buttons

Review Google and Microsoft authentication buttons.

Improve spacing between the icon and the label.

Improve horizontal alignment.

Ensure both buttons look perfectly balanced.

Keep icon sizes consistent.

---

## Layout Review

Review:

- Spacing
- Alignment
- Margins
- Paddings
- Responsive behavior

Remove visual inconsistencies.

Improve overall visual rhythm.

---

## Icons

Review every icon.

Improve:

- Alignment
- Spacing
- Sizing
- Consistency

Icons should follow the same visual language across the application.

---

## Theme System

Implement a scalable theme system.

Support:

- Light Theme
- Dark Theme

Do not hardcode colors.

Use semantic design tokens.

Examples:

- Background
- Surface
- Surface Secondary
- Primary
- Secondary
- Success
- Warning
- Danger
- Border
- Divider
- Text Primary
- Text Secondary
- Disabled
- Placeholder

Everything should automatically adapt when switching themes.

---

## Theme Switching

Implement a reusable theme switcher.

Requirements:

- Persist selected theme.
- Detect system preference on first load.
- Allow manual switching.
- Avoid flashing during application startup.

---

## Animations

Improve UI transitions.

Implement smooth transitions for:

- Hover
- Focus
- Theme switching
- Cards
- Buttons
- Inputs

Animations should be subtle and professional.

Avoid excessive motion.

---

## Accessibility

Maintain accessibility while improving the UI.

Ensure:

- Visible focus indicators
- Keyboard navigation
- Proper color contrast
- Accessible interaction states

---

## Code Quality

Respect the existing architecture.

Reuse components. Reuse hooks. Reuse providers.

Do not duplicate code.

Follow:

- SOLID
- DRY
- KISS
- Clean Architecture

Maintain strict TypeScript typing.

---

## Final Review

Before finishing:

- Review every page.
- Review every reusable component.
- Review every interaction state.
- Refactor duplicated styles if found.
- Improve maintainability whenever possible.

If you discover a better implementation that respects the current architecture, implement it autonomously.

Do not ask for confirmation.

The final result should feel like a polished enterprise application ready for production, with a professional UI/UX and a consistent design system across the entire project.
