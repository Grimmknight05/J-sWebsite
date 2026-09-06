Setting up GitHub Pages (automatic)
===================================

This project uses Vite + TypeScript. The repository includes a GitHub Actions workflow that builds the site and deploys the `dist/` output to GitHub Pages automatically when you push to `main` or `master`.

How it works
- On push to `main`/`master`, the workflow installs dependencies, runs `tsc`, then runs `vite build --base /<repo-name>/` (so assets are referenced correctly for Repo Pages), and publishes `dist/` to the `gh-pages` branch via `peaceiris/actions-gh-pages`.

What you should check
- Ensure your default branch is `main` (or `master`) or adjust `.github/workflows/pages.yml` accordingly.
- If you want to host at a custom domain, add a `CNAME` file to the repository root (or set it in the Pages settings) and update the workflow if needed.

Manual deploy (optional)
- You can also build locally and push the `dist/` contents to `gh-pages` using your preferred workflow.

Notes
- If your site will be served from `https://<username>.github.io/<repo>/` the workflow's base path will be correct. For user/organization pages (`<username>.github.io`) change the Vite base to `/`.
