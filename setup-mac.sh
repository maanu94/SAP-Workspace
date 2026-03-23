#!/bin/bash
# SAP Consultant Workspace — MacOS/Linux Bootstrap Script
# This script checks for Git and Node.js, installs them if missing, and sets up the workspace.

set -e

echo ""
echo "╔══════════════════════════════════════════════════╗"
echo "║   SAP Consultant Workspace — MacOS/Linux Setup   ║"
echo "╚══════════════════════════════════════════════════╝"
echo ""

# 1. Check for Git
if ! command -v git &> /dev/null; then
    echo "🔍 Git not found. Trying to install..."
    if command -v brew &> /dev/null; then
        brew install git
    elif command -v apt-get &> /dev/null; then
        sudo apt-get update && sudo apt-get install -y git
    else
        echo "❌ Error: Package manager (brew/apt) not found. Please install Git manually."
        exit 1
    fi
else
    echo "✅ Git is already installed."
fi

# 2. Check for Node.js
if ! command -v node &> /dev/null; then
    echo "🔍 Node.js not found. Trying to install..."
    if command -v brew &> /dev/null; then
        brew install node
    elif command -v apt-get &> /dev/null; then
        curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
        sudo apt-get install -y nodejs
    else
        echo "❌ Error: Package manager (brew/apt) not found. Please install Node.js manually."
        exit 1
    fi
else
    echo "✅ Node.js is already installed."
fi

# 3. Clone Repository
REPO_DIR="SAP-Workspace"
if [ ! -d "$REPO_DIR" ]; then
    echo "📥 Cloning SAP-Workspace repository..."
    git clone https://github.com/maanu94/SAP-Workspace.git
fi

# 4. Run Installer
cd "$REPO_DIR"
if [ -f "install.js" ]; then
    echo "🚀 Running SAP Consultant Workspace installer..."
    echo ""
    node install.js
else
    echo "❌ Error: install.js not found in $REPO_DIR"
    exit 1
fi
