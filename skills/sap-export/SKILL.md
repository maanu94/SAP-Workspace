---
name: sap-export
description: Convert standard architectural decisions into a formal DOCX Architecture Decision Record (ADR) file.
---

<objective>
Generate a structured Word document (DOCX) from the architectural discussion.
Supports multiple document types: ADR, FS, TS, MAP, TEST.
Supports languages: ES (Spanish) and EN (English).
</objective>

<process>

## How to Export

1. **Analyze** the current conversation and identify the document to generate.
2. **Create** a JSON file in the client's dedicated folder as `Clientes/[ClientName]/Documents/export-data.json` with this structure:

```json
{
  "type": "adr",
  "language": "es",
  "title": "Decisión de Arquitectura: Integración X",
  "client": "Client Name",
  "date": "YYYY-MM-DD",
  "context": "Description of the problem...",
  "options": [
    {
      "name": "Option 1: API REST",
      "pros": ["Pro 1", "Pro 2"],
      "cons": ["Con 1"]
    },
    {
      "name": "Option 2: IDoc",
      "pros": ["Pro 1"],
      "cons": ["Con 1", "Con 2"]
    }
  ],
  "recommendation": "Recommend Option 1 because...",
  "consequences": ["Consequence 1", "Consequence 2"]
}
```

> The `language` field accepts `"es"` (Spanish) or `"en"` (English). Section headers will adapt accordingly.

3. **Run** the export script, passing the path to the JSON file:
```
node "$HOME/.gemini/antigravity/skills/sap-export/scripts/export.js" "Clientes/[ClientName]/Documents/export-data.json"
```

4. The DOCX file will be created in the same `Documents/` directory as `ADR_[title].docx`. This ensures the client's context is kept localized.

</process>
