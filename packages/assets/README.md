# assets

Right now brand images, backgrounds, icons, headshots and docs live in
`/public` and are referenced by URL string (simplest with `output: "export"`).

**Phase 1 follow-up:** dedupe the 84 MB `troyAssets/` folder down to one
canonical headshot per officer + the ~15 brand/background/icon files actually
used, optimize them (webp/avif), and move them here as typed static imports
(`import headshot from "@assets/headshots/troy-warner.jpg"`) so they're
content-hashed and tree-shaken. `.ai` sources and the party-photo bundle go to
Drive, not the repo.

Naming in the old repos is inconsistent (`headshot.jpg`, `alanHeadshot.jpg`,
`RaulHeadshot.jpeg`, …) — when migrating an officer, find the file that repo
actually renders and eyeball it before copying to `public/headshots/<slug>.jpg`.
