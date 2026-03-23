# SAP Consultant Workspace — Windows Bootstrap Script
# This script checks for Git and Node.js, installs them if missing, and sets up the workspace.

$ErrorActionPreference = "Stop"

Write-Host "`n╔══════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   SAP Consultant Workspace — Windows Setup       ║" -ForegroundColor Cyan
Write-Host "╚══════════════════════════════════════════════════╝`n" -ForegroundColor Cyan

# 1. Check for Git
if (!(Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "🔍 Git not found. Installing via winget..." -ForegroundColor Yellow
    winget install --id Git.Git -e --source winget --accept-package-agreements --accept-source-agreements
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
} else {
    Write-Host "✅ Git is already installed." -ForegroundColor Green
}

# 2. Check for Node.js
if (!(Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "🔍 Node.js not found. Installing via winget..." -ForegroundColor Yellow
    winget install --id OpenJS.NodeJS -e --source winget --accept-package-agreements --accept-source-agreements
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
} else {
    Write-Host "✅ Node.js is already installed." -ForegroundColor Green
}

# 3. Clone Repository
$repoDir = "SAP-Workspace"
if (!(Test-Path $repoDir)) {
    Write-Host "📥 Cloning SAP-Workspace repository..." -ForegroundColor Cyan
    git clone https://github.com/maanu94/SAP-Workspace.git
}

# 4. Run Installer
Set-Location $repoDir
if (Test-Path "install.js") {
    Write-Host "🚀 Running SAP Consultant Workspace installer...`n" -ForegroundColor Cyan
    node install.js
} else {
    Write-Error "❌ install.js not found in $repoDir"
}
