# Updated Defect Log — Bookstore Web Application

## 📋 Document Overview

**Phase**: 3 — Test Execution & Defect Tracking  
**Date**: November 15, 2025  
**Team**: Elite Software Testers  
**Environment**: Windows 11 · Chrome 118 · React 18 · Mock API · LocalStorage

---

## 🚨 Critical & High Severity Defects

### 🟥 CRIT-001 — Payment System Configuration Failure

**Severity**: Critical  
**Priority**: P0 (Emergency)  
**Component**: Payment Integration  
**Status**: Open  
**Test Case**: PAY Series

**Description**: Empty .env configuration prevents Paystack initialization, completely blocking all payment transactions.

**Steps to Reproduce**:
1. Run application with empty .env file
2. Add items to cart and proceed to checkout
3. Click "Pay Now" button

**Expected Result**: Payment modal opens successfully  
**Actual Result**: Alert displays "We could not start this transaction – enter a valid key"

**Impact**: Complete revenue blockage - no payments can be processed  
**Evidence**: <img width="1359" height="648" alt="We could not start this transactionScreenshot 2025-11-09 231049" src="https://github.com/user-attachments/assets/9c98403a-91ed-4574-8c57-f8cc965af1af" />


---

### 🟥 CRIT-002 — Currency Configuration Mismatch

**Severity**: Critical  
**Priority**: P0 (Emergency)  
**Component**: Payment Configuration  
**Status**: Open  
**Test Case**: PAY-003

**Description**: Paystack hard-codes KES when REACT_APP_CURRENCY=ZAR, causing currency conflicts.

**Steps to Reproduce**:
1. Set currency = ZAR in .env configuration
2. Initiate checkout process
3. Inspect network calls to Paystack API

**Expected Result**: Currency parameter sent as ZAR  
**Actual Result**: Defaults to KES regardless of configuration

**Impact**: Payment failures for international users, transaction declines  
**Code Reference**: `src/utils/paystack.js` line 48

---

### 🟧 HIGH-001 — Cart vs Checkout Total Mismatch

**Severity**: High  
**Priority**: P1 (Urgent)  
**Component**: Cart/Checkout  
**Status**: Open  
**Test Case**: CHECKOUT-004

**Description**: Cart displays only subtotal while checkout adds hidden tax and shipping charges without user awareness.

**Steps to Reproduce**:
1. Add books worth R30 to cart
2. Observe cart subtotal = R30.00
3. Proceed to checkout → total = R30 + R4.99 + R2.40

**Expected Result**: Clear display of all charges at cart stage  
**Actual Result**: Subtotal misleads users until final checkout page

**Impact**: High cart abandonment due to unexpected cost increases  
**Evidence**: <img width="1365" height="660" alt="Total checkoutScreenshot 2025-11-10 234505" src="https://github.com/user-attachments/assets/039439ef-1c8c-4f33-8281-ab0b1cc06fd1" />


---

### 🟧 HIGH-002 — Email Validation Failure

**Severity**: High  
**Priority**: P1 (Urgent)  
**Component**: Checkout Form Validation  
**Status**: Open  
**Test Case**: CHECKOUT-002

**Description**: Invalid email formats and blank fields pass form validation without errors.

**Steps to Reproduce**:
1. Add item to cart and proceed to checkout
2. Enter "invalid-email" or "abc@" in email field
3. Complete other required fields
4. Click Next button

**Expected Result**: Form validation prevents progression with clear error message  
**Actual Result**: Form advances to Review step without validation

**Impact**: Data quality issues, communication failures, order fulfillment problems  
**Evidence**: <img width="1330" height="689" alt="CHECKOUT-003_after_checkbox_v1 0" src="https://github.com/user-attachments/assets/a7e9e0dd-9852-4f19-b140-1580d5decd0f" />


---

### 🟧 HIGH-003 — Unsupported Currency Handling

**Severity**: High  
**Priority**: P1 (Urgent)  
**Component**: Payments  
**Status**: Open  
**Test Case**: PAY-005

**Description**: Poor error handling when unsupported currencies are configured.

**Steps to Reproduce**:
1. Configure unsupported currency in application
2. Attempt to initiate payment process
3. Observe error handling behavior

**Expected Result**: Clear preflight error message with graceful failure handling  
**Actual Result**: Generic error messages or application crashes

**Impact**: Payment failures for international users, poor error communication

---

## ⚠️ Medium Severity Defects

### 🟨 MED-001 — Billing Address Toggle Inconsistency

**Severity**: Medium  
**Priority**: P2 (High)  
**Component**: Checkout Wizard  
**Status**: Open  
**Test Case**: CHECKOUT-003

**Description**: Billing address toggle functionality inconsistent between form states.

**Steps to Reproduce**:
1. Proceed to checkout shipping form
2. Toggle "Same as shipping" checkbox
3. Observe billing address field behavior

**Expected Result**: Consistent showing/hiding of billing address fields  
**Actual Result**: Inconsistent behavior across form steps

