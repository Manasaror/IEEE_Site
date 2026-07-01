# IEEE GBPIET Student Branch — Website

Official website of the **IEEE Student Branch at G.B. Pant Institute of Engineering and Technology (GBPIET)**. This repository contains the source code, architecture, and tooling for a scalable, production-ready platform showcasing student activities, projects, workshops, technical domains, the executive committee, events, and community initiatives.

> **Status:** Foundational scaffold. Page-level design and content are implemented incrementally on top of this architecture.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Development](#development)
- [Build](#build)
- [Deployment](#deployment)
- [Contribution Guidelines](#contribution-guidelines)
- [Coding Standards](#coding-standards)
- [License](#license)

---

## Project Overview

This site is the primary digital platform for the IEEE GBPIET Student Branch. It is built with long-term scalability in mind, so future features — a blog, gallery, event registration, admin dashboard, member portal, project database, achievement showcase, newsletter, and downloadable resources — can be added without restructuring the codebase.

## Features

- Static-first architecture built on Astro for fast, low-JS page loads
- Astro Islands (React) reserved for interactive pieces only — forms, animation, future dashboards
- Centralized design tokens (color, typography, spacing) shared between Tailwind config and CSS variables
- Reusable component library (`ui`, `cards`, `forms`, `layout`, `navigation`)
- Accessibility-conscious markup: semantic HTML, heading hierarchy, keyboard navigation, ARIA-ready components
- SEO scaffolding: per-page metadata, Open Graph, Twitter Cards, canonical URLs, sitemap generation
- Strict TypeScript, ESLint, and Prettier enforced via pre-commit hooks

## Tech Stack

| Category         | Technology                                  |
| ----------------- | -------------------------------------------- |
| Framework          | [Astro](https://astro.build) (static-first)  |
| Language           | TypeScript (strict mode)                     |
| Styling            | Tailwind CSS                                 |
| Interactivity      | React (Astro Islands only)                   |
| Animation          | Framer Motion                                |
| Icons              | Lucide React                                 |
| Forms              | React Hook Form + Zod                        |
| Linting/Formatting | ESLint, Prettier                             |
| Git Hooks          | Husky + lint-staged                          |
| CI                 | GitHub Actions                               |

**Explicitly not used:** Next.js, Vue, Svelte.

## Folder Structure

```
IEEE-GBPIET-Website/
├── .github/workflows/       # CI (build verification)
├── public/                  # Static assets served as-is
│   ├── favicon/ icons/ illustrations/ images/ logos/ documents/
├── src/
│   ├── assets/               # Imported/optimized assets
│   ├── components/
│   │   ├── common/           # Seo.astro, shared utilities
│   │   ├── cards/             # TeamCard, ProjectCard, EventCard
│   │   ├── forms/             # ContactForm (React island)
│   │   ├── layout/            # Footer, Container
│   │   ├── navigation/        # Navbar
│   │   ├── sections/          # Page section blocks (future)
│   │   ├── ui/                 # Button, Card, Badge, Input, SectionHeading
│   │   └── animations/         # Framer Motion wrappers
│   ├── layouts/BaseLayout.astro
│   ├── pages/                  # index, projects, team, contact
│   ├── data/                   # Static content sources (nav, team, projects, events)
│   ├── hooks/                  # React hooks for islands
│   ├── lib/                    # Site config, schemas
│   ├── styles/                 # globals.css, variables.css
│   ├── types/                  # Shared TypeScript types
│   ├── utils/                  # cn(), formatDate(), etc.
│   └── content/                 # Reserved for future content collections
├── package.json
├── astro.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── LICENSE
```

## Installation

**Prerequisites:** Node.js `>=18.17.0` and npm.

```bash
git clone https://github.com/<org>/IEEE-GBPIET-Website.git
cd IEEE-GBPIET-Website
npm install
cp env.example .env
```

## Development

```bash
npm run dev        # Start the local dev server (default: http://localhost:4321)
npm run lint        # Lint the codebase
npm run lint:fix     # Lint and auto-fix
npm run format        # Format with Prettier
npm run typecheck      # Run Astro's TypeScript checker
```

A pre-commit hook (Husky + lint-staged) automatically lints and formats staged files.

## Build

```bash
npm run build       # Type-checks and builds the static site to /dist
npm run preview       # Preview the production build locally
```

## Deployment

The project builds to a fully static `dist/` directory and can be deployed to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.). The included GitHub Actions workflow (`.github/workflows/build.yml`) verifies formatting, linting, type-checking, and the production build on every push and pull request to `main`/`develop`.

Update the `site` value in `astro.config.mjs` and `PUBLIC_SITE_URL` in `.env` before deploying to production.

## Contribution Guidelines

1. Fork the repository and create a feature branch: `git checkout -b feature/short-description`.
2. Keep changes scoped — one feature or fix per pull request.
3. Run `npm run lint`, `npm run format:check`, and `npm run typecheck` before opening a PR.
4. Write clear commit messages (Conventional Commits recommended, e.g. `feat: add event registration form`).
5. Open a pull request against `develop` (or `main` if `develop` doesn't exist yet) describing the change and any screenshots for UI work.
6. At least one review/approval is required before merging.

## Coding Standards

- **TypeScript:** strict mode is enforced; avoid `any`, prefer explicit types/interfaces in `src/types`.
- **Components:** keep `.astro` components structural/minimal until a design pass is scheduled; use React only for genuinely interactive islands.
- **Styling:** use Tailwind utility classes and the shared design tokens (`tailwind.config.ts`, `src/styles/variables.css`) — avoid hardcoded hex values.
- **Imports:** use path aliases (`@components`, `@layouts`, `@data`, `@lib`, `@utils`, `@types`, `@styles`, `@assets`, `@hooks`) instead of relative `../../..` chains.
- **Accessibility:** every interactive element must be keyboard-operable and carry appropriate ARIA attributes; maintain a single logical heading hierarchy per page.
- **Data:** keep content (team members, projects, events) in `src/data/*.ts`, typed against `src/types/content.ts`, rather than hardcoding it into components.

## License

Released under the [MIT License](./LICENSE).
