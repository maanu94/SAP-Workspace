# SAP Reference Cheat Sheet / Hoja de Referencia Rápida SAP

> Quick reference for common TCodes, BAPIs, APIs, and message types.
> Referencia rápida para TCodes, BAPIs, APIs y tipos de mensaje comunes.

---

## TCodes by Module / TCodes por Módulo

### MM (Materials Management)
| TCode | Description / Descripción |
|-------|--------------------------|
| ME21N | Create Purchase Order |
| ME22N | Change Purchase Order |
| ME23N | Display Purchase Order |
| ME51N | Create Purchase Requisition |
| MIGO  | Goods Movement |
| MIRO  | Invoice Verification |
| MM01  | Create Material |
| MM02  | Change Material |
| MRP   | MRP Run (MD01/MD02) |

### FI (Financial Accounting)
| TCode | Description / Descripción |
|-------|--------------------------|
| FB01  | Post Document |
| FB03  | Display Document |
| F110  | Automatic Payment Run |
| FBL1N | Vendor Line Items |
| FBL5N | Customer Line Items |
| FS00  | GL Account Master |
| OB52  | Open/Close Posting Periods |

### SD (Sales & Distribution)
| TCode | Description / Descripción |
|-------|--------------------------|
| VA01  | Create Sales Order |
| VL01N | Create Delivery |
| VF01  | Create Billing Document |
| VK11  | Create Condition Record |
| VOV8  | Define Item Categories |

### Basis / Cross-Module
| TCode | Description / Descripción |
|-------|--------------------------|
| SM37  | Job Overview |
| SM58  | Transactional RFC |
| ST22  | ABAP Dumps |
| SE80  | Object Navigator |
| SE38  | ABAP Editor |
| SU01  | User Maintenance |
| STMS  | Transport Management |
| WE19  | IDoc Test Tool |
| WE20  | Partner Profiles |
| BD64  | Distribution Model |

---

## Common BAPIs / BAPIs Comunes

| BAPI | Module | Description / Descripción |
|------|--------|--------------------------|
| BAPI_PO_CREATE1 | MM | Create Purchase Order |
| BAPI_PO_CHANGE | MM | Change Purchase Order |
| BAPI_PR_CREATE | MM | Create Purchase Requisition |
| BAPI_GOODSMVT_CREATE | MM | Post Goods Movement |
| BAPI_INCOMINGINVOICE_CREATE | MM | Create Invoice |
| BAPI_SALESORDER_CREATEFROMDAT2 | SD | Create Sales Order |
| BAPI_ACC_DOCUMENT_POST | FI | Post Accounting Document |
| BAPI_USER_GET_DETAIL | Basis | Get User Details |
| BAPI_MATERIAL_SAVEDATA | MM | Create/Change Material |

---

## cXML Message Types (Ariba)

| Message Type | Direction | Description / Descripción |
|-------------|-----------|--------------------------|
| OrderRequest | Buyer → Supplier | Purchase Order |
| OrderConfirmation | Supplier → Buyer | PO Acknowledgment |
| ShipNoticeRequest | Supplier → Buyer | ASN (Adv Shipping Notice) |
| InvoiceDetailRequest | Supplier → Buyer | Invoice |
| ServiceEntryRequest | Supplier → Buyer | Service Entry Sheet |
| StatusUpdateRequest | Either | Status Update |
| CatalogUploadRequest | Supplier → Network | Catalog Upload |

---

## Ariba API Endpoints

| API | Base URL | Description / Descripción |
|-----|----------|--------------------------|
| Procurement | `/api/procurement/v2/` | Purchase Orders, Receipts |
| Sourcing | `/api/sourcing/v2/` | Events, RFx, Bids |
| Contracts | `/api/contracts/v1/` | Contract Workspaces |
| Supplier | `/api/supplier/v2/` | Supplier Registration, SLP |
| Catalog | `/api/catalog/v1/` | Catalog Management |
| Analytics | `/api/analytics/v2/` | Reports, Dashboards |

> ⚠️ Base URLs vary by data center (US, EU, APAC). Always verify in Ariba Admin.

---

## SAP BTP & Integration Patterns / Patrones de Integración

### 1. Integration Choice Matrix
| Factor | IDoc/ALE | OData / API | Enterprise Messaging |
|---|---|---|---|
| **Latency** | Medium (Batch/Queue) | Low (Real-time) | Low (Async Event) |
| **Volume** | High (Bulk) | Medium | Medium/High |
| **Idempotency** | Built-in (TID) | Required in Code | Required in Code |

### 2. BTP Architecture
- **iFlows**: Use standard naming `[System]_[Context]_[Action]`.
- **Exception Subprocess**: Local process for retry logic.

---

## Fiori & UI/UX Standards / Estándares Fiori y UI/UX

### 1. Design Tokens (Antigravity Look)
- **Glassmorphism**: `backdrop-filter: blur(12px)`.
- **Spatial Depth**: Use `elevation` and `z-axis` layering.
- **Transitions**: Smooth easing (`0.3s ease-out`).

### 2. Common Annotations (OData V4)
- `@UI.LineItem`: Column definitions.
- `@UI.SelectionField`: Filter bar fields.
- `@UI.HeaderInfo`: Object page header title/description.

---

## IDoc Message Types (Common P2P)

| Message Type | IDoc Type | Direction | Description / Descripción |
|-------------|-----------|-----------|--------------------------|
| ORDERS | ORDERS05 | Outbound | Purchase Order to Vendor |
| ORDRSP | ORDRSP05 | Inbound | Order Confirmation |
| DESADV | DELVRY07 | Inbound | ASN / Delivery Notification |
| INVOIC | INVOIC02 | Inbound | Invoice |
| MATMAS | MATMAS05 | Outbound | Material Master |
| DEBMAS | DEBMAS07 | Outbound | Customer Master |
| CREMAS | CREMAS07 | Outbound | Vendor Master |
| WMMBXY | WMMBID02 | Internal | Goods Movement (WM) |

---

## Useful SAP Notes (Reference)

> ⚠️ Always verify note numbers on [SAP ONE Support Launchpad](https://launchpad.support.sap.com)

| Note | Topic |
|------|-------|
| 2267308 | CIG Configuration Guide |
| 2331234 | Ariba Network cXML Integration |
| 1953429 | BTP Integration Suite FAQ |
| 2196228 | S/4HANA Simplification List |
