---
name: sap-export
description: "Export SAP documents (ADR, FS, TS, Presentation, Test Script) to professional formats (DOCX, PPTX, XLSX)."
---

# SAP Export Skill

## Commands

### DOCX (Architectural/Technical Docs)
- `node scripts/export-docx.js <json-path>`
- Generates professional Word documents with ADR or TS formatting.

### PPTX (Client Presentations)
- `node scripts/export-pptx.js <json-path>`
- Generates high-end slide decks with SAP branding.

### XLSX (Test Scripts)
- `node scripts/export-xlsx.js <json-path>`
- Generates structured test cases in Excel.

## JSON Schema
Use `templates/technical-design-schema.json` as the standard input format for all export scripts. Ensure the AI prepares the JSON based on the conversation context before calling the scripts.
