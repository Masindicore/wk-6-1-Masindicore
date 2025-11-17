# 🧾 Completed Manual Test execution with Evidence Report – BookStore Web App  
**Version:** v1.1.0  
**Build:** #2025.11.15-rc1  
**Date:** November 15, 2025  
**Environment:**  
- OS: Windows 11 (23H2)  
- Browser: Chrome 118.0.5993.120  
- Frontend: React 18 (Localhost:3000)  
- Backend: Mock API  
- Database: LocalStorage (Browser)  

**Team:** Elites Software Testers  
 

---

## 📊 Test Summary Dashboard

| Category | Total Tests | ✅ Passed | ⚠️ Partial | ❌ Failed | Coverage |
|-----------|-------------|-----------|-------------|------------|-----------|
| Smoke | 2 | 2 | 0 | 0 | 100% |
| Catalog & Search | 8 | 6 | 0 | 2 | 75% |
| Cart & Quantities | 8 | 6 | 0 | 2 | 75% |
| Checkout Wizard | 10 | 8 | 0 | 2 | 80% |
| Payment & Currency | 8 | 5 | 0 | 3 | 62% |
| Orders & Persistence | 4 | 3 | 0 | 1 | 75% |
| Notifications | 3 | 2 | 0 | 1 | 66% |
| Admin & Security | 3 | 2 | 0 | 1 | 66% |
| A11y / Perf / Compatibility | 4 | 4 | 0 | 0 | 100% |
| **TOTAL** | **50** | **38** | **0** | **12** | **76%** |

---

# 🧪 Test Evidence Details

## 1. Smoke Test Suite (2 TCs)