**Impact**: User confusion, potential billing address errors  
**Evidence**: <img width="1330" height="689" alt="CHECKOUT-003_after_checkbox_v1 0" src="https://github.com/user-attachments/assets/baa05440-a97c-43da-85b5-caa6f04db0aa" />



---

### 🟨 MED-002 — Stock Limit Enforcement Failure

**Severity**: Medium  
**Priority**: P2 (High)  
**Component**: Cart Management  
**Status**: Intentional - Training  
**Test Case**: CART-008

**Description**: Cart allows adding items beyond available stock limits.

**Impact**: Potential over-selling beyond inventory capacity  
**Evidence**: <img width="1349" height="671" alt="CART-008_stock_limit_v1 1" src="https://github.com/user-attachments/assets/308b156c-cc74-460d-b779-9c61bfd0485b" />


---

### 🟨 MED-003 — Lazy Loading Regression

**Severity**: Medium  
**Priority**: P2 (High)  
**Component**: Catalog Images  
**Status**: Intentional - Training  
**Test Case**: CS-007

**Description**: Image lazy loading functionality degraded in current release.

**Impact**: Performance degradation in catalog browsing  
**Evidence**:<img width="1343" height="685" alt="CS-007_lazyload1_v1 1" src="https://github.com/user-attachments/assets/24fb2cf6-4e92-4de5-94cc-2fc83e3fb79b" />


---

### 🟨 MED-004 — Admin Sanitization Failure

**Severity**: Medium  
**Priority**: P2 (High)  
**Component**: Admin Security  
**Status**: Intentional - Training  
**Test Case**: ADMIN-003

**Description**: Input sanitization vulnerability in admin interface.

**Impact**: Security vulnerability potential  
**Evidence**: <img width="1303" height="767" alt="AS-001_route_protection_v1 0" src="https://github.com/user-attachments/assets/36775b03-bf95-4ab1-b39d-608ba8a129ee" />


---

## 🔵 Low Severity Defects

### 🟩 LOW-001 — CSV Export Formatting

**Severity**: Low  
**Priority**: P3 (Medium)  
**Component**: Order Management  
**Status**: Intentional - Training  
**Test Case**: ORD-004

**Description**: Decimal formatting issues in CSV order exports.

**Impact**: Data analysis complications in exported reports

---

### 🟩 LOW-002 — Notification Badge Update Failure

**Severity**: Low  
**Priority**: P3 (Medium)  
**Component**: Notifications  
**Status**: Intentional - Training  
**Test Case**: NOTIF-003

**Description**: Notification badge doesn't update in real-time.

**Impact**: Minor UX issue in notification system

---

### 🟩 LOW-003 — Form Validation Gaps

**Severity**: Low  
**Priority**: P3 (Medium)  
**Component**: Checkout Forms  
**Status**: Intentional - Training  
**Test Case**: CHECKOUT Series

**Description**: Comprehensive form validation gaps throughout checkout process.

**Impact**: Data quality and user experience degradation

---

## 📊 Defect Metrics Summary

### Severity Distribution

| Severity | Count | Priority | Status |
|----------|-------|----------|---------|
| Critical | 2 | P0 | Open |
| High | 3 | P1 | Open |
| Medium | 4 | P2 | Mixed |
| Low | 3 | P3 | Intentional |
| **Total** | **12** | | |

### Defect Categorization

- **Actual Critical Defects**: 2 (17%)
- **Actual High Severity Defects**: 3 (25%) 
- **Intentional Training Defects**: 7 (58%)

### Resolution Status

- ✅ **Resolved**: 0
- 🔴 **Open (Critical/High)**: 5 (42%)
- 🟡 **Open (Medium)**: 0
- 🎯 **Intentional (Training)**: 7 (58%)

---

## 🔄 Next Steps & Recommendations

### Immediate Actions (P0/P1 - This Week)
1. **Configure Paystack keys** in .env file - CRIT-001
2. **Fix currency parameter mapping** - CRIT-002
3. **Align cart/checkout total display** - HIGH-001
4. **Implement email validation** - HIGH-002
5. **Improve currency error handling** - HIGH-003

### Quality Improvements
- Implement comprehensive form validation suite
- Enhance error handling for payment failures
- Improve charge transparency throughout user journey
- Add currency configuration validation
- Strengthen localStorage data persistence testing

### Training Focus Areas
The intentional defects provide excellent training opportunities for:
- Payment gateway integration testing
- Form validation and user input sanitization  
- Currency and localization testing
- Security vulnerability identification
- Performance regression detection

---

## ✅ Verification

| Name | Role | Status | Date |
|------|------|--------|------|
| Christiana Muriuki | QA Lead | Reviewed | 2025-11-15 |
| Ian Njeru | Test Engineer | Verified | 2025-11-15 |
| Ronewa Masindi | Coordinator | Confirmed | 2025-11-15 |

