# Riḍā by Rahma — complete website handoff

Snapshot: 17 September 2026.

This package contains the current website design, animation, content, editable source, server code and database schema. It is a handoff of the working website, not a chat export. No conversation transcript, actual appointment database, account passwords, hosting credentials or Git history is included.

## For the website owner

Send the complete ZIP to your developer. Ask them to preserve the existing appearance and interactions, including the opening 3D gallery, the connected brain and heart, the scrolling thread and the final Riḍā signature. The package also includes the education centre, English and Malayalam pages, PHQ-4 screening and booking features.

Hosting, domain access and any real database transfer must be arranged separately. This ZIP does not grant access to the existing hosting account or move the website onto a domain automatically.

## For the developer: open the exact website locally

1. Extract the ZIP and open the `Rida-by-Rahma-Website` folder in your terminal.
2. Use Node.js 24 and pnpm compatible with lockfile version 9. The handoff was checked using Node.js 24.19.0.
3. Install the locked dependencies:

   ```sh
   pnpm install --frozen-lockfile
   ```

4. Start the local preview:

   ```sh
   pnpm dev
   ```

5. Open `http://127.0.0.1:5173/` in a modern browser. Start without a `#section` fragment to see the introduction on a fresh browser session. Use **Replay introduction** to show it again. Reduced-motion preferences intentionally bypass automatic playback and offer a calmer replay.

The local preview creates a new, empty SQLite database in `.local/`. It does not connect to the practice's live appointments. Its simulated staff sign-in is for local development only.

Do not double-click `index.html` to preview the application. Its absolute asset paths and JavaScript modules require an HTTP server.

## What is included

| Folder or file | Purpose |
| --- | --- |
| `public/` | Complete browser-facing pages, artwork, font, styles, animation modules and the compiled Three.js bundle. |
| `src/` | Editable 3D scene, sculpture and atmosphere source. |
| `scripts/` | Page generation, build, local preview and validation tools. |
| `server/` | Booking, availability, management and staff APIs as a Cloudflare-compatible Worker. |
| `db/` and `drizzle/` | Database schema and empty-database migrations; no patient records. |
| `tests/` | Booking and PHQ-4 regression checks using synthetic/in-memory data. |
| `dist/` | Ready-built client assets, Worker and migration metadata from this source snapshot. |
| `package.json` and `pnpm-lock.yaml` | Dependencies and reproducible package versions. |
| `.env.example` | Configuration names and an example site origin; it contains no password or staff allowlist entries. |
| `.openai/hosting.json` | Existing Sites registration metadata and logical database binding, retained because the current build copies it. This is not an access credential. |
| `handoff/` | Architecture, hosting notes, source hashes and verification results. |
| `licenses/` | Three.js licence; the font licence is also in `public/fonts/`. |

## Rebuild and check

```sh
pnpm build
pnpm test
python3 scripts/validate-site.py
```

The checked-in `public/` includes generated pages. The English homepage is also a source template. Read `handoff/DEVELOPER-NOTES.md` before editing shared navigation, translations or generated pages.

The supplied `dist/` is convenient for deployment work, but it is not a configured hosting account. A full deployment needs the booking database, secure staff authentication and the final site origin. Read the deployment notes before exposing staff APIs.

## Scope of this version

- English and Malayalam pages are included. The Learning centre and PHQ-4 are in English. Hindi is a session-language option, not a complete website translation.
- Booking defaults: Monday–Friday, 10 am–5 pm India Standard Time; 60-minute sessions, 15-minute gaps and lunch from 1:30–2:30 pm. Bookings confirm immediately in the application.
- Appointment confirmation is displayed on the website with a private management link. Email/WhatsApp delivery, payments, a video-call provider and external calendar synchronisation are not implemented.
- General enquiries prepare text for copying; they do not send a message. Practice contact details, professional details, fees and other marked launch information remain to be completed by the practice.
- Education and translated clinical content are marked as awaiting practice review. Preserve the screening limitations, crisis guidance and location-specific availability information.

The bundled application files preserve the source snapshot. Handoff documentation is newly written for the developer. Historical reviews, chat material, original generation prompts, machine-specific runtime files and private local data have been left out.
