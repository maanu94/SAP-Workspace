/**
 * SAP Consultant Workspace — Initialization Helper
 * Cross-platform (Windows + MacOS), no stdin required.
 * 
 * Usage:
 *   node init.js --workspace /path/to/workspace
 *   node init.js --new-client "ClientName" --workspace /path/to/workspace
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const workspaceIdx = args.indexOf('--workspace');
const newClientIdx = args.indexOf('--new-client');

const workspace = workspaceIdx !== -1 ? args[workspaceIdx + 1] : process.cwd();
const newClientName = newClientIdx !== -1 ? args[newClientIdx + 1] : null;

// Resolve template paths
const skillDir = path.dirname(__dirname);  // skills/sap-consultant/
const repoRoot = path.dirname(path.dirname(skillDir)); // project root (for repo mode)
const templatesDir = findTemplatesDir();

function findTemplatesDir() {
    // Check if templates exist in the workspace itself (already initialized)
    const wsTemplates = path.join(workspace, 'templates');
    if (fs.existsSync(wsTemplates)) return wsTemplates;

    // Check if templates exist relative to the skill (repo structure)
    const repoTemplates = path.join(repoRoot, 'templates');
    if (fs.existsSync(repoTemplates)) return repoTemplates;

    // Search common locations relative to Antigravity home
    const homeDir = require('os').homedir();
    const searchPaths = [
        path.join(homeDir, '.gemini', 'antigravity', 'scratch', 'TESTGSD', 'templates'),
        path.join(homeDir, 'sap-consultant-workspace', 'templates'),
        path.join(skillDir, 'templates'),
    ];
    for (const p of searchPaths) {
        if (fs.existsSync(p)) return p;
    }

    return null;
}

function copyTemplate(templateFile, destFile, replacements = {}) {
    if (!templatesDir) {
        console.error(`⚠️  Templates directory not found. Creating minimal files.`);
        return false;
    }
    const srcPath = path.join(templatesDir, templateFile);
    if (!fs.existsSync(srcPath)) {
        console.warn(`⚠️  Template not found: ${templateFile}`);
        return false;
    }
    let content = fs.readFileSync(srcPath, 'utf-8');
    for (const [key, val] of Object.entries(replacements)) {
        content = content.replace(new RegExp(key.replace(/[{}]/g, '\\$&'), 'g'), val);
    }
    const destDir = path.dirname(destFile);
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
    fs.writeFileSync(destFile, content);
    return true;
}

function initWorkspace() {
    console.log('🔄 Initializing SAP Architecture Workspace...');

    // Create .cursorrules
    if (!fs.existsSync(path.join(workspace, '.cursorrules'))) {
        copyTemplate('cursorrules.md', path.join(workspace, '.cursorrules'));
        console.log('  ✓ .cursorrules created');
    }

    // Create CLAUDE.md (Claude Code support)
    if (!fs.existsSync(path.join(workspace, 'CLAUDE.md'))) {
        copyTemplate('claude-md.md', path.join(workspace, 'CLAUDE.md'));
        console.log('  ✓ CLAUDE.md created');
    }

    // Create GLOBAL-KNOWLEDGE.md
    if (!fs.existsSync(path.join(workspace, 'GLOBAL-KNOWLEDGE.md'))) {
        copyTemplate('global-knowledge.md', path.join(workspace, 'GLOBAL-KNOWLEDGE.md'));
        console.log('  ✓ GLOBAL-KNOWLEDGE.md created');
    }

    // Create REFERENCE.md
    if (!fs.existsSync(path.join(workspace, 'REFERENCE.md'))) {
        copyTemplate('reference.md', path.join(workspace, 'REFERENCE.md'));
        console.log('  ✓ REFERENCE.md created');
    }

    // Create Clientes directory
    const clientsDir = path.join(workspace, 'Clientes');
    if (!fs.existsSync(clientsDir)) {
        fs.mkdirSync(clientsDir, { recursive: true });
        console.log('  ✓ Clientes/ directory created');
    }

    // Copy document templates
    const templatesDestDir = path.join(workspace, 'templates', 'documents');
    if (!fs.existsSync(templatesDestDir)) {
        fs.mkdirSync(templatesDestDir, { recursive: true });
        const docTemplates = ['adr.md', 'functional-spec.md', 'technical-spec.md', 'mapping-doc.md', 'test-script.md'];
        docTemplates.forEach(t => {
            const src = path.join('documents', t);
            copyTemplate(src, path.join(templatesDestDir, t));
        });
        console.log('  ✓ Document templates copied');
    }

    // Copy client-level templates to workspace templates root
    const wsTemplatesRoot = path.join(workspace, 'templates');
    ['client-context.md', 'session-log.md'].forEach(t => {
        const dest = path.join(wsTemplatesRoot, t);
        if (!fs.existsSync(dest)) copyTemplate(t, dest);
    });
    console.log('  ✓ Client templates ready');

    console.log('\n✅ SAP Architecture Workspace initialized successfully!');
    listClients();
}

function createClient(clientName) {
    const clientDir = path.join(workspace, 'Clientes', clientName);
    if (fs.existsSync(clientDir)) {
        console.log(`⚠️  Client '${clientName}' already exists.`);
        return;
    }

    fs.mkdirSync(clientDir, { recursive: true });

    const today = new Date().toISOString().split('T')[0];

    // Create SAP-CONTEXT.md
    copyTemplate('client-context.md', path.join(clientDir, 'SAP-CONTEXT.md'), {
        '{{CLIENT_NAME}}': clientName,
        '{{DATE}}': today
    });

    // Create Documents folder
    const docsDir = path.join(clientDir, 'Documents');
    if (!fs.existsSync(docsDir)) {
        fs.mkdirSync(docsDir, { recursive: true });
    }

    // Create SESSION-LOG.md
    copyTemplate('session-log.md', path.join(clientDir, 'SESSION-LOG.md'), {
        '{{CLIENT_NAME}}': clientName
    });

    console.log(`\n✅ Client '${clientName}' created successfully!`);
    console.log(`   → ${path.join('Clientes', clientName, 'SAP-CONTEXT.md')}`);
    console.log(`   → ${path.join('Clientes', clientName, 'SESSION-LOG.md')}`);
}

function listClients() {
    const clientsDir = path.join(workspace, 'Clientes');
    if (!fs.existsSync(clientsDir)) {
        console.log('No Clientes/ directory found.');
        return;
    }
    const clients = fs.readdirSync(clientsDir).filter(f => 
        fs.statSync(path.join(clientsDir, f)).isDirectory()
    );

    if (clients.length === 0) {
        console.log('\nNo clients found. Use --new-client "Name" to create one.');
    } else {
        console.log('\n📋 Existing clients / Clientes existentes:');
        clients.forEach((c, i) => console.log(`   [${i + 1}] ${c}`));
    }
}

// Main execution
if (newClientName) {
    // Ensure workspace is initialized first
    if (!fs.existsSync(path.join(workspace, '.cursorrules'))) {
        initWorkspace();
    }
    createClient(newClientName);
} else {
    initWorkspace();
}
