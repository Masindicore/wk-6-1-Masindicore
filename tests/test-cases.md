# 📋 Test Cases & Checklists (`tests/test-cases.md`)

**Team**: Elite Software Testers  
**Submission Date**: November 11, 2025  

---

## 🎯 Test Execution Dashboard

| Metric | Value |
|--------|-------|
| Total Test Cases | 50 |
| Passed | 41 |
| Failed | 9 |
| Intentional Defects Exposed | 7 |
| Actual Defects Discovered | 2 |
| Requirements Coverage | 100 % |

## 🚨 Failure Breakdown
- Currency mismatch (intentional)  
- CSV export decimal formatting  
- Notification badge not updating  
- Stock limit not enforced  
- Lazy loading images regression  
- Sanitization failure (javascript: allowed)  
- Email validation (actual defect)  
- Unsupported currency handling (actual defect)

---

## 📚 1. Catalog & Search (8 Test Cases)

| TC ID | FR Code | Title | Pre-conditions | Steps | Expected Result | Post-conditions | Priority | Status |
|--------|---------|-------|----------------|-------|-----------------|-----------------|----------|--------|
| TC-CAT-001 | FR-O01 | Search by title | App running on catalog | 1. Type “1984” in search bar2. Press Enter | Book list filters to show only “1984” titles | Search query persisted in URL | P1 | ✅ Passed |
| TC-CAT-002 | FR-O01 | Search by author | App running on catalog | 1. Type “harper lee”;2. Press Enter | Author matches displayed | harper lee's book id displayed | P1 | ✅ Passed |
| TC-CAT-003 | FR-O01 | Search by description | App running on catalog | 1. Type “A powerful story of racial injustice”2. Press Enter | Keyword match displayed | The book with this descriptions is shown 'A powerful story of racial injustice' | P1 | ✅ Passed |
| TC-CAT-004 | FR-O01 | Clearing search restores catalog | Search results shown | 1. Delete query2. Press Enter | Full catalog restored | Full catalog restored | P1 | ✅ Passed |
| TC-CAT-005 | FR-O01 | No-results message | App running on catalog | 1. Type “7789”2. Press Enter | “No books found” banner visible | No books found matching your search | P2 | ✅ Passed |
| TC-CAT-006 | FR-O01 | Special character search | App running on catalog | 1. Type “@#$%”2. Press Enter | No crash, graceful empty list | No books found matching your search | P3 | ✅ Passed |
| TC-CAT-007 | FR-X02 | Images lazy-load | App running on catalog | 1. Scroll down 1500 px | Images load only when in viewport | Lazy flag set | P2 | ❌ Failed (Intentional) |
| TC-CAT-008 | FR-X01 | Search input A11y | App running on catalog | 1. Press Tab to search box2. Press ESC | Focus ring visible, ESC clears query | Focus returns to body | P2 | ✅ Passed |

---

## 🛒 2. Cart & Quantities (8 Test Cases)

| TC ID | FR Code | Title | Pre-conditions | Steps | Expected Result | Post-conditions | Priority | Status |
|--------|---------|-------|----------------|-------|-----------------|-----------------|----------|--------|
| TC-CART-001 | FR-O01 | Add single item | Catalog visible | 1. Click “Buy Now” on first book | Cart badge = 1, item listed | Item stored in localStorage | P1 | ✅ Passed |
| TC-CART-002 | FR-O01 | Add multiple items | Catalog visible | 1. Click “Buy Now” on 3 different books | Cart badge = 3, totals correct | localStorage updated | P1 | ✅ Passed |
| TC-CART-003 | FR-O01 | Increase quantity | Cart has 1 item | 1. Click “+” once | Quantity = 2, subtotal ×2 | localStorage qty updated | P1 | ✅ Passed |
| TC-CART-004 | FR-O01 | Decrease quantity | Cart has 2 items | 1. Click “−” once | Quantity = 1, subtotal ÷2 | localStorage qty updated | P1 | ✅ Passed |
| TC-CART-005 | FR-O01 | Enforce min quantity 1 | Cart has 1 item | 1. Click “−” | Quantity stays 1, button disabled | localStorage unchanged | P2 | ✅ Passed |
| TC-CART-006 | FR-O01 | Remove item | Cart has items | 1. Click “Remove” | Item disappears, badge decrements | localStorage removed | P1 | ✅ Passed |
| TC-CART-007 | FR-O01 | Persistence via localStorage | Items in cart | 1. Refresh browser | Cart contents identical | Same as above | P1 | ✅ Passed |
| TC-CART-008 | FR-O01 | Stock limit enforcement | Item stock = 5 | 1. Increase qty to 6 | Quantity capped at 5, warning shown | localStorage = 5 | P1 | ❌ Failed (Intentional) |

