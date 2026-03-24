# UI Specification / Especificación de UI

## 1. Interface Overview / Resumen de Interfaz
- **Technology**: Fiori Elements / Custom UI5 / React
- **Floorplan**: List Report / Object Page / Analytical List Page
- **Theme**: SAP Horizon / Custom Antigravity

---

## 2. Design Tokens (Antigravity Skin)
- **Primary Color**: #005483 (SAP Blue)
- **Accent Color**: #F0AB00 (SAP Gold)
- **Glass Effect**: `background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(10px);`
- **Shadows**: `box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);`

---

## 3. Floorplan & Layout
### Header
- Title, Breadcrumbs, Global Actions.

### Content Area
- Filter Bar (Selection Fields).
- Responsive Table / Grid.

---

## 4. Components & Interactive Elements
| Component | State | Interaction / Animation |
|-----------|-------|-------------------------|
| Main Table | Hover | Row highlight + subtle lift (3D) |
| Action Button| Click | GSAP pulse effect |
| Side Panel | Toggle | Smooth slide-in (0.3s ease-out) |

---

## 5. Mockups & Assets
- [Link to Figma / Screenshot]
- [SVG Icons list]

---

## 6. OData / API Mapping
| UI Field | OData Property | Annotation |
|----------|----------------|------------|
| [Field] | [Property] | `@UI.LineItem` |
