# CRED Landing Page (Next.js)

A modern, animated landing page built with **Next.js (App Router)**, **React**, **Tailwind CSS**, and **Framer Motion**. The homepage is composed from multiple section components (Hero, Features, CRED Money, Testimonials, CTA, Footer, etc.).

## Tech stack

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Radix UI** (UI primitives)
- **Vercel Analytics** (enabled only in production)

## Getting started

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- **dev**: `npm run dev` — start Next.js dev server
- **build**: `npm run build` — create production build
- **start**: `npm run start` — run the production server
- **lint**: `npm run lint` — run ESLint

## Project structure

- `app/layout.tsx` — global layout, fonts, metadata, analytics (prod only)
- `app/page.tsx` — homepage composition (imports and renders each section)
- `components/` — section components (navbar, hero, features, etc.)
- `components/ui/` — reusable UI components (Radix-based)
- `public/` — static assets (images, icons, etc.)

## Editing content

The homepage is assembled in:

- `app/page.tsx`

Sections live in:

- `components/hero-section.tsx`
- `components/features-section.tsx`
- `components/cred-money-section.tsx`
- `components/testimonials-section.tsx`
- `components/cta-section.tsx`
- `components/footer.tsx`

## Notes

- **Images**: `next.config.mjs` sets `images.unoptimized = true`, which is useful for static exports / simple hosting.
- **Analytics**: Vercel Analytics renders only when `NODE_ENV === "production"`.

