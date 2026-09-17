# Handoff verification

Verified on 17 September 2026.

- The package contains 96 original application/configuration files copied from the working website. Every file retained its original SHA-256 after rebuilding the copied project.
- The copied project builds successfully using Node.js 24.19.0 and the dependency versions already installed for this project. A fresh dependency download was not performed for this handoff; use the included lockfile when installing on another computer.
- All six automated test entries passed. These cover scheduling, concurrent booking/idempotency, private-link isolation, cancellation, conflicting rescheduling, staff/origin/day-off checks, and PHQ-4 behaviour. PHQ-4 checks include all 256 complete and 369 incomplete answer patterns.
- The page validator passed for 34 HTML pages, checking local destinations, assets, anchors, document language, H1 structure and unique IDs.
- Built browser files match the supplied `public/` files. Built server files match the supplied Worker sources.
- The package excludes runtime environment files other than `.env.example`, local databases, logs, dependency installations, Git history, agent metadata and conversation exports. A scan for common private-key and API-token formats returned no matches.
- The ZIP is verified for archive integrity, safe relative paths and checksum matches after extraction.

`SOURCE-SNAPSHOT.json` records the hashes of the original application files. `FILES.sha256` records all deliverable files except itself. This verification covers the handoff, not the configuration of a new production host, a clinical review or a full accessibility audit. No live deployment, domain change, patient data transfer or external message was performed.
