# Next.js Multi-Tenant Example

A production-ready example of a multi-tenant application built with Next.js 15, featuring custom subdomains for each tenant.

## Features

- ✅ Custom subdomain routing with Next.js middleware
- ✅ Tenant-specific content and pages
- ✅ Shared components and layouts across tenants
- ✅ Redis for tenant data storage
- ✅ Admin interface for managing tenants
- ✅ Emoji support for tenant branding
- ✅ Support for local development with subdomains
- ✅ Compatible with Vercel preview deployments

## Tech Stack

- [Next.js 15](https://nextjs.org/) with App Router
- [React 19](https://react.dev/)
- [Upstash Redis](https://upstash.com/) for data storage
- [Tailwind 4](https://tailwindcss.com/) for styling
- [shadcn/ui](https://ui.shadcn.com/) for the design system

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- pnpm (recommended) or npm/yarn
- Upstash Redis account (for production)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vercel/platforms.git
   cd platforms
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with:

   ```
   KV_REST_API_URL=your_redis_url
   KV_REST_API_TOKEN=your_redis_token
   ```

4. Start the development server:

   ```bash
   pnpm dev
   ```

5. Access the application:
   - Main site: http://localhost:3000
   - Admin panel: http://localhost:3000/admin
   - Tenants: http://[tenant-name].localhost:3000

## Multi-Tenant Architecture

This application demonstrates a subdomain-based multi-tenant architecture where:

- Each tenant gets their own subdomain (`tenant.yourdomain.com`)
- The middleware handles routing requests to the correct tenant
- Tenant data is stored in Redis using a `subdomain:{name}` key pattern
- The main domain hosts the landing page and admin interface
- Subdomains are dynamically mapped to tenant-specific content

The middleware (`middleware.ts`) intelligently detects subdomains across various environments (local development, production, and Vercel preview deployments).

## Deployment

This application is designed to be deployed on Vercel. To deploy:

1. Push your repository to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy

For custom domains, make sure to:

1. Add your root domain to Vercel
2. Set up a wildcard DNS record (`*.yourdomain.com`) on Vercel

```
portfolio-saas-front
├─ app
│  ├─ actions
│  │  ├─ domains.ts
│  │  ├─ portfolios.ts
│  │  ├─ subscriptions.ts
│  │  └─ themes.ts
│  ├─ api
│  │  ├─ auth
│  │  │  ├─ login
│  │  │  │  └─ route.ts
│  │  │  ├─ logout
│  │  │  │  └─ route.ts
│  │  │  ├─ me
│  │  │  │  └─ route.ts
│  │  │  ├─ register
│  │  │  │  └─ route.ts
│  │  │  └─ [...nextauth].ts
│  │  ├─ portfolios
│  │  │  ├─ route.ts
│  │  │  └─ [id]
│  │  │     └─ route.ts
│  │  ├─ subscriptions
│  │  │  ├─ route.ts
│  │  │  └─ [id]
│  │  │     └─ route.ts
│  │  └─ themes
│  │     ├─ route.ts
│  │     └─ [id]
│  │        └─ route.ts
│  ├─ assets
│  │  ├─ fontawesome
│  │  │  ├─ css
│  │  │  │  ├─ all.css
│  │  │  │  ├─ all.min.css
│  │  │  │  ├─ brands.css
│  │  │  │  ├─ brands.min.css
│  │  │  │  ├─ fontawesome.css
│  │  │  │  ├─ fontawesome.min.css
│  │  │  │  ├─ regular.css
│  │  │  │  ├─ regular.min.css
│  │  │  │  ├─ solid.css
│  │  │  │  ├─ solid.min.css
│  │  │  │  ├─ svg-with-js.css
│  │  │  │  ├─ svg-with-js.min.css
│  │  │  │  ├─ v4-font-face.css
│  │  │  │  ├─ v4-font-face.min.css
│  │  │  │  ├─ v4-shims.css
│  │  │  │  ├─ v4-shims.min.css
│  │  │  │  ├─ v5-font-face.css
│  │  │  │  └─ v5-font-face.min.css
│  │  │  └─ LICENSE.txt
│  │  └─ img
│  │     └─ design
│  │        ├─ dashboard.png
│  │        ├─ form.png
│  │        ├─ landing-page-contrast.png
│  │        ├─ landing-page.png
│  │        └─ register.png
│  ├─ domains
│  │  └─ [subdomain]
│  │     └─ page.tsx
│  ├─ favicon.ico
│  ├─ globals.css
│  └─ [locale]
│     ├─ admin
│     │  ├─ layout.tsx
│     │  └─ page.tsx
│     ├─ auth
│     │  ├─ callback
│     │  │  └─ page.tsx
│     │  ├─ login
│     │  │  └─ page.tsx
│     │  └─ register
│     │     └─ page.tsx
│     ├─ layout.tsx
│     ├─ page.tsx
│     └─ providers.tsx
├─ components
│  ├─ auth
│  │  ├─ signin-card.tsx
│  │  └─ signout-button.tsx
│  └─ ui
│     ├─ badge.tsx
│     ├─ button.tsx
│     ├─ card.tsx
│     ├─ dialog.tsx
│     ├─ emoji-picker.tsx
│     ├─ input.tsx
│     ├─ label.tsx
│     └─ popover.tsx
├─ components.json
├─ hooks
├─ lib
│  ├─ auth.ts
│  ├─ endpoints.ts
│  ├─ fetch.ts
│  ├─ i18n.config.ts
│  ├─ jotai.ts
│  └─ utils.ts
├─ locales
│  ├─ client.ts
│  ├─ en.ts
│  ├─ fr.ts
│  └─ server.ts
├─ middleware.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ README.md
├─ schemas
│  ├─ auth.ts
│  ├─ portfolio.ts
│  ├─ subscription.ts
│  └─ theme.ts
├─ tsconfig.json
└─ types
   └─ actions.ts

```