# Integration Mapping Document / Documento de Mapeo de Integración

## Document Info / Información del Documento

| Field / Campo | Value / Valor |
|---------------|---------------|
| **Title / Título** | [Mapping Title] |
| **Client / Cliente** | [Client Name] |
| **Integration / Integración** | [System A ↔ System B] |
| **Protocol / Protocolo** | [IDoc / cXML / OData / REST / SOAP] |
| **Author / Autor** | [Name] |
| **Date / Fecha** | YYYY-MM-DD |
| **Version / Versión** | 1.0 |

---

## 1. Integration Overview / Resumen de la Integración

| Field / Campo | Value / Valor |
|---------------|---------------|
| **Source System / Sistema Origen** | [e.g., S/4HANA] |
| **Target System / Sistema Destino** | [e.g., Ariba Network] |
| **Direction / Dirección** | Inbound / Outbound / Bidirectional |
| **Message Type / Tipo de Mensaje** | [e.g., ORDERS, cXML OrderRequest] |
| **Frequency / Frecuencia** | Real-time / Batch (schedule) |
| **Middleware** | [BTP IS / SAP PO / CIG / Direct] |

---

## 2. Message Flow / Flujo del Mensaje

```
[Source System]  →  [Middleware]  →  [Target System]
     ↓                   ↓                 ↓
[Outbound Proxy]   [Mapping/iFlow]   [Inbound Adapter]
[IDoc/RFC/API]     [Transform]       [cXML/API/IDoc]
```

---

## 3. Field Mapping / Mapeo de Campos

### Header / Cabecera

| # | Source Field / Campo Origen | Source Path | Target Field / Campo Destino | Target Path | Rule / Regla | Notes / Notas |
|---|---|---|---|---|---|---|
| 1 | [PO Number] | ORDERS05/E1EDK01/BELNR | [orderID] | OrderRequestHeader/@orderID | Direct / Directo | |
| 2 | [Date] | ORDERS05/E1EDK03/DATUM | [orderDate] | OrderRequestHeader/@orderDate | Format: YYYYMMDD → ISO | |
| 3 | | | | | | |

### Line Items / Posiciones

| # | Source Field / Campo Origen | Source Path | Target Field / Campo Destino | Target Path | Rule / Regla | Notes / Notas |
|---|---|---|---|---|---|---|
| 1 | [Material] | E1EDP01/MATNR | [supplierPartID] | ItemOut/ItemID/@supplierPartID | Direct | |
| 2 | [Quantity] | E1EDP01/MENGE | [quantity] | ItemOut/ItemDetail/@quantity | Direct | |
| 3 | | | | | | |

---

## 4. Value Mapping / Mapeo de Valores

| Source Value / Valor Origen | Target Value / Valor Destino | Context / Contexto |
|---|---|---|
| [SAP Unit "ST"] | [cXML "EA"] | Unit of Measure |
| [SAP Currency "USD"] | ["USD"] | Currency Code |
| | | |

---

## 5. Transformation Rules / Reglas de Transformación

| Rule ID | Description / Descripción | Logic / Lógica |
|---|---|---|
| TR-001 | [Date format conversion] | YYYYMMDD → YYYY-MM-DDT00:00:00+00:00 |
| TR-002 | [Leading zeros] | Remove leading zeros from material number |
| TR-003 | [Concatenation] | [Field A] + "-" + [Field B] |

---

## 6. Error Scenarios / Escenarios de Error

| Scenario / Escenario | Error Code | Handling / Manejo | Retry |
|---|---|---|---|
| Target system unavailable | CONN_ERR | Queue for retry | Yes, 3x |
| Invalid field value | MAP_ERR | Log and alert | No |
| Duplicate message | DUP_ERR | Ignore (idempotent) | No |

---

## 7. Testing Data / Datos de Prueba

| Test Case | Source Data | Expected Target | Notes / Notas |
|---|---|---|---|
| TC-001 | [Sample PO 4500000001] | [OrderRequest with mapped fields] | Happy path |
| TC-002 | [PO with special chars] | [Proper encoding] | Edge case |

---

## 8. References / Referencias
- SAP Note: [Number]
- cXML Schema: [URL or version]
- IDoc documentation: [TCode WE60 for segment docs]
