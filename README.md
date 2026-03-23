# SAP Consultant Workspace

A distributable, cross-platform **SAP Architecture Workspace** for AI-assisted consulting. Works with **Antigravity** and **Claude Code** on **Windows and MacOS**.

## Features

- 🧠 **Senior SAP Consultant Persona** — 15+ years expertise (S/4HANA, Ariba, BTP, CIG, ABAP)
- 📂 **Multi-Client Management** — Isolated context per client with persistent session logs
- 📚 **Global Knowledge Base** — Cross-client learnings organized by SAP module
- 📝 **SAP Document Templates** — ADR, Functional Spec, Technical Spec, Mapping Doc, Test Script
- 📤 **DOCX Export** — Generate professional Word documents in Spanish or English
- 🔍 **SAP Reference Cheat Sheet** — TCodes, BAPIs, cXML, APIs at your fingertips
- 🚫 **Anti-Hallucination Rules** — Never gives vague answers; offers to search official SAP docs

## Quick Start

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

## License

MIT
