#!/bin/bash

echo "🚀 Deploying portfolio dist to https://subrotadebnath.github.io/"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Must run from portfolio root directory"
    exit 1
fi

# Build the project first
echo "🔨 Building project..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo "❌ Error: dist folder not found"
    exit 1
fi

echo ""
echo "⚠️  This will replace the content at SubrotaDebnath.github.io"
echo "   with the built files from dist/"
echo ""
read -p "Continue? (y/n) " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Cancelled."
    exit 0
fi

# Clone or update the pages repository
TEMP_DIR=$(mktemp -d)
echo "📥 Cloning SubrotaDebnath.github.io..."
git clone git@github.com:SubrotaDebnath/SubrotaDebnath.github.io.git "$TEMP_DIR"

if [ $? -ne 0 ]; then
    echo "❌ Failed to clone repository"
    rm -rf "$TEMP_DIR"
    exit 1
fi

# Remove all files except .git
echo "🧹 Cleaning old files..."
cd "$TEMP_DIR"
find . -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +

# Copy dist contents to the repository
echo "📦 Copying new build files..."
cp -r "$OLDPWD/dist/"* .

# Add all files
echo "💾 Committing changes..."
git add -A
git commit -m "Deploy portfolio build $(date +'%Y-%m-%d %H:%M:%S')" || {
    echo "⚠️  No changes to deploy"
    cd "$OLDPWD"
    rm -rf "$TEMP_DIR"
    exit 0
}

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push origin main --force

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Done! Your site will be live at:"
    echo "   https://subrotadebnath.github.io/"
    echo ""
    echo "⏳ Give it 1-2 minutes to deploy"
    echo ""
    echo "📊 Monitor deployment:"
    echo "   https://github.com/SubrotaDebnath/SubrotaDebnath.github.io/actions"
else
    echo "❌ Failed to push to GitHub"
    cd "$OLDPWD"
    rm -rf "$TEMP_DIR"
    exit 1
fi

# Clean up
cd "$OLDPWD"
rm -rf "$TEMP_DIR"
echo ""
echo "🎉 Deployment complete!"