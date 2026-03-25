# SAP Consultant Workspace

A distributable, cross-platform **SAP Architecture Workspace** for AI-assisted consulting. Works with **Antigravity** and **Claude Code** on **Windows and MacOS**.

## Features

- 🧠 **Senior SAP Consultant Persona** — 15+ years expertise (S/4HANA, Ariba, BTP, CIG, ABAP)
- 💎 **Professional Skills (V3.0)** — Integrated `docx`, `pptx`, `xlsx`, and `pdf` official skills
- 🎥 **Professional Exports (V3.1)** — Generate high-end Slide Decks (PPTX) and Test Scripts (XLSX)
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
4. Install the `docx`, `pptxgenjs`, and `exceljs` dependencies

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

### Export a document
```
/sap-export
```
Pick your format:
- `docx` -> ADR or Technical Spec (TS).
- `pptx` -> Client Presentation (Slide Deck).
- `xlsx` -> Scenario-based Test Scripts.

## Supported Document Types

| Type | Description |
|------|-------------|
| ADR  | Architecture Decision Record |
| FS   | Functional Specification (BAdIs, User Exits, Reports) |
| TS   | Technical Specification (ABAP-focused) |
| MAP  | Integration Mapping Document (IDoc/cXML) |
| TEST | Integration Test Script |
| UI   | UI Specification (Fiori Elements / Custom UI5) |

## Versioning & Restoration

This project uses **Git Tags** to mark stable releases. If you need to restore or download a previous version:
1. Go to the **Releases** or **Tags** tab on GitHub.
2. Select the version (e.g., `v3.1.4`) and download the Source Code (ZIP).

## Changelog

### v3.1.4 (2026-03-25) — Global & Local Skill Discovery
- **Dual-Scope Discovery**: Updated `.cursorrules` and `CLAUDE.md` to mandate browsing both **Global** (`~/.gemini/antigravity/skills`) and **Local** (`skills/`) directories.
- **Full Capability Awareness**: The AI now summarizes all discovered skills (from both scopes) at the beginning of each session.

### v3.1.3 (2026-03-25) — Mandatory Skill Discovery
- **Enforced Skill Browsing**: Mandated browsing the `skills/` directory at session start.

### v3.1.2 (2026-03-24) — Professionalism & Persona Restoration
- **Root Persona Restored**: Added sanitized `.cursorrules` and `CLAUDE.md` to root.

## License

MIT
