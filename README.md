# HMO Landing — GitHub Pages

## Deploy

1. Create a new GitHub repo (e.g. `hmo-landing`).
2. Upload the **contents** of this folder to the repo root — not the folder itself. You should see `index.html`, `hmo.css`, `landing.css`, and the `assets/`, `fonts/`, `landing/` folders directly at the repo root.
3. Repo → **Settings → Pages**.
4. Source: **Deploy from branch** · Branch: **main** · Folder: **/ (root)** → Save.
5. Wait ~1 min. Your site is live at `https://<you>.github.io/<repo>/`.

## Custom domain (optional)

In **Settings → Pages → Custom domain**, enter your domain and add a `CNAME` DNS record at your registrar pointing at `<you>.github.io`.

## Local preview

```
cd this-folder
python3 -m http.server 8000
```
Then open `http://localhost:8000`.

## Notes

- React + Babel run in the browser (no build step). First load compiles JSX on the fly — ~0.5s on decent wifi.
- If you want zero-dependency hosting, use the standalone single-file bundle instead (`HMO Discord Bot.html`).
- To tweak: edit source files and push. No build needed.
