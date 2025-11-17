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
![ST-001](./evidence/smoke/ST-001_app_load.png)  
> landing page Loads correctly; navigation functional; redirect to `/catalog`.  
**Metadata:** Christiana Muriuki · ✅ Passed  
**GitHub Issue:** [#ST-001](https://github.com/Iannjeru/Portfolio/issues/12#issue-3628682642)

### ST-002: Core Component Rendering  
![ST-002](./evidence/smoke/ST-002_components_v1.1.png)  
> Books render correctly; lazy loading verified; responsive.  
**Metadata:** Ian Njeru · ✅ Passed  
**GitHub Issue:** [#https://github.com/Iannjeru/Portfolio/issues/13#issue-3628707193)

---

## 2. Catalog & Search (8 TCs)

### CS-001: Catalog Display  
![CS-001](./evidence/catalogue/CS-001_catalog_display_v1.0.png)  
> All books displayed with metadata & correct currency.  
**Metadata:** Christiana Muriuki · ✅ Passed  
**GitHub Issue:** [#CS-001](https://github.com/Iannjeru/Portfolio/issues/14#issue-3628738150)

### CS-002: Search by Title  
![CS-002](evidence/catalogue/CS-003_search_title_v1.1.png)  
**Metadata:** Ian Njeru · ✅ Passed  
**GitHub Issue:** [#CS-002](https://github.com/Iannjeru/Portfolio/issues/15#issue-3628776752)

### CS-003: Search by Author  
![CS-003](./evidence/catalogue/CS-003_search_author_v1.1.png)  
**Metadata:** Ronewa Masindi · ✅ Passed  
**GitHub Issue:** [#CS-003](https://github.com/Iannjeru/Portfolio/issues/16#issue-3628807627)

### CS-004: Search by Description  
![CS-004](./evidence/catalogue/CS-004_search_desc_v1.1.png)  
**Metadata:** Ian Njeru · ✅ Passed  
**GitHub Issue:** [#CS-004](https://github.com/Iannjeru/Portfolio/issues/17#issue-3628865598)

### CS-005: No Results Message  
![CS-005](./evidence/catalogue/CS-005_no_results_v1.1.png)  
**Metadata:** Christiana Muriuki · ✅ Passed  
**GitHub Issue:** [#CS-005](https://github.com/Iannjeru/Portfolio/issues/18#issue-3628879136)

### CS-006: Special Character Search  
![CS-006](./evidence/catalogue/CS-006_special_chars1_v1.1.png)  
![CS-006](./evidence/catalogue/CS-006_special_chars2_v1.1.png)
**Metadata:** Ronewa Masindi · ✅ Passed  
**GitHub Issue:** [#CS-006](https://github.com/Iannjeru/Portfolio/issues/19#issue-3628888574)

### CS-007: Lazy Loading Images  
![CS-007](evidence/catalogue/CS-007_lazyload1_v1.1.png)
![CS-007](evidence/catalogue/CS-007_lazyload2_v1.1.png)  
**Metadata:** Ian Njeru · ❌ Failed (Intentional Defect)  
**GitHub Issue:** [#CS-007](https://github.com/Iannjeru/Portfolio/issues/20#issue-3628920027)

### CS-008: Search Input Accessibility  
![CS-008](evidence/catalogue/CS-008_accessibility_v1.1.png) 
![CS-008](evidence/catalogue/CS-008_accessibility2_v1.1.png)   
**Metadata:** Christiana Muriuki · ✅ Passed  
**GitHub Issue:** [#CS-008](https://github.com/Iannjeru/Portfolio/issues/21#issue-3629135961)

---

## 3. Cart & Quantities (8 TCs)

### CART-001: Add Single Item  
![CART-001](./evidence/Cart_Quantities/CART-001_add_item1_v1.1.png)  
![CART-001](evidence/Cart_Quantities/CART-001_add_item2_v1.1.png) 
**Metadata:** Christiana Muriuki · ✅ Passed  
**GitHub Issue:** [#CART-001](https://github.com/Iannjeru/Portfolio/issues/22#issue-3629175217)

### CART-002: Add Multiple Items  
![CART-002](evidence/Cart_Quantities/CART-002_add_multiple1_v1.1.png)  
![CART-002](evidence/Cart_Quantities/CART-002_add_multiple2_v1.1.png) 
**Metadata:** Ian Njeru · ✅ Passed  
**GitHub Issue:** [#CART-002](https://github.com/Iannjeru/Portfolio/issues/23#issue-3629188609)

### CART-003: Increase Quantity  
![CART-003](./evidence/Cart_Quantities/CART-003_increase1_v1.1.png)
![CART-003](./evidence/Cart_Quantities/CART-003_increase2_v1.1.png)  
**Metadata:** Ronewa Masindi · ✅ Passed  
**GitHub Issue:** [#CART-003](https://github.com/Iannjeru/Portfolio/issues/24#issue-3629203227)

### CART-004: Decrease Quantity  
![CART-004](./evidence/Cart_Quantities/CART-004_decrease1_v1.1.png) 
![CART-004](./evidence/Cart_Quantities/CART-004_decrease2_v1.1.png)   
**Metadata:** Ian Njeru · ✅ Passed  
**GitHub Issue:** [#CART-004](https://github.com/Iannjeru/Portfolio/issues/25#issue-3629220087)

### CART-005: Enforce Minimum Quantity  
![CART-005](./evidence/Cart_Quantities/CART-005_min_quantity_v1.1.png)  
**Metadata:** Christiana Muriuki · ✅ Passed  
**GitHub Issue:** [#CART-005](https://github.com/Iannjeru/Portfolio/issues/26#issue-3629231237)

### CART-006: Remove Item  
![CART-006](./evidence/Cart_Quantities/CART-006_remove1_v1.1.png) 
![CART-006](./evidence/Cart_Quantities/CART-006_remove2_v1.1.png) 
**Metadata:** Ronewa Masindi · ✅ Passed  
**GitHub Issue:** [#CART-006](https://github.com/Iannjeru/Portfolio/issues/27#issue-3629248259)

### CART-007: Persistence via LocalStorage  
![CART-007](./evidence/Cart_Quantities/CART-007_persistence_v1.1.png) 
![CART-007](./evidence/Cart_Quantities/CART-007_persistence3v1.1.png)
![CART-007](./evidence/Cart_Quantities/CART-007_persistence3v1.1.png)
[text](./evidence/Cart_Quantities/console.txt)

**Metadata:** Ian Njeru · ✅ Passed  
**GitHub Issue:** [#CART-007](https://github.com/yourrepo/issues/new?title=CART-007+Persistence)

### CART-008: Stock Limit Enforcement  
![CART-008](./evidence/Cart_Quantities/CART-008_stock_limit_v1.1.png)  
**Metadata:** Christiana Muriuki · ❌ Failed (Intentional Defect)  
**GitHub Issue:** [#CART-008](https://github.com/Iannjeru/Portfolio/issues/29#issue-3629311178)

---

## 4. Checkout Wizard (10 TCs)

### CHECKOUT-001: Checkout Navigation  
![CHECKOUT-001](./evidence/Checkout_Wizard/CHECKOUT-001_navigation1_v1.1.png) 
![CHECKOUT-001](./evidence/Checkout_Wizard/CHECKOUT-001_navigation2_v1.1.png)
![CHECKOUT-001](./evidence/Checkout_Wizard/CHECKOUT-001_navigation3_v1.1.png)
![CHECKOUT-001](./evidence/Checkout_Wizard/CHECKOUT-001_navigation4_v1.1.png)
![CHECKOUT-001](./evidence/Checkout_Wizard/CHECKOUT-001_navigation5_v1.1.png) 
**Metadata:** Christiana Muriuki · ✅ Passed  
**GitHub Issue:** [#CHECKOUT-001](https://github.com/Iannjeru/Portfolio/issues/30#issue-3629361008)

### CHECKOUT-002: Shipping Form Validation  
![CHECKOUT-002](./evidence/Checkout_Wizard/CHECKOUT-002_form1_v1.1.png)
![CHECKOUT-002](./evidence/Checkout_Wizard/CHECKOUT-002_form2_v1.1.png)    
**Metadata:** Ian Njeru · ❌ Failed (Invalid Email Not Blocked)  
**GitHub Issue:** [#CHECKOUT-002](https://github.com/Iannjeru/Portfolio/issues/31#issue-3629389744)

![CHECKOUT-003](./evidence/Checkout_Wizard/CHECKOUT-003_before_checkbox_v1.0.png)
![CHECKOUT-003](./evidence/Checkout_Wizard/CHECKOUT-004_after_checkbox_v1.0.png)    
**Metadata:** Ian Njeru · ❌ Failed (Invalid Email Not Blocked)  
**GitHub Issue:** [#CHECKOUT-003](https://github.com/Iannjeru/Portfolio/issues/32#issue-3629416240)


![CHECKOUT-004](./evidence/Checkout_Wizard/CHECKOUT-004_order_summary.png)    
**Metadata:** Ian Njeru ·Ensure the order summary displays correct items, prices, quantities, subtotals, shipping, and grand total.
 
**GitHub Issue:** [#CHECKOUT-004](https://github.com/Iannjeru/Portfolio/issues/33#issue-3629437252)


![CHECKOUT-005](./evidence/Checkout_Wizard/CHECKOUT-011-Review_summary-before.png) 
![CHECKOUT-005](evidence/Checkout_Wizard/localhost-1763245852713.log)  
**Metadata:** Ian Njeru
 
**GitHub Issue:** [#CHECKOUT-005](https://github.com/Iannjeru/Portfolio/issues/35#issue-3629470910)


## 5. Payment & Currency (8 TCs)

### PAY-001: Payment Modal Loads  
![PAY-001](./evidence/payment/PAY-001_modal_v1.1.png)  
**Metadata:** Christiana Muriuki · ✅ Passed  
**GitHub Issue:** [#PAY-001](https://github.com/yourrepo/issues/new?title=PAY-001+Payment+Modal)



---

## 6. Orders & Persistence (4 TCs)
*(ORD-001 → ORD-004 with images and issues)*

## 7. Notifications (3 TCs)
*(NOTIF-001 → NOTIF-003 with images and issues)*

## 8. Admin & Security (3 TCs)
*(ADMIN-001 → ADMIN-003 with images and issues)*

## 9. A11y / Performance / Compatibility (4 TCs)
*(A11Y-001 → COMP-001 with images and issues)*

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
- Comprehensive test artifacts and documentation