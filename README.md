# Express DX Starter Kit

A minimal, opinionated starter toolkit to enhance the developer experience (DX) when building Express.js applications 
---

## Why This Exists

Express is simple and battle-tested, but starting a new project still involves a lot of repetitive setup: configuring TypeScript, linting, formatting, route management, and setting up hot reloads. This starter kit aims to smooth those pain points by providing a solid, **minimal DX layer** that you can build upon.

---

## Features

### 1. Project Scaffolding CLI

- Generate a sensible, opinionated folder structure:
  - `routes/`
  - `controllers/`
  - `middlewares/`
  - `config/`
- Optional TypeScript support with preconfigured `tsconfig.json`
- Preconfigured ESLint and Prettier with sensible defaults
- Husky + Lint-staged for pre-commit formatting and linting

*Why?*  
Because 80% of early project pain is in setup, not core logic.

---

### 2. Folder-Based Routing

- Automatically registers routes by scanning the `/routes` folder
- Supports dynamic routes using `[param].ts` syntax → Express route `/user/:param`
- Eliminates manual imports and `app.use()` boilerplate

*Why?*  
Simplifies route management, reduces bugs, speeds up prototyping.

---

### 3. Configurable but Opinionated Tooling

- Zero-config setup for Prettier, ESLint, and TypeScript that "just works"
- Allows overrides via an optional `nuble.config.js`

*Why?*  
Beginners get fast defaults; power users keep full control.

---

### 4. Dev Mode Enhancements

- Integrated hot reload using `nodemon` or `ts-node-dev`
- Optional pretty error handling middleware for cleaner dev feedback

*Why?*  
Faster feedback loops mean less frustration and better flow.

---

### 5. Community-First Philosophy

- Designed as an open-source seed, not a full framework
- Clear extension points for features like authentication, validation, logging, etc.
- Encourages community contributions to grow the ecosystem organically


---

## What This Starter Kit **Does NOT** Do

- It does **not** turn Express into a serverless framework — dedicated server all the way  
- It does **not** force frontend and backend into the same repo or framework  
- It does **not** try to become a full-stack framework — just a smart, practical starter

---

## Getting Started

Coming soon: CLI tool `create-nuble-app` to scaffold your project with all the DX magic out of the box.

---

## Contribution

Contributions are highly welcome! Whether it’s plugins, bug fixes, or documentation, help build a better DX for Express developers everywhere.

---

## License

MIT © Nabil Mouzouna

---

*Built for devs who want to focus on building apps, not plumbing.*