---

## 💳 3. Checkout Wizard (10 Test Cases)

| TC ID | FR Code | Title | Pre-conditions | Steps | Expected Result | Post-conditions | Priority | Status |
|--------|---------|-------|----------------|-------|-----------------|-----------------|----------|--------|
| TC-CHECK-001 | FR-O02 | Enter checkout flow | Cart not empty | 1. Click “Checkout” | Wizard opens at Shipping step | URL = `/checkout/shipping` | P1 | ✅ Passed |
| TC-CHECK-002 | FR-O02 | Required fields validation | Shipping step empty | 1. Click “Next” | Inline errors under empty fields | Form blocked | P1 | ✅ Passed |
| TC-CHECK-003 | FR-O02 | Email format validation | Shipping step | 1. Type “bad-email”2. Click “Next” | “Invalid email” tooltip | Form blocked | P1 | ❌ Failed (DEFECT-004) |
| TC-CHECK-004 | FR-O02 | Back/Next persistence | Any step with data | 1. Fill fields2. Click “Back” then “Next” | Data retained in inputs | Data retained in inputs  | P2 | ✅ Passed |
| TC-CHECK-005 | FR-O02 | Next disabled if invalid | Invalid form | 1. Leave field empty | “Next” button disabled | Cannot proceed | P1 | ✅ Passed |
| TC-CHECK-006 | FR-O02 | Review totals accurate | Review step | 1. Observe totals | Sub-total + tax = grand total | Same totals stored | P1 | ✅ Passed |
| TC-CHECK-007 | FR-O02 | Rounding rule correct | Any total ending in .005 | 1. Check grand total | Rounded to nearest .01 (banker’s) | Same value shown | P2 | ✅ Passed |
| TC-CHECK-008 | FR-O02 | Coupon validation | Review step | 1. Enter invalid coupon | “Coupon not valid” message | Coupon rejected | P2 | ✅ Passed |
| TC-CHECK-009 | FR-O02 | Coupon rules respected | Basket min | 1. Apply coupon below min | “Minimum basket £25” alert | Coupon rejected | P2 | ✅ Passed |
| TC-CHECK-010 | FR-O02 | Empty cart blocked | Cart = 0 | 1. Click “Checkout” | Redirected to catalog with toast | No checkout access | P1 | ✅ Passed |

---

## 💰 4. Payment & Currency (8 Test Cases)

| TC ID | FR Code | Title | Pre-conditions | Steps | Expected Result | Post-conditions | Priority | Status |
|--------|---------|-------|----------------|-------|-----------------|-----------------|----------|--------|
| TC-PAY-001 | FR-O03 | Payment modal loads | Review step complete | 1. Click “Pay Now” | Paystack iframe opens | Order status = Pending | P1 | ✅ Passed |
| TC-PAY-002 | FR-O03 | Successful payment | Paystack iframe open | 1. Enter test card 4084…2. Submit | “Payment successful” screen | Order status = Paid | P1 | ✅ Passed |
| TC-PAY-003 | FR-O03 | Cancel payment | Paystack iframe open | 1. Click “Cancel” | Modal closes, stays on review | Order status = Pending | P1 | ✅ Passed |
| TC-PAY-004 | FR-O03 | Offline/error path | Block network in DevTools | 1. Click “Pay Now” | “Network error, please retry” | Order status unchanged | P1 | ✅ Passed |
| TC-PAY-005 | FR-O03 | Unsupported currency handling | Currency = XYZ | 1. Click “Pay Now” | Preflight error banner | Payment blocked | P1 | ❌ Failed (DEFECT-003) |
| TC-PAY-006 | FR-O03 | Exact minor units | Total = £10.99 | 1. Inspect payload | Amount = 1099 (minor) | No float rounding | P1 | ✅ Passed |
| TC-PAY-007 | FR-O03 | Currency mismatch (intentional) | UI = USD, gateway = KES | 1. Inspect network | Gateway receives KES, UI shows USD | Intentional defect logged | P1 | ❌ Failed (Intentional) |
| TC-PAY-008 | FR-O03 | Gateway reference shown | Payment success page | 1. Observe reference | Reference string visible | Stored in order object | P2 | ✅ Passed |

