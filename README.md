# hiimjosh

A small Astro blog.

## Write a post

Add a Markdown file to `src/content/blog/` with this frontmatter:

```md
---
title: Your post title
description: A brief description for search engines and link previews.
publishedAt: 2026-09-29
---
```

Posts are automatically listed on the home page and published at `/posts/<file-name>/`.

## Run locally

```sh
npm install
npm run dev
```

## Deploy to GitHub Pages

Push this repository to GitHub as `hiimjosh`, then enable **GitHub Actions** under **Settings → Pages**. The included workflow deploys each push to `main`. If you choose another repository name, update `base` in `astro.config.mjs` to match it.
