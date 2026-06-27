# Mantis613 Fintech Terminal Portfolio

Futuristic fintech terminal dashboard portfolio for [Mantis613.github.io](https://Mantis613.github.io).

## Local dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## GitHub Pages

This is a Vite app. GitHub Pages must use **GitHub Actions** as the source.

If the site shows a blank page, check:

Settings → Pages → Build and deployment → Source → GitHub Actions

Do not deploy from branch/root, because that serves the raw Vite `index.html` instead of the built `dist` output.

## Deployment

1. Push to `main` manually
2. GitHub repo Settings → Pages → Source → GitHub Actions
3. Wait for Actions workflow
4. Open https://Mantis613.github.io

## Security

- No token required
- No real market data (all mock)
- No secrets

## Customize

| What | File |
|------|------|
| Profile | `src/data/profileData.ts` |
| Markets / logs | `src/data/marketData.ts` |
| Chart data | `src/data/portfolioData.ts` |
| Projects | `src/data/projects.ts` |
| Skills | `src/data/marketData.ts` → `skills` |