---

## 📦 5. Orders & Persistence (4 Test Cases)

| TC ID | FR Code | Title | Pre-conditions | Steps | Expected Result | Post-conditions | Priority | Status |
|--------|---------|-------|----------------|-------|-----------------|-----------------|----------|--------|
| TC-ORD-001 | FR-O04 | Order saved post-payment | Payment successful | 1. Close modal | Order appears in history | localStorage updated | P1 | ✅ Passed |
| TC-ORD-002 | FR-O04 | Order list displays data | History page | 1. Open `/orders` | List sorted newest first | Same order retained | P2 | ✅ Passed |
| TC-ORD-003 | FR-O05 | Status & audit trail visible | Order detail page | 1. Click order row | Paid status + timestamp shown | Audit trail stored | P2 | ✅ Passed |
| TC-ORD-004 | FR-O04 | CSV export formatting | History page | 1. Click “Export CSV” | RFC-4180 compliant, comma decimal | File downloadable | P2 | ❌ Failed (Intentional) |

---

## 🔔 6. Notifications (3 Test Cases)

| TC ID | FR Code | Title | Pre-conditions | Steps | Expected Result | Post-conditions | Priority | Status |
|--------|---------|-------|----------------|-------|-----------------|-----------------|----------|--------|
| TC-NOTIF-001 | FR-N01 | Badge increments | New order arrived | 1. Observe bell icon | Badge count +1 | localStorage updated | P1 | ✅ Passed |
| TC-NOTIF-002 | FR-N02 | Notification history loads | Badge clicked | 1. Click bell | Chronological list displayed | Same list stored | P2 | ✅ Passed |
| TC-NOTIF-003 | FR-N02 | Mark-all-read resets badge | Unread count  0 | 1. Click “Mark all read” | Badge = 0 | localStorage cleared | P2 | ❌ Failed (Intentional) |

---

## 🛠 7. Admin Access & Security (3 Test Cases)

| TC ID | FR Code | Title | Pre-conditions | Steps | Expected Result | Post-conditions | Priority | Status |
|--------|---------|-------|----------------|-------|-----------------|-----------------|----------|--------|
| TC-ADMIN-001 | FR-M01 | Unauthorized user blocked | No admin role | 1. Visit `/admin` | “Unauthorized” page displayed | No dashboard access | P1 | ✅ Passed |
| TC-ADMIN-002 | FR-M01 | Admin role unlocks dashboard | Role = admin | 1. Visit `/admin` | Dashboard loads | Admin menu visible | P1 | ✅ Passed |
| TC-ADMIN-003 | FR-S01 | Block javascript: links | Markdown field | 1. Submit `javascript:alert()`` | Link removed or escaped | XSS prevented | P1 | ❌ Failed (Intentional) |

---

## ♿⚡ 8. A11y, Performance, Compatibility (6 Test Cases)

| TC ID | FR Code | Title | Pre-conditions | Steps | Expected Result | Post-conditions | Priority | Status |
|--------|---------|-------|----------------|-------|-----------------|-----------------|----------|--------|
| TC-A11Y-001 | FR-X01 | Focus ring visible | Any interactive element | 1. Press Tab | Blue ring ≥ 3 px visible | Focus order correct | P2 | ✅ Passed |
| TC-A11Y-002 | FR-X01 | aria-live for errors | Checkout form | 1. Submit empty field | Screen reader announces error | aria-live region used | P1 | ✅ Passed |
| TC-PERF-001 | FR-X02 | LCP under 2.5s | Fresh load | 1. Empty cache & hard reload | Lighthouse LCP ≤ 2.5 s | Budget stored | P2 | ✅ Passed |
| TC-COMP-001 | FR-X03 | Chrome compatibility | Chrome latest | 1. Run full flow | No console errors | Same in CI | P1 | ✅ Passed |
| TC-COMP-002 | FR-X03 | Firefox compatibility | Firefox latest | 1. Run full flow | Modal works, no JS errors | Same in CI | P1 | ✅ Passed |
| TC-COMP-003 | FR-X03 | Mobile responsive | DevTools 375 px | 1. Open hamburger menu | Menu visible, no overflow | Breakpoints correct | P2 | ✅ Passed |

---

## Environment Notes
| Component | Detail |
|------------|--------|
| OS | Windows 11 |
| Browser | Chrome (primary), Firefox (secondary) |
| Environment | Localhost via `npm start` |
| Payment Mode | Paystack test mode |
| Persistence | localStorage |