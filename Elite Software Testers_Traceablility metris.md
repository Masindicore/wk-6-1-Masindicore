# Bookstore Web Application - Test Report

## 👥 Team: Elite Software Testers
**Date**: November 11, 2025  
**Environment**: Windows 11 · Microsoft Edge v121 · Node 18 · Firefox

## 📊 Test Execution Dashboard

| Metric | Value |
|--------|-------|
| **Total Test Cases** | 50 |
| **Passed** | 41 |
| **Failed** | 9 |
| **Success Rate** | 82% |
| **Intentional Defects Exposed** | 7 |
| **Actual Defects Discovered** | 2 |
| **Requirements Coverage** | 100% |

## 🚨 Defect Summary

### Actual Defects Discovered
1. **Email validation** - Form accepts invalid email formats
2. **Unsupported currency handling** - Poor error handling for invalid currencies

### Intentional Defects Exposed
- Currency mismatch
- CSV export decimal formatting  
- Notification badge not updating
- Stock limit not enforced
- Lazy loading images regression
- Sanitization failure (javascript: allowed)

## 📋 Detailed Test Results

### 📚 1. Catalog & Search (8 Test Cases)
**Results**: 7 Passed, 1 Failed

| TC ID | Priority | Objective | Status |
|-------|----------|-----------|---------|
| TC-CAT-001 | P1 | Search by title | ✅ Passed |
| TC-CAT-002 | P1 | Search by author | ✅ Passed |
| TC-CAT-003 | P1 | Search by description | ✅ Passed |
| TC-CAT-004 | P1 | Clearing search restores catalog | ✅ Passed |
| TC-CAT-005 | P2 | No-results message appears | ✅ Passed |
| TC-CAT-006 | P3 | Special character search | ✅ Passed |
| TC-CAT-007 | P2 | Images lazy-load | ❌ Failed (Intentional) |
| TC-CAT-008 | P2 | Search input A11y | ✅ Passed |

### 🛒 2. Cart & Quantities (8 Test Cases)
**Results**: 7 Passed, 1 Failed

| TC ID | Priority | Objective | Status |
|-------|----------|-----------|---------|
| TC-CART-001 | P1 | Add single item | ✅ Passed |
| TC-CART-002 | P1 | Add multiple items | ✅ Passed |
| TC-CART-003 | P1 | Increase quantity | ✅ Passed |
| TC-CART-004 | P1 | Decrease quantity | ✅ Passed |
| TC-CART-005 | P2 | Enforce min quantity 1 | ✅ Passed |
| TC-CART-006 | P1 | Remove item | ✅ Passed |
| TC-CART-007 | P1 | Persistence via localStorage | ✅ Passed |
| TC-CART-008 | P1 | Stock limit enforcement | ❌ Failed (Intentional) |

### 💳 3. Checkout Wizard (10 Test Cases)
**Results**: 9 Passed, 1 Failed

| TC ID | Priority | Objective | Status |
|-------|----------|-----------|---------|
| TC-CHECK-001 | P1 | Enter checkout flow | ✅ Passed |
| TC-CHECK-002 | P1 | Required fields validation | ✅ Passed |
| TC-CHECK-003 | P1 | Email format validation | ❌ Failed (Actual Defect) |
| TC-CHECK-004 | P2 | Back/Next persistence | ✅ Passed |
| TC-CHECK-005 | P1 | Next disabled if invalid | ✅ Passed |
| TC-CHECK-006 | P1 | Review totals accurate | ✅ Passed |
| TC-CHECK-007 | P2 | Rounding rule correct | ✅ Passed |
| TC-CHECK-008 | P2 | Coupon validation | ✅ Passed |
| TC-CHECK-009 | P2 | Coupon rules respected | ✅ Passed |
| TC-CHECK-010 | P1 | Empty cart blocked | ✅ Passed |

### 💰 4. Payment & Currency (8 Test Cases)
**Results**: 6 Passed, 2 Failed

| TC ID | Priority | Objective | Status |
|-------|----------|-----------|---------|
| TC-PAY-001 | P1 | Payment modal loads | ✅ Passed |
| TC-PAY-002 | P1 | Successful payment | ✅ Passed |
| TC-PAY-003 | P1 | Cancel payment | ✅ Passed |
| TC-PAY-004 | P1 | Offline/error path | ✅ Passed |
| TC-PAY-005 | P1 | Unsupported currency handling | ❌ Failed (Actual Defect) |
| TC-PAY-006 | P1 | Exact minor units | ✅ Passed |
| TC-PAY-007 | P1 | Currency mismatch | ❌ Failed (Intentional) |
| TC-PAY-008 | P2 | Gateway reference shown | ✅ Passed |

### 📦 5. Orders & Persistence (4 Test Cases)
**Results**: 3 Passed, 1 Failed

| TC ID | Priority | Objective | Status |
|-------|----------|-----------|---------|
| TC-ORD-001 | P1 | Order saved post-payment | ✅ Passed |
| TC-ORD-002 | P2 | Order list displays data | ✅ Passed |
| TC-ORD-003 | P2 | Status & audit trail visible | ✅ Passed |
| TC-ORD-004 | P2 | CSV export formatting | ❌ Failed (Intentional) |

### 🔔 6. Notifications (3 Test Cases)
**Results**: 2 Passed, 1 Failed

| TC ID | Priority | Objective | Status |
|-------|----------|-----------|---------|
| TC-NOTIF-001 | P1 | Badge increments | ✅ Passed |
| TC-NOTIF-002 | P2 | Notification history loads | ✅ Passed |
| TC-NOTIF-003 | P2 | Mark-all-read resets badge | ❌ Failed (Intentional) |

### 🛠 7. Admin Access & Security (3 Test Cases)
**Results**: 2 Passed, 1 Failed

| TC ID | Priority | Objective | Status |
|-------|----------|-----------|---------|
| TC-ADMIN-001 | P1 | Unauthorized user blocked | ✅ Passed |
| TC-ADMIN-002 | P1 | Admin role unlocks dashboard | ✅ Passed |
| TC-ADMIN-003 | P1 | Block javascript: links | ❌ Failed (Intentional) |

### ♿⚡ 8. A11y, Performance, Compatibility (6 Test Cases)
**Results**: 6 Passed, 0 Failed

| TC ID | Priority | Objective | Status |
|-------|----------|-----------|---------|
| TC-A11Y-001 | P2 | Focus ring visible | ✅ Passed |
| TC-A11Y-002 | P1 | aria-live for errors | ✅ Passed |
| TC-PERF-001 | P2 | LCP under 2.5s | ✅ Passed |
| TC-COMP-001 | P1 | Chrome compatibility | ✅ Passed |
| TC-COMP-002 | P1 | Firefox compatibility | ✅ Passed |
| TC-COMP-003 | P2 | Mobile responsive | ✅ Passed |

## 🎯 Key Findings

### ✅ Strengths
- **High Priority Coverage**: All P1 test cases passed except for identified defects
- **Core Functionality**: Basic shopping cart, payment, and order management working correctly
- **Cross-browser Compatibility**: Consistent performance across Chrome and Firefox
- **Accessibility**: Good screen reader support and focus management

### ❌ Critical Issues Requiring Attention
1. **Email Validation** - Security and data quality concern
2. **Currency Handling** - Impacts international users and payment processing

## 🔄 Recommendations

### Immediate Actions
1. **Fix email validation** in checkout form
2. **Improve currency error handling** and user feedback
3. **Address the intentional defects** as training exercises

### Quality Improvements
- Enhance form validation throughout application
- Strengthen error handling for payment failures
- Implement comprehensive input sanitization

---


