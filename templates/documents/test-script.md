# Test Script / Guión de Pruebas

## Document Info / Información del Documento

| Field / Campo | Value / Valor |
|---------------|---------------|
| **Title / Título** | [Test Script Title] |
| **Client / Cliente** | [Client Name] |
| **Related FS / FS Relacionado** | [FS Reference] |
| **Related TS / TS Relacionado** | [TS Reference] |
| **Module / Módulo** | [MM / FI / SD / etc.] |
| **Author / Autor** | [Tester Name] |
| **Date / Fecha** | YYYY-MM-DD |
| **Environment / Ambiente** | DEV / QAS / PRD |

---

## 1. Test Objective / Objetivo de la Prueba

_Describe the purpose and scope of this test._  
_Describir el propósito y alcance de esta prueba._

---

## 2. Prerequisites / Prerequisitos

- [ ] [System access configured / Acceso al sistema configurado]
- [ ] [Test data created / Datos de prueba creados]
- [ ] [Related transports imported / Transportes relacionados importados]
- [ ] [Partner profiles configured / Perfiles de partner configurados]
- [ ] [User authorizations verified / Autorizaciones de usuario verificadas]

---

## 3. Test Cases / Casos de Prueba

### TC-001: [Test Case Name / Nombre]
**Type / Tipo**: Unit / Integration / E2E  
**Priority / Prioridad**: Critical / High / Medium / Low

| Step / Paso | Action / Acción | Expected Result / Resultado Esperado | Actual Result / Resultado Real | Status / Estado |
|---|---|---|---|---|
| 1 | [Navigate to TCode XX] | [Screen displayed] | | ⬜ |
| 2 | [Enter data: Field=Value] | [Field accepted] | | ⬜ |
| 3 | [Execute / Press Save] | [Document created: XXXXXXXX] | | ⬜ |
| 4 | [Verify in target system] | [Data received correctly] | | ⬜ |

**Test Data / Datos de Prueba**:
| Field / Campo | Value / Valor |
|---|---|
| [Field 1] | [Value 1] |
| [Field 2] | [Value 2] |

---

### TC-002: [Negative Test / Prueba Negativa]
**Type / Tipo**: Unit  
**Priority / Prioridad**: High

| Step / Paso | Action / Acción | Expected Result / Resultado Esperado | Actual Result / Resultado Real | Status / Estado |
|---|---|---|---|---|
| 1 | [Enter invalid data] | [Error message E001 displayed] | | ⬜ |
| 2 | [Submit without required field] | [Validation blocks submission] | | ⬜ |

---

### TC-003: [Integration Test / Prueba de Integración]
**Type / Tipo**: Integration  
**Priority / Prioridad**: Critical

| Step / Paso | Action / Acción | Expected Result / Resultado Esperado | Actual Result / Resultado Real | Status / Estado |
|---|---|---|---|---|
| 1 | [Trigger outbound message] | [Message sent successfully] | | ⬜ |
| 2 | [Check middleware logs] | [Message processed, no errors] | | ⬜ |
| 3 | [Verify target system] | [Data created/updated correctly] | | ⬜ |
| 4 | [Check return status] | [Acknowledgment received] | | ⬜ |

---

## 4. Test Summary / Resumen de Pruebas

| Test Case | Status | Tester | Date / Fecha | Notes / Notas |
|---|---|---|---|---|
| TC-001 | ⬜ Pending | | | |
| TC-002 | ⬜ Pending | | | |
| TC-003 | ⬜ Pending | | | |

**Legend / Leyenda**:
- ⬜ Pending / Pendiente
- ✅ Passed / Aprobado
- ❌ Failed / Fallido
- ⚠️ Blocked / Bloqueado

---

## 5. Defects Found / Defectos Encontrados

| Defect ID | Test Case | Description / Descripción | Severity | Status |
|---|---|---|---|---|
| | | | | |

---

## 6. Sign-off / Aprobación

| Role / Rol | Name / Nombre | Date / Fecha | Signature / Firma |
|---|---|---|---|
| Functional Consultant | | | |
| Developer | | | |
| Business Owner | | | |
