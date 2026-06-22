# Portfolio — McKinsey-style

Minimalist navy/white portfolio. Plain HTML/CSS/JS — no build step, deploys straight to GitHub Pages.

## Files
- `index.html` — hero/about, experience timeline + skills, projects carousel, contact footer
- `case-study.html` + `case-study.css` — case-study page template (duplicate per project)
- `styles.css` — shared design system (colors, type, layout)
- `script.js` — nav toggle, carousel arrows, scroll-reveal
- `assets/profile.jpg` — your circular profile photo (add this; falls back to navy if missing)

## What to edit
1. **Your name** — find/replace `Your Name` in both HTML files + the `<title>`.
2. **About** — the `.lead` paragraph in `index.html`.
3. **Experience** — the `.timeline__item` blocks (year / title / org / blurb).
4. **Skills** — the `.tag` spans.
5. **Projects** — the four `.card` blocks; point each `href` to its own case-study page.
6. **Contact** — email + LinkedIn/GitHub/Resume links in the footer.
7. **Photo** — drop a square image at `assets/profile.jpg`.

## Colors & type
Deep navy `#000033` · grey accent `#73787C` · white `#FFFFFF`. Headlines: Archivo (sans); body: Inter. Change once in `:root` of `styles.css`.

## Deploy to GitHub Pages
```bash
# from inside this portfolio/ folder
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```
Then on GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `root` → Save.**
Live at `https://<you>.github.io/<repo>/` in ~1 minute.

> Tip: for a clean URL `https://<you>.github.io/`, name the repo `<you>.github.io`.
