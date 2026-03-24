/**
 * SAP Consultant Workspace — PPTX Export Script
 */

const fs = require('fs');
const path = require('path');
const PptxGenJS = require('pptxgenjs');

const jsonPath = process.argv[2];
if (!jsonPath) process.exit(1);

const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
const pres = new PptxGenJS();
const lang = (data.language || 'es').toLowerCase();

// --- Configuration ---
pres.layout = 'LAYOUT_16x9';
pres.author = 'SAP Consultant AI';

const COLOR_BLUE = '005483';
const COLOR_GOLD = 'F0AB00';
const COLOR_WHITE = 'FFFFFF';

// --- Slides ---

// 1. Title Slide
let slide = pres.addSlide();
slide.background = { color: COLOR_BLUE };
slide.addText(data.title || 'SAP Architecture Proposal', {
    x: 1, y: 2, w: '80%', h: 1,
    fontSize: 44, color: COLOR_WHITE, bold: true, align: pres.AlignH.center
});
slide.addText(`Cliente: ${data.client || '-'} | Fecha: ${data.date || new Date().toDateString()}`, {
    x: 1, y: 3.2, w: '80%', h: 0.5,
    fontSize: 20, color: COLOR_GOLD, align: pres.AlignH.center
});

// 2. Context
slide = pres.addSlide();
slide.addText(lang === 'es' ? '1. Contexto' : '1. Context', { x: 0.5, y: 0.5, fontSize: 32, bold: true, color: COLOR_BLUE });
slide.addText(data.context || '', { x: 0.5, y: 1.5, w: 9, h: 3, fontSize: 18 });

// 3. Options
(data.options || []).forEach((opt, idx) => {
    slide = pres.addSlide();
    slide.addText(`${lang === 'es' ? 'Opción' : 'Option'} ${idx + 1}: ${opt.name}`, { x: 0.5, y: 0.5, fontSize: 28, bold: true, color: COLOR_BLUE });
    
    slide.addText(lang === 'es' ? 'Pros:' : 'Pros:', { x: 0.5, y: 1.2, fontSize: 20, bold: true, color: '00AA00' });
    slide.addText((opt.pros || []).map(p => `• ${p}`).join('\n'), { x: 0.5, y: 1.6, w: 4.5, h: 3, fontSize: 14 });

    slide.addText(lang === 'es' ? 'Contras:' : 'Cons:', { x: 5.2, y: 1.2, fontSize: 20, bold: true, color: 'AA0000' });
    slide.addText((opt.cons || []).map(c => `• ${c}`).join('\n'), { x: 5.2, y: 1.6, w: 4.5, h: 3, fontSize: 14 });
    
    if (opt.businessImpact) {
        slide.addText(lang === 'es' ? 'Impacto de Negocio:' : 'Business Impact:', { x: 0.5, y: 4.5, fontSize: 16, bold: true });
        slide.addText(opt.businessImpact, { x: 0.5, y: 4.8, w: 9, h: 1, fontSize: 12, italic: true });
    }
});

// Save
const outputPath = path.join(path.dirname(jsonPath), `Presentation_${(data.title || 'SAP').replace(/[^a-z0-9]/gi, '_')}.pptx`);
pres.writeFile({ fileName: outputPath }).then(fileName => {
    console.log(`\n✅ PPTX generated: ${fileName}`);
});
