# Stockly — GitHub Pages Ready

This folder is ready to deploy to **GitHub Pages**.

## Quick Deploy (Web UI)
1. Create a new repo on GitHub (e.g., `stockly-site`).
2. Upload the contents of this folder (or drag-and-drop the zip, then extract).
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Set **Branch** to `main` (root) and **Save**.
6. Your site will be live at: `https://YOUR-USERNAME.github.io/stockly-site/`

> Included: `.nojekyll` so GitHub Pages serves everything as-is.

## Local Preview
```bash
python3 -m http.server 3000
# visit http://localhost:3000
```

## Notes
- Uses **hash routes** (e.g., `#/course`) which work great on Pages without extra config.
- Static only: HTML + CSS + JS + SVG.
