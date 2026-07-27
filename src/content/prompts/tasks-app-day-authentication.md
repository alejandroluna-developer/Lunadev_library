---
title: "Authentication Module — Full Implementation"
description: "Prompt para implementar el módulo completo de autenticación: Login, Register, Forgot Password, Session Management, Route Guards, con LocalStorage como datasource intercambiable."
categorySlug: "desarrollo-de-software"
subcategorySlug: "proyectos-de-contenido"
tags: ["Authentication", "Clean Architecture", "LocalStorage", "Guards", "Security", "Enterprise"]
difficulty: "advanced"
createdAt: "2025-07-26"
updatedAt: "2025-07-26"
isFeatured: false
project:
  slug: "tasks-app"
  name: "Tasks App"
  description: "Aplicación de gestión de tareas construida paso a paso en TikTok con arquitectura empresarial."
  order: 4
  totalParts: 4
---

## Authentication Module — Implementation Prompt

### Role

You are the **Lead Software Architect** of this project. Implement the entire Authentication module following the architecture, conventions, coding standards and project structure that **already exist in this repository**.

**Hard rules:**
- DO NOT redesign the existing architecture.
- DO NOT create shortcuts.
- DO NOT duplicate logic.
- DO NOT break the dependency flow.
- Everything must integrate naturally with the existing Clean Architecture.

Before writing any code, inspect the repository to confirm the existing folder structure, naming conventions, state-management approach, and design system components — then follow them exactly.

---

### Objective

Implement a complete authentication flow composed of:

- Login
- Register
- Forgot Password
- Session Management
- Route Guards

The implementation **must be completely backend-independent**.

There is no real backend for this first version. Implement a **Local Authentication Datasource** that stores all data in browser `LocalStorage`, while keeping the project fully prepared to migrate later to Firebase, Supabase, or any REST API by replacing **only the datasource implementation**. Nothing else in the app should need to change when a real backend is introduced.

---

### Architecture (dependency flow)

```
Presentation → Hooks → Use Cases → Repository Interface
            → Repository Implementation → Datasource
            → Infrastructure → Storage
```

- Presentation **must never** access `LocalStorage` directly.
- Presentation **must never** know how authentication works internally.
- Every responsibility stays isolated in its own layer.

---

### Domain Layer

**Entities**
- `User`
- `Session`

**Repository**
- `AuthRepository` (interface)

**Use Cases** (single responsibility each)
- `LoginUseCase`
- `RegisterUseCase`
- `ForgotPasswordUseCase`
- `LogoutUseCase`
- `GetCurrentUserUseCase`
- `IsAuthenticatedUseCase`

---

### Data Layer

Create:
- `AuthLocalDatasource`
- `AuthRepositoryImpl` — depends **only** on datasource interfaces
- DTOs
- Mappers (DTO ↔ Entity)

---

### Local Storage

Implement a centralized **Storage Service** — never scatter `LocalStorage` access across the project.

Use dedicated, namespaced keys, e.g.:
- `taskflow_users`
- `taskflow_session`
- `taskflow_password_recovery`

**User record structure:**

```
id
name
email
passwordHash
createdAt
updatedAt
```

Never store passwords in plain text.

---

### Password Security

- Implement a `PasswordHasher` service using the browser **Web Crypto API** (e.g. PBKDF2/SHA-256 with a per-user salt).
- Hash before saving; compare hashes on login.
- Never expose or log raw passwords.
- Isolate the hashing implementation behind an abstraction so it can be swapped later (e.g. for bcrypt on a real backend).

---

### Session Management

Create a `SessionService` responsible for:
- `saveSession()`
- `loadSession()`
- `clearSession()`
- `isAuthenticated()`
- `getCurrentUser()`

Include a session **expiration/TTL** mechanism (even if simulated locally), so the module is ready for real token expiry later. Session persistence must be fully centralized here — no other file should read/write session state directly.

---

### Feature Flows

#### Register
1. Validate: required fields, email format, password confirmation, password length, unique email.
2. On success: hash password → create user → store user → auto-create session → redirect to Dashboard.

#### Login
1. Validate email and password.
2. Verify credentials.
3. Create session.
4. Redirect to Dashboard.
5. Handle and surface errors gracefully.

#### Forgot Password (simulated — no backend yet)
1. Validate email.
2. Verify the user exists.
3. Generate a temporary recovery token.
4. Persist the recovery request.
5. Apply basic **rate-limiting** (prevent repeated requests for the same email in a short window) to mirror real-world backend behavior.
6. Return a neutral success message regardless of whether the email exists, e.g.: *"If this email exists, a recovery link has been generated."* (Do not reveal whether an account exists.)

This flow must be replaceable later by Firebase Auth or a REST API **without touching** Presentation, Hooks, or Use Cases.

