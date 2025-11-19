# 📋 Bookstore Demo - Automated Test Cases

This document contains **automated test cases** implemented using **Jest** and **React Testing Library** for the Bookstore Demo project.

All tests use `data-testid` attributes in components for querying, and `userEvent` for simulating interactions. Evidence should be captured via **console logs**, **screenshots**, or **localStorage snapshots**.

---

## 1. Components - BookCard

### BOOKCARD-001: Render BookCard Component
**Component:** BookCard  
**Description:** Verify BookCard renders title, price, and Buy button correctly.  
**Steps / Setup:**  
1. Render BookCard with a sample book.  
2. Query elements by `getByTestId`.  
**Expected Result:** Title, price, and Buy button appear correctly.  
**Actual Result:** ✅ Passed   
**Metadata:** Tester: Ian Njeru | Date: 17-Nov-2025  
**Evidence:**![![alt text](evidence/AUT-BOOKCARD-001_test_output.png)]  
**GitHub Issue:** [#BOOKCARD-001](https://github.com/Iannjeru/Portfolio/issues/37#issue-3632511126)

### BOOKCARD-002: Buy Button Click
**Component:** BookCard  
**Description:** Verify Buy button calls `onPurchase` with correct book.  
**Steps / Setup:**  
1. Render BookCard with mock `onPurchase`.  
2. Simulate click.  
3. Assert callback called with book.  
**Expected Result:** Callback invoked once with correct book.  
**Actual Result:** ✅ Passed   
**Metadata:** Tester: Ian Njeru | Date: 17-Nov-2025  
**Evidence:** ![alt text](evidence/BookCard-buy-button-click.png)  
**GitHub Issue:** [#BOOKCARD-002](https://github.com/Iannjeru/Portfolio/issues/38#issue-3632597589)


### BOOKCARD-003: Lazy Loading Verification
**Component:** BookCard  
**Description:**Verify that all book images in the `BookCard` component use lazy loading to optimize page performance and reduce initial load time.   
**Steps / Setup:**  
  1. Render the `BookCard` component with a sample book object.  
2. Inspect the `<img>` element for the `loading="lazy"` attribute.

**Expected Result:**  
- Image element has the attribute `loading="lazy"`.  
- Image only loads when it enters the viewport (verified via the attribute in unit test).

**Actual Result:**  
- ✅ Test passed — `<img>` has `loading="lazy"` as expected.

**Tested By:** Ian Njeru  
**Metadata:** Ian Njeru · ✅ Passed  

**Test Evidence:**  
![BOOKCARD-003 Lazy Loading](evidence/BOOKCARD-003_lazy_loading.png)

**GitHub Issue Link:** [#BOOKCARD-003](https://github.com/Iannjeru/Portfolio/issues/39#issue-3632849114)
---

## 2. Cart & Quantities (8 TCs)

### CART-001: Add Single Item
**Component:** Cart  
**Description:** Adding one item updates cart state and UI.  
**Steps / Setup:** Render Cart, add item, assert state and DOM.  
**Expected Result:** Item displayed in cart.  
**Actual Result:** ✅ Passed   
**Metadata:** Tester: Christiana Muriuki | Date: 17-Nov-2025  
**Evidence:**   ![alt text](evidence/navbar-cart-count.png)
**GitHub Issue:** [#CART-001](https://github.com/Iannjeru/Portfolio/issues/40#issue-3633410284)

### CART-002: Add Multiple Items
**Component:** Cart  
**Description:** Adding multiple items reflects correctly in cart.  
**Steps / Setup:** Add multiple items, check quantities.  
**Expected Result:** All items shown with correct quantities.  
**Actual Result:** ✅ Passed / ❌ Failed  
**Metadata:** Tester: Ian Njeru | Date: 17-Nov-2025  
**Evidence:** `CART-002.png`  
**GitHub Issue:** [#CART-002](https://github.com/yourrepo/issues/new?title=CART-002+Add+Multiple+Items)

### CART-003: Increase Quantity
**Component:** Cart  
**Description:** Increasing quantity updates state and UI.  
**Steps / Setup:** Click increment button for an item.  
**Expected Result:** Quantity increments by 1.  
**Actual Result:** ✅ Passed / ❌ Failed  
**Metadata:** Tester: Ronewa Masindi | Date: 17-Nov-2025  
**Evidence:** `CART-003.png`  
**GitHub Issue:** [#CART-003](https://github.com/yourrepo/issues/new?title=CART-003+Increase+Quantity)

### CART-004: Decrease Quantity
**Component:** Cart  
**Description:** Decreasing quantity updates state and UI.  
**Steps / Setup:** Click decrement button for an item.  
**Expected Result:** Quantity decrements by 1, not below 1.  
**Actual Result:** ✅ Passed / ❌ Failed  
**Metadata:** Tester: Ian Njeru | Date: 17-Nov-2025  
**Evidence:** `CART-004.png`  
**GitHub Issue:** [#CART-004](https://github.com/yourrepo/issues/new?title=CART-004+Decrease+Quantity)

### CART-005: Enforce Minimum Quantity
**Component:** Cart  
**Description:** Quantity cannot go below 1.  
**Steps / Setup:** Attempt to decrement quantity when at 1.  
**Expected Result:** Quantity remains at 1.  
**Actual Result:** ✅ Passed / ❌ Failed  
**Metadata:** Tester: Christiana Muriuki | Date: 17-Nov-2025  
**Evidence:** `CART-005.png`  
**GitHub Issue:** [#CART-005](https://github.com/yourrepo/issues/new?title=CART-005+Min+Quantity)

### CART-006: Remove Item
**Component:** Cart  
**Description:** Removing an item updates state and UI.  
**Steps / Setup:** Click remove button.  
**Expected Result:** Item disappears from cart.  
**Actual Result:** ✅ Passed / ❌ Failed  
**Metadata:** Tester: Ronewa Masindi | Date: 17-Nov-2025  
**Evidence:** `CART-006.png`  
**GitHub Issue:** [#CART-006](https://github.com/yourrepo/issues/new?title=CART-006+Remove+Item)

### CART-007: Persistence via LocalStorage
**Component:** Cart  
**Description:** Cart items persist across reloads via localStorage.  
**Steps / Setup:** Add items, reload page, assert localStorage matches cart.  
**Expected Result:** Cart items persist correctly.  
**Actual Result:** ✅ Passed / ❌ Failed  
**Metadata:** Tester: Ian Njeru | Date: 17-Nov-2025  
**Evidence:** `CART-007_localstorage.json`  
**GitHub Issue:** [#CART-007](https://github.com/yourrepo/issues/new?title=CART-007+Persistence)

### CART-008: Stock Limit Enforcement
**Component:** Cart  
**Description:** Cannot add more than stock quantity.  
**Steps / Setup:** Attempt to exceed stock.  
**Expected Result:** Alert/error shown, quantity capped.  
**Actual Result:** ✅ Passed / ❌ Failed  
**Metadata:** Tester: Christiana Muriuki | Date: 17-Nov-2025  
**Evidence:** `CART-008.png`  
**GitHub Issue:** [#CART-008](https://github.com/yourrepo/issues/new?title=CART-008+Stock+Limit)

---

## 3. Checkout Wizard (10 TCs)

### CHECKOUT-001: Checkout Navigation
**Component:** Checkout  
**Description:** User can navigate through checkout steps.  
**Steps / Setup:** Render checkout, click next/back buttons.  
**Expected Result:** Steps navigate correctly.  
**Actual Result:** ✅ Passed / ❌ Failed  
**Metadata:** Tester: Christiana Muriuki | Date: 17-Nov-2025  
**Evidence:** `CHECKOUT-001.png`  
**GitHub Issue:** [#CHECKOUT-001](https://github.com/yourrepo/issues/new?title=CHECKOUT-001+Navigation)

### CHECKOUT-002: Shipping Form Validation
**Component:** Checkout  
**Description:** Form validates email and required fields.  
**Steps / Setup:** Input invalid/missing data, submit.  
**Expected Result:** Errors shown, submission blocked.  
**Actual Result:** ✅ Passed / ❌ Failed  
**Metadata:** Tester: Ian Njeru | Date: 17-Nov-2025  
**Evidence:** `CHECKOUT-002.png`  
**GitHub Issue:** [#CHECKOUT-002](https://github.com/yourrepo/issues/new?title=CHECKOUT-002+Form+Validation)

### CHECKOUT-003 → CHECKOUT-010: Remaining Checkout flows
*(Repeat the format above for: Payment method selection, Address confirmation, Summary validation, Promo code, etc.)*  
**Evidence:** Attach screenshots or console logs.  
**GitHub Issues:** Link as above with incremental IDs.

---

## 4. Payment & Currency (8 TCs)

### PAY-001: Payment Modal Loads
**Component:** Payment  
**Description:** Modal opens on checkout.  
**Evidence:** `PAY-001.png`  
**GitHub Issue:** [#PAY-001](https://github.com/yourrepo/issues/new?title=PAY-001+Payment+Modal)

### PAY-002: Unsupported Currency
**Component:** Payment  
**Description:** Payment blocked for unsupported currency.  
**Evidence:** `PAY-002_console.log`  
**GitHub Issue:** [#PAY-002](https://github.com/yourrepo/issues/new?title=PAY-002+Unsupported+Currency)

*(Remaining 6 Payment TCs follow same format)*

---

## 5. Orders & Persistence (4 TCs)

### ORD-001 → ORD-004
**Component:** Orders  
**Description:** Verify orders appear in history and persist.  
**Evidence:** Attach screenshots / console logs / localStorage snapshot  
**GitHub Issue:** #ORD-001 → #ORD-004

---

### 🧮 Notes

- All tests are in `src/components/__tests__/`.  
- `data-testid` attributes are required for automated querying.  
- `userEvent` simulates interactions.  
- Capture screenshots, console logs, or JSON snapshots for failed tests.  
- Update Actual Result after running tests.  

