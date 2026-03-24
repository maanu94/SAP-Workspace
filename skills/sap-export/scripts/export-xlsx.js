/**
 * SAP Consultant Workspace — XLSX Export Script
 */

const fs = require('fs');
const path = require('path');
const ExcelJS = require('exceljs');

const jsonPath = process.argv[2];
if (!jsonPath) process.exit(1);

const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
const workbook = new ExcelJS.Workbook();
const sheet = workbook.addWorksheet('Test Scripts');

// --- Header ---
sheet.columns = [
    { header: 'ID', key: 'id', width: 10 },
    { header: 'Escenario / Scenario', key: 'scenario', width: 30 },
    { header: 'Paso / Step', key: 'step', width: 40 },
    { header: 'Entrada / Input', key: 'input', width: 25 },
    { header: 'Resultado Esperado / Expected', key: 'expected', width: 40 },
    { header: 'Resultado Real / Actual', key: 'actual', width: 40 }
];

sheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
sheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF005483' } };

// --- Data ---
let rowNum = 2;
(data.testScripts || []).forEach(ts => {
    (ts.steps || []).forEach((s, idx) => {
        sheet.addRow({
            id: idx === 0 ? ts.id : '',
            scenario: idx === 0 ? ts.scenario : '',
            step: s.step,
            input: s.input,
            expected: s.expected,
            actual: ''
        });
        rowNum++;
    });
    sheet.addRow({}); // spacer
    rowNum++;
});

// Save
const outputPath = path.join(path.dirname(jsonPath), `TestScripts_${(data.title || 'SAP').replace(/[^a-z0-9]/gi, '_')}.xlsx`);
workbook.xlsx.writeFile(outputPath).then(() => {
    console.log(`\n✅ XLSX generated: ${outputPath}`);
});
