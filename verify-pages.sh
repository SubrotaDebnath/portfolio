#!/bin/bash

echo "Checking if GitHub Pages is enabled..."
echo ""

if gh api repos/SubrotaDebnath/portfolio/pages &> /dev/null; then
    echo "✅ SUCCESS! GitHub Pages is enabled!"
    echo ""
    gh api repos/SubrotaDebnath/portfolio/pages | jq '{status, source, url}'
    echo ""
    echo "You can now push and the workflow will succeed!"
else
    echo "❌ GitHub Pages is NOT enabled yet"
    echo ""
    echo "Please go to:"
    echo "https://github.com/SubrotaDebnath/portfolio/settings/pages"
    echo ""
    echo "And set Source to 'GitHub Actions'"
fi