### ST-001: Application Startup & Navigation  
<img width="1275" height="690" alt="ST-001_app_load" src="https://github.com/user-attachments/assets/03ad6dec-e6d0-4c61-9df5-6341cfb4d687" />
> landing page Loads correctly; navigation functional; redirect to `/catalog`.  
**Metadata:** Christiana Muriuki · ✅ Passed  
**GitHub Issue:** [#ST-001](https://github.com/Iannjeru/Portfolio/issues/12#issue-3628682642)

### ST-002: Core Component Rendering  
<img width="1283" height="675" alt="ST-002_component_render_v1 0" src="https://github.com/user-attachments/assets/46f5c352-e1ae-43ae-af3c-79663ad2399a" />
> Books render correctly; lazy loading verified; responsive.  
**Metadata:** Ian Njeru · ✅ Passed  
**GitHub Issue:** [#https://github.com/Iannjeru/Portfolio/issues/13#issue-3628707193)

---

## 2. Catalog & Search (8 TCs)

### CS-001: Catalog Display  
<img width="1281" height="690" alt="CS-001_catalog_display_v1 0" src="https://github.com/user-attachments/assets/c910207e-f816-44c4-b43a-508188702abc" />

> All books displayed with metadata & correct currency.  
**Metadata:** Christiana Muriuki · ✅ Passed  
**GitHub Issue:** [#CS-001](https://github.com/Iannjeru/Portfolio/issues/14#issue-3628738150)

### CS-002: Search by Title  
<img width="1287" height="684" alt="CS-003_search_title_v1 1" src="https://github.com/user-attachments/assets/64c24926-f51b-4154-b662-0c6b306dfe12" />

**Metadata:** Ian Njeru · ✅ Passed  
**GitHub Issue:** [#CS-002](https://github.com/Iannjeru/Portfolio/issues/15#issue-3628776752)

### CS-003: Search by Author  
 <img width="1305" height="679" alt="CS-003_search_author_v1 1" src="https://github.com/user-attachments/assets/9008303c-77bc-49be-acb4-69b697bb2271" />

**Metadata:** Ronewa Masindi · ✅ Passed  
**GitHub Issue:** [#CS-003](https://github.com/Iannjeru/Portfolio/issues/16#issue-3628807627)

### CS-004: Search by Description  
 <img width="1277" height="690" alt="CS-004_search_desc_v1 1" src="https://github.com/user-attachments/assets/6975b3a2-2ff0-4cac-8226-3039fd8f2d48" />
**Metadata:** Ian Njeru · ✅ Passed  
**GitHub Issue:** [#CS-004](https://github.com/Iannjeru/Portfolio/issues/17#issue-3628865598)

### CS-005: No Results Message  
  <img width="1316" height="670" alt="CS-005_no_results_v1 1" src="https://github.com/user-attachments/assets/ebe84342-dfbc-4c69-becf-b5f3371db99b" />
**Metadata:** Christiana Muriuki · ✅ Passed  
**GitHub Issue:** [#CS-005](https://github.com/Iannjeru/Portfolio/issues/18#issue-3628879136)

### CS-006: Special Character Search  
<img width="1286" height="688" alt="CS-006_special_chars1_v1 1" src="https://github.com/user-attachments/assets/c0a8dfeb-77ee-409e-b867-98ada2c72f47" />
<img width="1294" height="693" alt="CS-006_special_chars2_v1 1" src="https://github.com/user-attachments/assets/d5613b1a-1dde-4cef-bbdf-2d3b770d2abf" />
**Metadata:** Ronewa Masindi · ✅ Passed  
**GitHub Issue:** [#CS-006](https://github.com/Iannjeru/Portfolio/issues/19#issue-3628888574)

### CS-007: Lazy Loading Images  
<img width="1343" height="685" alt="CS-007_lazyload1_v1 1" src="https://github.com/user-attachments/assets/35d3bbed-aaaf-4fb9-8090-a9e8848feaed" />
<img width="1337" height="706" alt="CS-007_lazyload2_v1 1" src="https://github.com/user-attachments/assets/4726c9b8-0b72-46a9-b30d-dd8054485edc" />
**Metadata:** Ian Njeru · ❌ Failed (Intentional Defect)  
**GitHub Issue:** [#CS-007](https://github.com/Iannjeru/Portfolio/issues/20#issue-3628920027)

### CS-008: Search Input Accessibility  
<img width="1324" height="682" alt="CS-008_accessibility_v1 1" src="https://github.com/user-attachments/assets/d5dbcc68-2749-455f-96e3-3f44fde191dc" />
<img width="1339" height="688" alt="CS-008_accessibility2_v1 1" src="https://github.com/user-attachments/assets/431a9afa-ac9d-4422-948e-416d0e377712" />
**Metadata:** Christiana Muriuki · ✅ Passed  
**GitHub Issue:** [#CS-008](https://github.com/Iannjeru/Portfolio/issues/21#issue-3629135961)

---

## 3. Cart & Quantities (8 TCs)

### CART-001: Add Single Item  
<img width="1342" height="687" alt="CART-001_add_item1_v1 1" src="https://github.com/user-attachments/assets/77d22741-7052-4676-8563-8d8b11d0dcb4" />
<img width="1303" height="684" alt="CART-001_add_item2_v1 1" src="https://github.com/user-attachments/assets/d1882f09-132d-4fcd-82d9-9cbe35dda73d" />
**Metadata:** Christiana Muriuki · ✅ Passed  
**GitHub Issue:** [#CART-001](https://github.com/Iannjeru/Portfolio/issues/22#issue-3629175217)

### CART-002: Add Multiple Items  
<img width="1267" height="699" alt="CART-002_add_multiple1_v1 1" src="https://github.com/user-attachments/assets/f86162e7-ee1c-4717-ab60-168e55a24d59" />
<img width="1303" height="688" alt="CART-002_add_multiple2_v1 1" src="https://github.com/user-attachments/assets/8f816b0e-f2db-4c89-993e-821e8efe700a" />
**Metadata:** Ian Njeru · ✅ Passed  
**GitHub Issue:** [#CART-002](https://github.com/Iannjeru/Portfolio/issues/23#issue-3629188609)

### CART-003: Increase Quantity  
<img width="1271" height="689" alt="CART-003_increase1_v1 1" src="https://github.com/user-attachments/assets/2b83689f-62d9-4bcc-8eea-b449d8fc87c7" />
<img width="1267" height="689" alt="CART-003_increase2_v1 1" src="https://github.com/user-attachments/assets/20b49e08-b092-4295-91f5-94905c7ed509" />
**Metadata:** Ronewa Masindi · ✅ Passed  
**GitHub Issue:** [#CART-003](https://github.com/Iannjeru/Portfolio/issues/24#issue-3629203227)

### CART-004: Decrease Quantity  
<img width="1285" height="701" alt="CART-004_decrease1_v1 1" src="https://github.com/user-attachments/assets/0c3dcb75-e4e3-4044-9c1d-74625309aeba" />
<img width="1272" height="696" alt="CART-004_decrease2_v1 1" src="https://github.com/user-attachments/assets/6cd11426-7052-4ffd-914d-4d05398df04f" />
**Metadata:** Ian Njeru · ✅ Passed  
**GitHub Issue:** [#CART-004](https://github.com/Iannjeru/Portfolio/issues/25#issue-3629220087)

### CART-005: Enforce Minimum Quantity  
<img width="1286" height="690" alt="CART-005_min_quantity_v1 1" src="https://github.com/user-attachments/assets/b6c4218b-ba24-4ccf-b37c-c7389e80de91" />
**Metadata:** Christiana Muriuki · ✅ Passed  
**GitHub Issue:** [#CART-005](https://github.com/Iannjeru/Portfolio/issues/26#issue-3629231237)

### CART-006: Remove Item  
<img width="1282" height="694" alt="CART-006_remove1_v1 1" src="https://github.com/user-attachments/assets/f445b3bb-adfa-4942-a12c-55886f8bb69a" />
<img width="1276" height="687" alt="CART-006_remove2_v1 1" src="https://github.com/user-attachments/assets/d8868c44-fcd2-4706-86c3-163080c9d311" />
**Metadata:** Ronewa Masindi · ✅ Passed  
**GitHub Issue:** [#CART-006](https://github.com/Iannjeru/Portfolio/issues/27#issue-3629248259)

### CART-007: Persistence via LocalStorage  
<img width="1357" height="685" alt="CART-007_persistence_v1 1" src="https://github.com/user-attachments/assets/be8ddd3a-8a99-4b47-9a0a-e7119a8d3882" />
<img width="1348" height="695" alt="CART-007_persistence2_v1 1" src="https://github.com/user-attachments/assets/32825dfc-093f-4e5e-b6cf-014b7a070d38" />
<img width="1348" height="695" alt="CART-007_persistence3v1 1" src="https://github.com/user-attachments/assets/4d30b330-c185-453e-a3b2-6d503a00c7ec" />
**Metadata:** Ian Njeru · ✅ Passed  
**GitHub Issue:** [#CART-007](https://github.com/yourrepo/issues/new?title=CART-007+Persistence)

### CART-008: Stock Limit Enforcement  
<img width="1349" height="671" alt="CART-008_stock_limit_v1 1" src="https://github.com/user-attachments/assets/9e9dd193-aa77-485b-8936-8629edc399b1" />
  
**Metadata:** Christiana Muriuki · ❌ Failed (Intentional Defect)  
**GitHub Issue:** [#CART-008](https://github.com/Iannjeru/Portfolio/issues/29#issue-3629311178)

---

## 4. Checkout Wizard (10 TCs)

### CHECKOUT-001: Checkout Navigation  
<img width="1313" height="700" alt="CHECKOUT-001_navigation1_v1 1" src="https://github.com/user-attachments/assets/ad68c1ec-53ed-435f-94a7-47f3e402f439" />
<img width="1285" height="682" alt="CHECKOUT-001_navigation2_v1 1" src="https://github.com/user-attachments/assets/95aed264-26d1-42da-9e86-5ea479472a85" />
<img width="1282" height="691" alt="CHECKOUT-001_navigation3_v1 1" src="https://github.com/user-attachments/assets/6c5ba462-035b-44f4-bc51-b02568075c8c" />
<img width="1277" height="691" alt="CHECKOUT-001_navigation4_v1 1" src="https://github.com/user-attachments/assets/f24eb8a4-c46f-49b7-a35d-5134b85040f1" />
<img width="1300" height="695" alt="CHECKOUT-001_navigation5_v1 1" src="https://github.com/user-attachments/assets/13e7ae6e-1874-4a56-b211-ca91f93802e6" />
**Metadata:** Christiana Muriuki · ✅ Passed  
**GitHub Issue:** [#CHECKOUT-001](https://github.com/Iannjeru/Portfolio/issues/30#issue-3629361008)

### CHECKOUT-002: Shipping Form Validation  
<img width="1326" height="691" alt="CHECKOUT-002_form1_v1 1" src="https://github.com/user-attachments/assets/19adaa09-ae25-4aa6-ae18-882b7b2d4f80" />
<img width="1323" height="705" alt="CHECKOUT-002_form2_v1 1" src="https://github.com/user-attachments/assets/bcf1f46a-3355-4a36-b24e-adeed4bee004" />
**Metadata:** Ian Njeru · ❌ Failed (Invalid Email Not Blocked)  
**GitHub Issue:** [#CHECKOUT-002](https://github.com/Iannjeru/Portfolio/issues/31#issue-3629389744)

<img width="1330" height="689" alt="CHECKOUT-003_after_checkbox_v1 0" src="https://github.com/user-attachments/assets/4355d0c5-1c9a-4009-ba88-317a8d689181" />
<img width="1273" height="671" alt="CHECKOUT-003_before_checkbox_v1 0" src="https://github.com/user-attachments/assets/980a9934-6639-4f2f-bfa9-3c9a9799cad3" />
**Metadata:** Ian Njeru · ❌ Failed (Invalid Email Not Blocked)  
**GitHub Issue:** [#CHECKOUT-003](https://github.com/Iannjeru/Portfolio/issues/32#issue-3629416240)


<img width="1273" height="696" alt="CHECKOUT-004_order_summary" src="https://github.com/user-attachments/assets/b7d1f161-8d35-4edb-b47b-a68533e0cecb" />
**Metadata:** Ian Njeru ·Ensure the order summary displays correct items, prices, quantities, subtotals, shipping, and grand total.
 
**GitHub Issue:** [#CHECKOUT-004](https://github.com/Iannjeru/Portfolio/issues/33#issue-3629437252)


 <img width="1282" height="684" alt="CHECKOUT-005_modal1_open" src="https://github.com/user-attachments/assets/bd40d2c0-ec77-46a8-b01e-da4c2ab1e6f1" />
 <img width="1303" height="668" alt="CHECKOUT-005_modal2_open" src="https://github.com/user-attachments/assets/bc01e03c-8256-4407-b4d3-a440be9299e5" />
**Metadata:** Ian Njeru
 
**GitHub Issue:** [#CHECKOUT-005](https://github.com/Iannjeru/Portfolio/issues/35#issue-3629470910)


## 5. Payment & Currency (8 TCs)

### PAY-001: Payment Modal Loads  
<img width="1326" height="688" alt="PI-002_payment_error_v1 0" src="https://github.com/user-attachments/assets/64c5267d-7f6f-4ce4-bdb6-dd92a29dd030" />
**Metadata:** Christiana Muriuki · ✅ Passed  
**GitHub Issue:** [#PAY-001](https://github.com/yourrepo/issues/new?title=PAY-001+Payment+Modal)



---

## 6. Orders & Persistence (4 TCs)
<img width="1243" height="696" alt="ORD-001_OrderCreation1" src="https://github.com/user-attachments/assets/7d48ec09-9f7d-40e1-b00b-ffbfc02e1c88" />

## 8. Admin & Security (3 TCs)
<img width="1303" height="767" alt="AS-001_route_protection_v1 0" src="https://github.com/user-attachments/assets/9942b942-51f3-454c-9e7d-ed58a86649fb" />

---

### 🧮 Test Artifacts

| Artifact | Description | File |
|-----------|--------------|------|
| Console Logs | Captured for failed & partial tests | `./evidence/logs/failed_tests.log` |
| Network HAR | Payment API trace | `./evidence/network/payment.har` |
| LocalStorage Snapshot | app.cart & app.user | `./evidence/data/localstorage_snapshot.json` |

---

### Observations & Recommendations

  ## 📋 Observations & Recommendations

### 🔴 Critical Issues:
1. **Payment Configuration** - Paystack public key missing in `.env` configuration
2. **Form Validation** - Email validation lacking proper regex/HTML5 validation
3. **Stock Management** - Cart allows exceeding available stock limits

### 🟡 Major Issues:
1. **Lazy Loading** - Image lazy loading defect requires investigation
2. **Billing Address** - Toggle functionality inconsistent
3. **CSV Export** - Formatting issues in order exports

### 🟢 Minor Issues:
1. **Accessibility** - Focus management and ARIA attributes need enhancement
2. **Error Messages** - Some validation errors lack user-friendly messaging

---


## ✅ Verification & Sign-Off

| Name | Role | Signature | Date |
|------|------|------------|------|
| Christiana Muriuki | QA Lead | ✅ Digital Commit Signature | 2025-11-15 |
| Ian Njeru | Test Engineer | ✅ Digital Commit Signature | 2025-11-15 |
| Ronewa Masindi | Test Coordinator | ✅ Digital Commit Signature | 2025-11-15 |

---

## 🎯 Conclusion

**TEST EXECUTION STATUS:** ✅ **COMPLETED**

The test execution for BookStore Web App v1.1.0 has been successfully completed with:
- **50 test cases** executed across 9 functional areas
- **76% overall pass rate** with detailed evidence for each test
- **12 defects** identified and logged in GitHub issue tracker



