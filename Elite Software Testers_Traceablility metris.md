📊 Book Store Testing - Test Suite

🎯 Test Execution Dashboard

Metric Value
Total Test Cases 50
Passed 41
Failed 9
Intentional Defects Exposed 7
Actual Defects Discovered 2
Requirements Coverage 100%

🚨 Failure Breakdown

· Currency mismatch (intentional)
· CSV export decimal formatting
· Notification badge not updating
· Stock limit not enforced
· Lazy loading images regression
· Sanitization failure (javascript: allowed)
· Email validation (actual defect)
· Unsupported currency handling (actual defect)

---

📋 50 TEST CASES

📚 1. Catalog & Search (8 Test Cases)

TC ID FR Code Priority Objective Expected Result Status
TC-CAT-001 FR-O01 P1 Search by title Correct book appears ✅ Passed
TC-CAT-002 FR-O01 P1 Search by author Author matches returned ✅ Passed
TC-CAT-003 FR-O01 P1 Search by description Keyword match returned ✅ Passed
TC-CAT-004 FR-O01 P1 Clearing search restores catalog Full list restored ✅ Passed
TC-CAT-005 FR-O01 P2 No-results message appears "No books found" visible ✅ Passed
TC-CAT-006 FR-O01 P3 Special character search No crash, graceful handling ✅ Passed
TC-CAT-007 FR-X02 P2 Images lazy-load Images load on scroll ❌ Failed (Intentional Defect)
TC-CAT-008 FR-X01 P2 Search input A11y ESC clears field + correct labeling ✅ Passed

🛒 2. Cart & Quantities (8 Test Cases)

TC ID FR Code Priority Objective Expected Result Status
TC-CART-001 FR-O01 P1 Add single item Item added with correct details ✅ Passed
TC-CART-002 FR-O01 P1 Add multiple items 3 items show correct totals ✅ Passed
TC-CART-003 FR-O01 P1 Increase quantity Subtotal recalculates ✅ Passed
TC-CART-004 FR-O01 P1 Decrease quantity Subtotal updates ✅ Passed
TC-CART-005 FR-O01 P2 Enforce min quantity 1 Quantity cannot be <1 ✅ Passed
TC-CART-006 FR-O01 P1 Remove item Updated cart count ✅ Passed
TC-CART-007 FR-O01 P1 Persistence via localStorage Cart persists on refresh ✅ Passed
TC-CART-008 FR-O01 P1 Stock limit enforcement Quantity capped at stock ❌ Failed (Intentional Defect)

💳 3. Checkout Wizard (10 Test Cases)

TC ID FR Code Priority Objective Expected Result Status
TC-CHECK-001 FR-O02 P1 Enter checkout flow Wizard opens at Shipping ✅ Passed
TC-CHECK-002 FR-O02 P1 Required fields validation Errors shown per field ✅ Passed
TC-CHECK-003 FR-O02 P1 Email format validation Invalid emails blocked ❌ Failed (DEFECT-004)
TC-CHECK-004 FR-O02 P2 Back/Next persistence Data maintained ✅ Passed
TC-CHECK-005 FR-O02 P1 Next disabled if invalid Cannot continue ✅ Passed
TC-CHECK-006 FR-O02 P1 Review totals accurate Correct subtotal/tax/total ✅ Passed
TC-CHECK-007 FR-O02 P2 Rounding rule correct Grand total rounded properly ✅ Passed
TC-CHECK-008 FR-O02 P2 Coupon validation Invalid coupon rejected ✅ Passed
TC-CHECK-009 FR-O02 P2 Coupon rules respected Min basket & combinability enforced ✅ Passed
TC-CHECK-010 FR-O02 P1 Empty cart blocked Redirect or denied ✅ Passed

💰 4. Payment & Currency (8 Test Cases)

TC ID FR Code Priority Objective Expected Result Status
TC-PAY-001 FR-O03 P1 Payment modal loads Paystack opens ✅ Passed
TC-PAY-002 FR-O03 P1 Successful payment Order → Paid ✅ Passed
TC-PAY-003 FR-O03 P1 Cancel payment Order stays Pending ✅ Passed
TC-PAY-004 FR-O03 P1 Offline/error path Error shown, stays Pending ✅ Passed
TC-PAY-005 FR-O03 P1 Unsupported currency handling Clear preflight error ❌ Failed (DEFECT-003)
TC-PAY-006 FR-O03 P1 Exact minor units No float errors ✅ Passed
TC-PAY-007 FR-O03 P1 Currency mismatch (intentional defect) Should match gateway ❌ Failed (Intentional Defect)
TC-PAY-008 FR-O03 P2 Gateway reference shown Reference visible ✅ Passed

📦 5. Orders & Persistence (4 Test Cases)

TC ID FR Code Priority Objective Expected Result Status
TC-ORD-001 FR-O04 P1 Order saved post-payment Order inserted in history ✅ Passed
TC-ORD-002 FR-O04 P2 Order list displays data Sorted by date ✅ Passed
TC-ORD-003 FR-O05 P2 Status & audit trail visible Paid status + audit ✅ Passed
TC-ORD-004 FR-O04 P2 CSV export formatting No broken columns ❌ Failed (Intentional Defect)

🔔 6. Notifications (3 Test Cases)

TC ID FR Code Priority Objective Expected Result Status
TC-NOTIF-001 FR-N01 P1 Badge increments Count increases ✅ Passed
TC-NOTIF-002 FR-N01 P2 Notification history loads Chronological list ✅ Passed
TC-NOTIF-003 FR-N02 P2 Mark-all-read resets badge Badge = 0 ❌ Failed (Intentional Defect)

🛠 7. Admin Access & Security (3 Test Cases)

TC ID FR Code Priority Objective Expected Result Status
TC-ADMIN-001 FR-M01 P1 Unauthorized user blocked "Unauthorized" displayed ✅ Passed
TC-ADMIN-002 FR-M01 P1 Admin role unlocks dashboard Page loads ✅ Passed
TC-ADMIN-003 FR-S01 P1 Block javascript: links Sanitization blocks them ❌ Failed (Intentional Defect)

♿⚡ 8. A11y, Performance, Compatibility (6 Test Cases)

TC ID FR Code Priority Objective Expected Result Status
TC-A11Y-001 FR-X01 P2 Focus ring visible Clear focus indication ✅ Passed
TC-A11Y-002 FR-X01 P1 aria-live for errors Screen reader announces ✅ Passed
TC-PERF-001 FR-X02 P2 LCP under 2.5s Performance meets budget ✅ Passed
TC-COMP-001 FR-X03 P1 Chrome compatibility Full flow works ✅ Passed
TC-COMP-002 FR-X03 P1 Firefox compatibility Modal works ✅ Passed
TC-COMP-003 FR-X03 P2 Mobile responsive Breakpoints correct ✅ Passed

---