#### Logout
The Logout button/action already exists in the Dashboard UI — do not recreate or redesign it.

1. Wire the existing Dashboard logout control to `LogoutUseCase` (via a `useSession` or dedicated hook).
2. `LogoutUseCase` delegates to `SessionService.clearSession()` — never clear LocalStorage directly from the Dashboard.
3. Clear all in-memory auth state (context/store) immediately so the UI updates without a full reload.
4. Redirect the user to the Login page per the existing routing conventions.
5. Ensure `AuthGuard` reacts to the cleared session and blocks re-entry to protected routes via back-navigation.

---

### Route Guards

- `AuthGuard` — blocks unauthenticated users from protected pages.
- `GuestGuard` — blocks authenticated users from Login, Register, Forgot Password.

---

### Auth State

If the project already has global state management, integrate authentication into it. Otherwise, create dedicated authentication state following the existing architecture. Never duplicate state across contexts/stores.

---

### Hooks

Create reusable hooks, e.g.:
- `useLogin`
- `useRegister`
- `useForgotPassword`
- `useSession`

Business logic stays inside hooks and use cases — pages remain as thin/presentational as possible.

---

### Form & Field Validation

Implement one reusable validation strategy across the whole module (validators, schemas, or dedicated utilities — pick whichever fits the existing architecture). Never validate directly inside pages. Every form validates before executing any use case.

**Login:** required email · valid email format · required password · minimum password length

**Register:** required first/last name (if applicable) · required email · valid email format · required password · minimum length · password confirmation · passwords must match

**Forgot Password:** required email · valid email format

**Every input component must support:** validation state, error message, helper text, disabled state, loading state. Errors render below the field, following the existing design system — never rely on native browser validation messages.

---

### Error Handling

Even though `LocalStorage` is used today, structure the module as if it were talking to a real REST API:

- Datasource methods return `Result` objects or domain failures — never raw exceptions.
- Simulate realistic HTTP-style scenarios: `400` invalid credentials/duplicate email/invalid token, `401` unauthorized/expired session, `403` forbidden, `404` not found, `409` conflict (email already registered), `422` business validation, `429` rate limited, `500`/`503` server errors.
- **Map every technical exception to a domain-specific failure.** Presentation receives only friendly, centralized application error messages (e.g. "Invalid credentials", "Email already registered", "Session expired") — never raw HTTP codes or stack traces.

---

### User Feedback

Show clear feedback for every state: loading, success, validation errors, business errors, unexpected errors, server errors. Use the project's existing notification system if one exists; otherwise implement one reusable feedback mechanism.

---

### Network-Ready / Migration-Ready

Structure everything as if requests were going to a real API. When `AuthLocalDatasource` is later replaced with `FirebaseAuthDatasource` or `RestAuthDatasource`, **no changes should be required** in Pages, Hooks, Use Cases, Repositories, or Domain — only the datasource implementation changes.

---

### UI

- Reuse every existing component; do not redesign pages or deviate from the current Figma/design implementation.
- Only wire up functionality: loading states, disabled states, error messages, success messages.

---

### Code Quality

- SOLID, Clean Architecture, Repository Pattern, Dependency Injection, Single Responsibility, Open/Closed Principle.
- Strict TypeScript everywhere — no `any`.
- No duplicated logic, no dead code, no magic strings.
- Centralize validation messages, service error messages, and HTTP-to-domain error mapping in one place each (no hardcoding scattered across files).
- Keep validation utilities reusable for future modules beyond auth.

---

### Testing (add basic coverage)

- Unit tests for each Use Case (success + failure paths).
- Unit tests for `PasswordHasher` and `SessionService`.
- At least one test per Guard confirming redirect behavior.

---

### Final Checklist

Before finishing, verify:

- [ ] TypeScript builds with no errors
- [ ] ESLint passes with no errors
- [ ] Login, Register, Forgot Password (simulated), Logout all work end-to-end
- [ ] Session persistence and expiration work
- [ ] Guards correctly block/allow navigation
- [ ] Passwords are hashed, never stored/exposed in plain text
- [ ] LocalStorage access is fully centralized behind one storage service
- [ ] All required-field, format, and confirmation validations work, with errors shown below each field per the design system
- [ ] Loading, success, and error feedback states all work
- [ ] HTTP-style errors (400/401/403/404/409/422/429/500/503) are mapped to friendly domain errors
- [ ] No layer violations exist anywhere in the module
- [ ] The module is fully backend-independent and swap-ready for Firebase/REST

---

### Deliverable

When finished, provide a summary that includes:
1. Every file created, grouped by layer.
2. Key architectural decisions and why they were made.
3. Exactly which classes/files will need to change to integrate Firebase or a custom REST backend later (and confirmation that nothing else will).
