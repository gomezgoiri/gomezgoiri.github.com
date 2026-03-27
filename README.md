# gomezgoiri.net

Personal website for Aitor Gómez Goiri, built with [Astro](https://astro.build) and styled with [Bulma](https://bulma.io).

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview  # preview the built site locally
```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when pushing to the `v3_astro` branch. The workflow builds the Astro project and deploys the `dist/` directory.

Alternatively, deploy manually by running `npm run build` and serving the `dist/` directory.

## Structure

- `src/pages/` - Astro pages (landing, projects, publications, coding articles)
- `src/layouts/` - Base and page layout components
- `src/components/` - Reusable Astro components (NavBar, Footer, etc.)
- `src/content/` - Markdown content collections (CV, coding articles, landing page data)
- `public/` - Static assets (images, PDFs, BibTeX files, CV HTML pages, slides)

## History

- **v1** (`v1_jekyll` branch): Jekyll + kramdown
- **v2** (`v2_nextjs` branch): Next.js 8 + React 16 + styled-components
- **v3** (`v3_astro` branch): Astro 5 (current)
