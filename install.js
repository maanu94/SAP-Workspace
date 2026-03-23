#!/usr/bin/env node
/**
 * SAP Consultant Workspace — Cross-Platform Installer
 * Detects OS + AI tool, copies skills to the correct location, installs deps.
 *
 * Usage: node install.js
 */

const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');

const HOME = os.homedir();
const REPO_ROOT = __dirname;
const IS_WINDOWS = process.platform === 'win32';

console.log('');
console.log('╔══════════════════════════════════════════════════╗');
console.log('║   SAP Consultant Workspace — Installer v2.0     ║');
console.log('╠══════════════════════════════════════════════════╣');
console.log(`║   OS: ${IS_WINDOWS ? 'Windows' : 'MacOS/Linux'}`.padEnd(51) + '║');
console.log('╚══════════════════════════════════════════════════╝');
console.log('');

// --- Detect AI tool ---
const antigravitySkillsDir = path.join(HOME, '.gemini', 'antigravity', 'skills');
const claudeCodeConfigDir = path.join(HOME, '.claude');

const hasAntigravity = fs.existsSync(path.join(HOME, '.gemini', 'antigravity'));
const hasClaudeCode = fs.existsSync(claudeCodeConfigDir);

console.log(`🔍 Detecting AI tools...`);
if (hasAntigravity) console.log('   ✓ Antigravity detected');
if (hasClaudeCode)  console.log('   ✓ Claude Code detected');
if (!hasAntigravity && !hasClaudeCode) {
    console.log('   ⚠️  No AI tool detected. Installing to Antigravity default path.');
}

// --- Copy skills ---
function copyDirRecursive(src, dest) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            copyDirRecursive(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

// Install to Antigravity
if (hasAntigravity || (!hasAntigravity && !hasClaudeCode)) {
    const targetDir = antigravitySkillsDir;
    console.log(`\n📦 Installing skills to Antigravity...`);

    const skills = ['sap-consultant', 'sap-export'];
    skills.forEach(skill => {
        const src = path.join(REPO_ROOT, 'skills', skill);
        const dest = path.join(targetDir, skill);
        if (fs.existsSync(src)) {
            copyDirRecursive(src, dest);
            console.log(`   ✓ ${skill} → ${dest}`);
        } else {
            console.warn(`   ⚠️  Skill source not found: ${src}`);
        }
    });
}

// Install to Claude Code
if (hasClaudeCode) {
    console.log(`\n📦 Configuring Claude Code...`);
    const claudeSkillsDir = path.join(HOME, '.claude', 'skills');
    if (!fs.existsSync(claudeSkillsDir)) fs.mkdirSync(claudeSkillsDir, { recursive: true });

    const skills = ['sap-consultant', 'sap-export'];
    skills.forEach(skill => {
        const src = path.join(REPO_ROOT, 'skills', skill);
        const dest = path.join(claudeSkillsDir, skill);
        if (fs.existsSync(src)) {
            copyDirRecursive(src, dest);
            console.log(`   ✓ ${skill} → ${dest}`);
        }
    });
}

// --- Install docx dependency ---
console.log(`\n📥 Installing dependencies...`);
try {
    execSync('npm install --production', { cwd: REPO_ROOT, stdio: 'inherit' });
    console.log('   ✓ Dependencies installed');
} catch (e) {
    console.error('   ⚠️  npm install failed. Run manually: npm install');
}

// --- Done ---
console.log('');
console.log('╔══════════════════════════════════════════════════╗');
console.log('║   ✅ Installation complete!                      ║');
console.log('╠══════════════════════════════════════════════════╣');
console.log('║                                                  ║');
console.log('║   Usage:                                         ║');
console.log('║     1. Open a folder in your AI tool             ║');
console.log('║     2. Run: /sap-consultant                      ║');
console.log('║     3. Follow the prompts                        ║');
console.log('║                                                  ║');
console.log('╚══════════════════════════════════════════════════╝');
console.log('');
