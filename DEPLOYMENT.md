# Deployment Guide

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

## GitHub Pages URL

Your portfolio will be available at: **https://subrotadebnath.github.io/portfolio/**

## Automatic Deployment

The project uses GitHub Actions for CI/CD. Every push to the `main` branch will automatically:

1. ✅ Run linting checks
2. ✅ Build the project
3. ✅ Deploy to GitHub Pages

### Workflow File

The deployment workflow is configured in `.github/workflows/deploy.yml`

## One-Time Setup Required

To enable GitHub Pages deployment, you need to configure your repository settings:

### Step 1: Enable GitHub Pages

1. Go to your repository: https://github.com/SubrotaDebnath/portfolio
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - Source: **GitHub Actions**
5. Click **Save**

### Step 2: Push Your Code

```bash
# Add all changes
git add .

# Commit changes
git commit -m "Configure CI/CD and GitHub Pages deployment"

# Push to main branch
git push origin main
```

### Step 3: Monitor Deployment

1. Go to the **Actions** tab in your repository
2. You should see the workflow running
3. Once complete (green checkmark ✅), your site will be live!

## Alternative: Deploy to Root Domain

If you want to deploy to **https://subrotadebnath.github.io/** (without `/portfolio`), you have two options:

### Option 1: Rename Repository

1. Rename your repository from `portfolio` to `subrotadebnath.github.io`
2. Update `vite.config.ts`:
   ```typescript
   base: '/',  // Change from '/portfolio/' to '/'
   ```
3. Push changes

### Option 2: Use Custom Domain

1. Buy a domain (e.g., subrotadebnath.com)
2. In repository Settings > Pages > Custom domain, add your domain
3. Update `vite.config.ts`:
   ```typescript
   base: '/',  // Change from '/portfolio/' to '/'
   ```
4. Configure your domain's DNS settings

## Local Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Preview Production Build

After building, you can preview the production build locally:

```bash
npm run build
npm run preview
```

Then visit: http://localhost:4173/portfolio/

## Troubleshooting

### Issue: Assets not loading after deployment

**Solution**: Make sure `base: '/portfolio/'` is set in `vite.config.ts`

### Issue: 404 errors

**Solution**:
- Verify GitHub Pages is enabled in repository settings
- Check that the source is set to "GitHub Actions"
- Make sure the workflow completed successfully

### Issue: Deployment fails

**Solution**:
- Check the Actions tab for error logs
- Ensure all dependencies are in `package.json`
- Verify the build runs successfully locally with `npm run build`

## Environment Variables

If you need environment variables for production:

1. Go to repository Settings > Secrets and variables > Actions
2. Add your secrets (e.g., API keys)
3. Reference them in the workflow file:
   ```yaml
   - name: Build
     run: npm run build
     env:
       VITE_API_KEY: ${{ secrets.API_KEY }}
   ```

## CI/CD Pipeline

The pipeline runs on every push to `main`:

```
┌─────────────┐
│   Push to   │
│    main     │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Checkout   │
│    Code     │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Setup     │
│   Node.js   │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Install   │
│Dependencies │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│     Lint    │
│    Code     │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│    Build    │
│   Project   │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Deploy    │
│   to Pages  │
└─────────────┘
```

## Build Optimization

The production build is optimized for:
- ✅ Minified JavaScript and CSS
- ✅ Tree-shaking to remove unused code
- ✅ Code splitting for better performance
- ✅ Asset optimization
- ✅ Gzip compression ready

## Additional Resources

- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)