# SAP Consultant Workspace

A distributable, cross-platform **SAP Architecture Workspace** for AI-assisted consulting. Works with **Antigravity** and **Claude Code** on **Windows and MacOS**.

## Features

- 🧠 **Senior SAP Consultant Persona** — 15+ years expertise (S/4HANA, Ariba, BTP, CIG, ABAP)
- 💎 **Professional Skills (V3.0)** — Integrated `docx`, `pptx`, `xlsx`, and `pdf` official skills
- 🎨 **Antigravity Design System** — Spatial depth, glassmorphism, and GSAP motion standards
- 🛠️ **Technical Excellence** — Clean ABAP checklists and CDS VDM modeling templates
- 📂 **Multi-Client Management** — Isolated context per client with `Documents/` folder and logs
- 📚 **Global Knowledge Base** — Cross-client learnings with duplication check and user approval
- 📝 **Advanced Document Templates** — ADR, FS, TS, UI-SPEC, Mapping Doc, Test Script
- 📤 **DOCX Export (Premium)** — Professional Word generation with optimized layouts
- 🌍 **Session Language** — Choose your working language (ES/EN) at the start
- 🔍 **SAP Reference Matrix** — TCodes, BAPIs, Integration Patterns, and Fiori Annotations
- 🚫 **Anti-Hallucination Rules** — Never gives vague answers; offers to search official SAP docs

## Quick Start (Automated)

Copy and paste the command for your OS into your terminal:

**Windows (PowerShell):**
```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/maanu94/SAP-Workspace/main/setup-win.ps1'))
```

**MacOS / Linux (Shell):**
```bash
curl -fsSL https://raw.githubusercontent.com/maanu94/SAP-Workspace/main/setup-mac.sh | bash
```

### Manual Installation

```bash
git clone https://github.com/maanu94/SAP-Workspace.git
cd SAP-Workspace
node install.js
```

The installer will:
1. Detect your OS (Windows / MacOS)
2. Detect your AI tool (Antigravity / Claude Code)
3. Copy skills to the correct location
4. Install the `docx` dependency for DOCX export

## Usage

### Initialize a workspace
Open any empty folder in your AI tool and run:
```
/sap-consultant
```
This creates the workspace files: `.cursorrules`, `GLOBAL-KNOWLEDGE.md`, `REFERENCE.md`, `Clientes/`, and document templates.

### Select or create a client
```
/sap-consultant ACME
```
Creates a new client folder with `SAP-CONTEXT.md` and `SESSION-LOG.md`, then asks SAP landscape questions.

### Export a document to DOCX
```
/sap-export
```
Generates a Word document from the current conversation context.

## Supported Document Types

| Type | Description |
|------|-------------|
| ADR  | Architecture Decision Record |
| FS   | Functional Specification (BAdIs, User Exits, Reports) |
| TS   | Technical Specification (ABAP-focused) |
| MAP  | Integration Mapping Document (IDoc/cXML) |
| TEST | Integration Test Script |
| UI   | UI Specification (Fiori Elements / Custom UI5) |

## Languages

All documents support **Spanish (ES)** and **English (EN)**. The AI automatically matches your language.

## Requirements

- **Node.js** 14+ (for installer and DOCX export)
- **Antigravity** or **Claude Code**

## Changelog

### v3.0.0 (2026-03-24) — Professional Upgrade
- **Integrated Professional Skills**: Added official `docx`, `pptx`, `xlsx`, and `pdf` automation skills.
- **Antigravity Design System**: Integrated GSAP and spatial design standards for modern UI/UX.
- **Enhanced Templates**: Upgraded FS/TS with Clean ABAP, CDS Modeling, and Mermaid diagrams.
- **New UI-SPEC Template**: Standardized frontend specification for Fiori/Web projects.
- **Global Design Tokens**: Added `DESIGN-SYSTEM.md` for consistent workspace-wide styling.

### v2.2.0 (2026-03-23)
- **Automated Bootstrap**: Added `setup-win.ps1` and `setup-mac.sh` for one-liner installation including Git/Node.js checks.
- **Enhanced Installer**: Version 2.2 UI.

### v2.1.0 (2026-03-23)
- **Client-Specific Context**: Added `Documents/` folder for each client; `/sap-export` now saves there.
- **Improved Language Handling**: Session-based language selection (ES/EN) at the start.
- **Interactive Knowledge**: AI now asks for approval before updating `GLOBAL-KNOWLEDGE.md` and checks for duplicates.
- **Clean Structure**: Standardized directory structure for better AI context retention.

### v2.0.0 (Initial Release)
- Multi-client setup, persona prompts, templates, and DOCX export.

## Versioning & Restoration

This project uses **Git Tags** to mark stable releases. If you need to restore or download a previous version:
1. Go to the **Releases** or **Tags** tab on GitHub.
2. Select the version (e.g., `v3.0.0`) and download the Source Code (ZIP).
3. Or using Git: `git checkout tags/v2.2.0`

## License

MIT
