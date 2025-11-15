#!/bin/bash

echo "🚀 Deploying portfolio to https://subrotadebnath.github.io/"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Must run from portfolio root directory"
    exit 1
fi

# Confirm before proceeding
echo "⚠️  This will replace the content at SubrotaDebnath.github.io"
echo "   with your new portfolio from this repository."
echo ""
read -p "Continue? (y/n) " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Cancelled."
    exit 0
fi

# Add remote if it doesn't exist
if ! git remote | grep -q "pages"; then
    echo "📌 Adding remote for SubrotaDebnath.github.io..."
    git remote add pages git@github.com:SubrotaDebnath/SubrotaDebnath.github.io.git
fi

# Build the project
echo "🔨 Building project..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

# Commit any pending changes
echo "💾 Committing changes..."
git add .
git commit -m "Deploy new portfolio to root domain" || echo "No changes to commit"

# Push to both remotes
echo "📤 Pushing to GitHub..."
echo ""
echo "   Pushing to origin (portfolio)..."
git push origin main

echo ""
echo "   Pushing to pages (SubrotaDebnath.github.io)..."
git push pages main --force

echo ""
echo "✅ Done! Your site will be live at:"
echo "   https://subrotadebnath.github.io/"
echo ""
echo "⏳ Give it 1-2 minutes to deploy"
echo ""
echo "📊 Monitor deployment:"
echo "   https://github.com/SubrotaDebnath/SubrotaDebnath.github.io/actions"