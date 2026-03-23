# SAP Consultant Workspace

A distributable, cross-platform **SAP Architecture Workspace** for AI-assisted consulting. Works with **Antigravity** and **Claude Code** on **Windows and MacOS**.

## Features

- 🧠 **Senior SAP Consultant Persona** — 15+ years expertise (S/4HANA, Ariba, BTP, CIG, ABAP)
- 📂 **Multi-Client Management** — Isolated context per client with `Documents/` folder and logs
- 📚 **Global Knowledge Base** — Cross-client learnings with duplication check and user approval
- 📝 **SAP Document Templates** — ADR, Functional Spec, Technical Spec, Mapping Doc, Test Script
- 📤 **DOCX Export** — Client-localized Word document generation (ES/EN)
- 🌍 **Session Language** — Choose your working language (ES/EN) at the start
- 🔍 **SAP Reference Cheat Sheet** — TCodes, BAPIs, cXML, APIs at your fingertips
- 🚫 **Anti-Hallucination Rules** — Never gives vague answers; offers to search official SAP docs
- 🚀 **Installer Improvements** — Enhanced OS and AI tool detection for smoother setup.
- 💡 **Contextual Help** — AI provides more relevant suggestions based on current client and document type.

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

## Languages

All documents support **Spanish (ES)** and **English (EN)**. The AI automatically matches your language.

## Requirements

- **Node.js** 14+ (for installer and DOCX export)
- **Antigravity** or **Claude Code**

## Changelog

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

## License

MIT
