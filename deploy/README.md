# jocelindarma.github.io

Personal portfolio site. Plain static files — no build step.

## Deploy with GitHub Pages

1. Create a repo named `jocelindarma.github.io` (a user site, served at the root domain).
2. Push the contents of this folder to the `main` branch:

   ```
   git init
   git add .
   git commit -m "portfolio site"
   git branch -M main
   git remote add origin git@github.com:jocelindarma/jocelindarma.github.io.git
   git push -u origin main
   ```

3. Repo → Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
4. Live at `https://jocelindarma.github.io` within a minute or two.

For a project repo (e.g. `portfolio`) instead of a user site, the URL becomes
`https://jocelindarma.github.io/portfolio/`. Everything here uses relative paths,
so that works without changes.

## Files

- `index.html` — the whole site (markup + logic)
- `support.js` — rendering runtime, loads React from unpkg at runtime
- `image-slot.js` — image placeholder component (used by the sidebar avatar)
- `art/` — illustrations and diagrams
- `jocelin-darma-resume.pdf` — linked from the resume view

An internet connection is required on first load (React, d3, topojson and Google
Fonts come from CDNs).
