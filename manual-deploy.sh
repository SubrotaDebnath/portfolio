#!/bin/bash

echo "🚀 Manual deployment to SubrotaDebnath.github.io"
echo ""

# Build the project
echo "📦 Building project..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

# Clone the pages repo to a temp directory
TEMP_DIR="/tmp/pages-deploy-$$"
echo "📥 Cloning SubrotaDebnath.github.io..."
git clone git@github.com:SubrotaDebnath/SubrotaDebnath.github.io.git "$TEMP_DIR"

# Remove old files (keep .git)
echo "🗑️  Removing old files..."
cd "$TEMP_DIR"
find . -maxdepth 1 ! -name '.git' ! -name '.' ! -name '..' -exec rm -rf {} +

# Copy new build files
echo "📋 Copying new build files..."
cp -r ~/WebstormProjects/subrota_portfolio/dist/* .
cp ~/WebstormProjects/subrota_portfolio/dist/.nojekyll . 2>/dev/null || true

# Copy GitHub Actions workflow
mkdir -p .github/workflows
cp ~/WebstormProjects/subrota_portfolio/.github/workflows/deploy.yml .github/workflows/

# Commit and push
echo "💾 Committing changes..."
git add -A
git commit -m "Deploy new portfolio - $(date '+%Y-%m-%d %H:%M:%S')"

echo "📤 Pushing to GitHub..."
git push origin main --force

# Cleanup
cd ~
rm -rf "$TEMP_DIR"

echo ""
echo "✅ Deployment complete!"
echo ""
echo "🌐 Your site should be live at:"
echo "   https://subrotadebnath.github.io/"
echo ""
echo "⏳ Wait 1-2 minutes for GitHub Pages to rebuild"
echo "💡 Clear your browser cache if you still see the old site"