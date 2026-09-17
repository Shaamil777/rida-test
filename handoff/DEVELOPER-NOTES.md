# Developer notes

## Architecture and source of truth

The frontend is plain HTML/CSS/JavaScript with Three.js. It is not a WordPress theme or a React/Next.js application. The server is a Fetch API Worker with a D1-compatible database interface. Preserve the existing code if the goal is visual and functional parity.

`public/index.html` is the English homepage and the source of the shared header, footer and enquiry markup. `scripts/render-pages.mjs` exports the page renderer and builds services and the first-visit guide. `scripts/render-features.mjs` generates booking, management, staff, privacy and resource routes. `scripts/resources.mjs` holds the resource articles. `public/support-data.js` supplies service and concern content.

`scripts/education.mjs` holds the six lessons; `scripts/render-education.mjs` builds `/learn/`. Its interaction is in `public/education.mjs`. `scripts/render-ml.mjs` and `scripts/ml-copy.mjs` generate Malayalam pages. Editing only generated subpages will be overwritten on the next build.

Build order is defined in `scripts/build.mjs`: base pages, feature pages, education, Malayalam, thread/intro markup, page atmosphere, the Three.js bundle, then output staging. Keep this order.

## Animation and appearance

- `scripts/intro-markup.mjs`, `public/entrance.mjs` and `public/entrance.css`: scroll-controlled entrance gallery, accessible controls and brand reveal.
- `src/intro-sculpture.mjs` and `src/intro-atmosphere.mjs`: introductory 3D sculpture and environment.
- `src/thread-scene.mjs`: shared scene entry, bundled by esbuild into `public/thread-scene.bundle.mjs`.
- `public/thread-story.mjs` and `.css`: the main-page artwork blending into the unwinding thread.
- `public/thread-lettering.mjs` and `public/signature-type.mjs`: final typeset lettering and thread tracing.
- `scripts/render-story.mjs`: intro and thread markup on the homepages.
- `scripts/render-atmosphere.mjs`, `public/page-atmosphere.css` and `.mjs`: artwork and restrained effects across public pages.
- `public/style.css`, `theme.css`, `practice.css` and `education.css`: base and route-specific styling.

Retain the original `public/mind-heart-v1.png` and the included WebP artwork. They are required parts of the approved visual experience. The image fallback remains available when WebGL is unavailable. Automatic intro playback is once per browser session, skips deep links and respects reduced motion. This is intentional, not a missing animation.

`scripts/render-signature-type.py` is an optional authoring utility, not a runtime or normal build requirement. It needs fontTools and the referenced local fonts if used to regenerate lettering. The generated vector data is already included.

## Full application hosting

The package does not include production database contents, domains, account access or environment secrets. The visual frontend can be hosted as static assets, but static hosting alone will not supply booking or secure staff access. Do not represent a static upload as the complete functional deployment.

For the existing Sites deployment, retain the owner-controlled project and configure its runtime values through the owner's authorised hosting workflow. `.openai/hosting.json` records that project's non-secret registration ID; possession of the file grants no access and is not permission to publish to it.

For standalone Cloudflare Workers hosting, configure:

- `server/index.js` (or built `dist/server/index.js`) as the Worker entry.
- Static assets from `public/` (or built `dist/client/`) bound as `ASSETS`, with Worker-first routing. Requests for `/staff/` and `/api/` must not bypass the Worker.
- A new D1 database bound as `DB`. Apply `drizzle/*.sql` through the hosting provider's migration process before enabling bookings. Do not edit an already applied migration.
- `SITE_ORIGIN` as the exact HTTPS origin serving the frontend, without a path, for example `https://www.example.com`.
- A verified staff identity integration and the corresponding server-only `STAFF_SUBJECTS` allowlist.

The generated `dist/server/wrangler.json` is staging configuration. It lacks a production D1 database ID and does not establish a secure standalone authentication system. Complete it for the target account before deployment.

### Authentication requires attention when moving hosts

The current `identity()` function in `server/index.js` trusts `oai-authenticated-user-id` and `oai-authenticated-user-email` supplied by the Sites authentication gateway. `staff()` checks the subject against `STAFF_SUBJECTS`. `/signin-with-chatgpt` and `/signout-with-chatgpt` are supplied by that hosting environment.

These assumptions do not hold automatically on another provider. Replace the identity/sign-in adapter with the new provider's verified session or token system, and strip or ignore caller-supplied identity headers. Merely copying the Worker to an untrusted public endpoint and setting an allowlist is not a secure migration. Keep the staff allowlist empty until verified authentication is connected.

`scripts/dev.mjs` provides deliberately simulated local staff authentication and binds only to `127.0.0.1`. Never use it as the production server.

## Booking and data behaviour to preserve

The server reserves appointment minutes atomically, uses idempotent booking requests and checks versions for conflicting updates. Public management links carry a random token in the URL fragment, supplied to the API as a bearer token; only its hash is stored in the database. Anyone possessing a management link can use it, so do not log or publish these links.

`server/scheduling.mjs` defines the default schedule and validation. The database stores practice settings, appointments, minute reservations, days off, rate-limit entries and a minimal action log. No existing rows are included in the handoff. A real database migration must be arranged separately with the practice.

The local preview uses Node's SQLite implementation and automatically applies the included migrations to a fresh `.local/practice.sqlite`. The test suite uses in-memory synthetic fixtures. Do not package the local database for public distribution.

## Release checklist for the developer

1. Run the supplied build, booking/PHQ-4 tests and page validator.
2. Check both homepages, introduction/replay, keyboard navigation, reduced motion, mobile layout, footer signature and `/learn/`.
3. Check booking, management and staff access against the destination hosting configuration using synthetic data.
4. Serve root-relative paths from the domain root. Preserve direct routing to `/ml/`, `/learn/`, `/services/…`, `/resources/…`, `/appointment/`, `/manage/` and `/staff/`.
5. Confirm the owner has completed the explicitly pending practice and privacy details and reviewed the educational/translated material before public clinical promotion.
6. Arrange HTTPS, DNS, database backup and verified staff access on the chosen host. Domain credentials should be transferred through the owner's normal secure account-sharing process, not added to this ZIP.

## Third-party notices

Three.js is MIT-licensed; its notice is included at `licenses/three-MIT.txt` and the bundle retains inline legal comments. The self-hosted DM Sans font includes its SIL Open Font License at `public/fonts/DM-Sans-OFL.txt`. Dependency versions are recorded in `pnpm-lock.yaml`; retain their licences when redistributing dependencies. The PHQ-4 source and scoring references remain in the website and tests. Original illustration assets are supplied as part of this project; this handoff does not invent a separate licence or transfer third-party rights.
