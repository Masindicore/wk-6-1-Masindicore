# Defect Log — Bookstore Web Application

## 📋 Document Overview

**Phase**: 2 — Test Design & Early Execution  
**Date**: November 10-11, 2025  
**Team**: Elite Software Testers  
**Environment**: Windows 11 · Microsoft Edge v121 · Node 18 (local dev server) · Firefox Backup

## 🎯 Testing Scope & Objectives

### In Scope
- Book catalog browsing and search
- Add-to-cart and quantity updates  
- Guest checkout flow
- Paystack test-mode payment success/failure
- Order persistence in localStorage
- Admin route access control

### Out of Scope
- Account creation / Login system
- Real payment processing (beyond test mode)
- Full mobile optimization

### Test Objectives
- Verify catalog search and browsing functionality
- Ensure cart recalculates subtotals accurately
- Validate full guest checkout → payment → confirmation flow
- Test both successful and failed Paystack transactions
- Confirm completed orders persist in localStorage
- Validate admin-only access for /admin route
- Detect critical issues (incorrect totals, duplicate orders, data loss)
- Observe usability and clarity in checkout experience

## 🚨 Critical & High Severity Defects

### 🟥 DEFECT-001 — Payment System Configuration Failure

**Severity**: Critical  
**Priority**: P0 Emergency  
**Component**: Payment  
**Status**: Open

**Description**: Empty .env prevents Paystack initialization, blocking all payment transactions.

**Steps to Reproduce**:
1. Run app with empty .env file
2. Add item to cart → Proceed to Checkout → Payment
3. Click "Pay Now" button

**Expected Result**: Payment popup opens successfully  
**Actual Result**: Alert displays "We could not start this transaction – enter a valid key"

**Impact**: Completely blocks all revenue flows  
**Evidence**: `ELITES SOFTWARE TESTERS/EVIDENCE/We could not start this transactionScreenshot 2025-11-09 231049.png`

### 🟧 DEFECT-002 — Cart Subtotal vs Checkout Total Mismatch

**Severity**: High  
**Priority**: P1 Urgent  
**Component**: Cart/Checkout  
**Status**: Open

**Description**: Cart displays only subtotal while checkout adds hidden tax and shipping charges.

**Steps to Reproduce**:
1. Add books worth R30 to cart
2. Observe cart subtotal = R30.00
3. Proceed to checkout → total = R30 + R4.99 + R2.40

**Expected Result**: Clear display of all charges at cart stage  
**Actual Result**: Subtotal misleads users until checkout page

**Impact**: Potential cart abandonment due to unexpected cost increases  
**Evidence**: `ELITES SOFTWARE TESTERS/EVIDENCE/Total checkoutScreenshot 2025-11-10 234505.png`

### 🟧 DEFECT-003 — Currency Configuration Fallback Issue

**Severity**: High  
**Priority**: P1 Urgent  
**Component**: Payment  
**Status**: Open

**Description**: Paystack hard-codes KES when REACT_APP_CURRENCY=ZAR, causing currency mismatch.

**Steps to Reproduce**:
1. Set currency = ZAR in .env configuration
2. Start checkout process
3. Inspect network call to Paystack

**Expected Result**: Currency parameter sent as ZAR  
**Actual Result**: Defaults to KES regardless of configuration

**Impact**: Payment failures for South African users due to currency mismatch  
**Code Reference**: `src/utils/paystack.js` line 48

### 🟧 BUG-CHECK-003 — Email Format Validation Failure

**Severity**: High  
**Priority**: P1  
**Component**: Checkout Form  
**Status**: Open

**Description**: Invalid email formats and blank fields pass form validation without errors.

**Steps to Reproduce**:
1. Add item to cart and proceed to checkout
2. Enter "invalid-email" or "abc@" in email field
3. Complete other required fields
4. Click Next button

**Expected Result**: Form validation prevents progression with clear error message  
**Actual Result**: Form advances to Review step without validation

**Impact**: Data quality issues, communication failures, order fulfillment problems  
**Evidence**: 
- `ELITES SOFTWARE TESTERS/EVIDENCE/Email shipping Screenshot 2025-11-11 000313.png`
- `ELITES SOFTWARE TESTERS/EVIDENCE/Screenshot 2025-11-05 042755.png`
- `ELITES SOFTWARE TESTERS/EVIDENCE/Screenshot 2025-11-11 082659.png`

### 🟧 BUG-PAY-005 — Unsupported Currency Handling

**Severity**: High  
**Priority**: P1  
**Component**: Payments  
**Status**: Open

**Description**: Poor error handling when unsupported currencies are configured.

**Steps to Reproduce**:
1. Configure unsupported currency in application
2. Attempt to initiate payment process
3. Observe error handling behavior

**Expected Result**: Clear preflight error message with graceful failure handling  
**Actual Result**: Generic error messages or application crashes

**Impact**: Payment failures for international users, poor error communication

## 🎯 Intentional Training Defects

### 🟨 DEFECT-004 — Checkout Form Validation Gaps
**Severity**: Medium  
**Priority**: P2 High  
**Component**: Checkout  
**Status**: Intentional - For Training

**Description**: Comprehensive form validation gaps throughout checkout process.

### 🟨 BUG-PAY-007 — Currency Mismatch
**Severity**: Medium  
**Priority**: P2  
**Status**: Intentional - For Training  
**Impact**: User confusion, potential payment processing issues

### 🟨 BUG-CART-008 — Stock Limit Not Enforced
**Severity**: Medium  
**Priority**: P2  
**Status**: Intentional - For Training  
**Impact**: Potential over-selling beyond inventory capacity

### 🟨 BUG-CAT-007 — Lazy Loading Regression
**Severity**: Medium  
**Priority**: P2  
**Status**: Intentional - For Training  
**Impact**: Performance degradation in catalog browsing

### 🟨 BUG-ADMIN-003 — Sanitization Failure
**Severity**: High  
**Priority**: P1  
**Status**: Intentional - For Training  
**Impact**: Security vulnerability in admin interface

### 🟩 BUG-ORD-004 — CSV Export Decimal Formatting
**Severity**: Low  
**Priority**: P3  
**Status**: Intentional - For Training  
**Impact**: Data analysis complications in exported reports

### 🟩 BUG-NOTIF-003 — Notification Badge Not Updating
**Severity**: Low  
**Priority**: P3  
**Status**: Intentional - For Training  
**Impact**: Minor UX issue in notification system

## 📊 Defect Metrics Summary

### Severity Distribution

| Severity | Count | Priority Range | Status |
|----------|-------|----------------|---------|
| Critical (Sev-1) | 1 | P0 | Open |
| High (Sev-2) | 4 | P1 | Open |
| Medium (Sev-3) | 5 | P2 | Mixed |
| Low (Sev-4) | 2 | P3 | Intentional |
| **Total** | **12** | | |

### Defect Categorization

- **Actual Critical Defects**: 1 (8%)
- **Actual High Severity Defects**: 3 (25%) 
- **Intentional Training Defects**: 7 (58%)
- **Medium/Low Actual Defects**: 1 (8%)

### Resolution Status

- ✅ **Resolved**: 0
- 🔄 **Open (Actual)**: 5 (42%)
- 🎯 **Intentional (Training)**: 7 (58%)

## 🔄 Next Steps & Recommendations

### Immediate Actions (This Week)
1. **Retest payment gateway** after valid Paystack key configuration
2. **Align cart and checkout totals** to prevent user confusion  
3. **Fix currency parameter** in Paystack API utility
4. **Strengthen checkout form validation** (front and back end)
5. **Re-verify compatibility** on both Edge and Firefox browsers

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

