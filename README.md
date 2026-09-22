# Ung Ta Hoang Tuan Portfolio

Production-ready developer portfolio built with Next.js App Router, TypeScript, Tailwind CSS, shadcn-style UI primitives and Framer Motion. The site is positioned for Frontend, React, Next.js, Web3 and Fintech opportunities, with content grounded in real product experience.

## Overview

- Dark-first, light-mode capable portfolio with a premium SaaS-inspired visual system.
- Structured content model under `src/data` for profile, experience, projects and skills.
- Dedicated project detail pages at `/projects/[slug]`.
- SEO-ready metadata, Open Graph image generation and semantic section structure.
- Dockerized standalone production build suitable for Railway deployment.

## Tech Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- next-themes
- shadcn-style reusable UI primitives

## Folder Structure

```text
src/
	app/
		projects/[slug]/page.tsx
		globals.css
		layout.tsx
		page.tsx
		resume/route.ts
	components/
		layouts/
		projects/
		providers/
		sections/
		ui/
	data/
		experience.ts
		profile.ts
		projects.ts
		skills.ts
	lib/
		utils.ts
	types/
		index.ts
public/
	projects/
Dockerfile
railway.toml
next.config.ts
```

## Local Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

The app runs at `http://localhost:3000` by default.

## Environment Variables

The portfolio works without required environment variables.

Optional:

- `NEXT_PUBLIC_SITE_URL`: Public base URL used for metadata and social image URLs in production.

See `.env.example` for the optional variable template.

## Production Build

```bash
npm run lint
npm run build
npm run start
```

## Docker Usage

Build the container:

```bash
docker build -t uthtuan-portfolio .
```

Run the container locally:

```bash
docker run -p 3000:3000 -e PORT=3000 -e HOSTNAME=0.0.0.0 uthtuan-portfolio
```

The container serves the standalone Next.js output and listens on `0.0.0.0`.

## Railway Deployment

This repository includes `railway.toml` so Railway can explicitly use the Dockerfile workflow. In many Railway setups this file is optional because Railway can autodetect a Dockerfile, but keeping it makes the deploy strategy unambiguous.

Deployment flow:

```bash
railway up
```

Or connect the repository in Railway and deploy directly from the Dockerfile.

Recommended production variable:

- `NEXT_PUBLIC_SITE_URL=https://your-domain.example`

## Custom Domain Setup

1. Point your domain to the Railway service according to Railway's domain settings.
2. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain.
3. Redeploy so metadata and generated image URLs use the correct public origin.

## Updating Portfolio Content

- Profile and CTA copy: `src/data/profile.ts`
- Timeline experience: `src/data/experience.ts`
- Featured projects and detail pages: `src/data/projects.ts`
- Skills taxonomy: `src/data/skills.ts`

The UI components consume these structured modules directly, so most content updates do not require JSX edits.

## Validation

Validated with:

```bash
npm run lint
npm run build
```