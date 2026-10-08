This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Production

Production runs `.next/standalone/server.js` under PM2 (`ecosystem.config.js`, port 3002). Secrets (`REVALIDATION_SECRET`) are read from `.env` next to `ecosystem.config.js`, see `.env.example`.

`npm start` runs the same standalone build for a local check, on port 3000 by default (`PORT=...` to change it). Do not run it on the server with `PORT=3002` next to the PM2 process: it fails with `EADDRINUSE` in a restart loop and floods the logs. Use `pm2 restart shuffle-client` instead.

### Caching

Content changes rarely, so every page is prerendered at build and served from cache:

- `npm run build` fetches all data from Strapi (`APP_API`), so Strapi must be running during the build.
- Strapi webhook `POST http://localhost:3002/api/revalidate` (`Authorization: Bearer <REVALIDATION_SECRET>`, entry and media events) refreshes the whole site and re-renders every page right away. If Strapi is unreachable at that moment, it answers 503 and keeps the cache.
- Pages are also revalidated once a day as a fallback. If Strapi is down, the last good version keeps being served.
- `src/instrumentation.ts` removes cached 404 pages (junk URLs from scanners) on start and once a day.

`src/middleware.ts` returns 404 for every request with the `Next-Action` header, because the project has no Server Actions and such requests come from vulnerability scanners. If Server Actions are ever added, remove this check.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
