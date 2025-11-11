#  Book Store App — Test Cases & Checklists  
**Team:** Elite Software Testers  
**Phase:** Week 2 — Test Design & Early Execution  
**Assigned To:** Christiana Muriuki (Test Executor)  
**Date:** November 11, 2025  

---

##  Objective  
To document and design draft test cases and checklists for all core functionalities of the Book Store Web Application, ensuring key user flows (catalog → cart → checkout → payment) work as expected.

---



---

##  Smoke Test Checklist (Critical Paths)

| ID | Area | Description | Expected Result | Status |
|----|------|-------------|-----------------|---------|-----------|
| SM-01 | Launch App | Run `npm start` | App launches on `localhost:3000/catalog` | Pass |  
| SM-02 | Catalog Load | Books load correctly | All book cards visible with title/price |  Pass |  
| SM-03 | Add to Cart | Click “Buy Now” | Cart badge count increases |  Pass |  
| SM-04 | Checkout Navigation | Click “Checkout” | Checkout page loads successfully |  Pass |  
| SM-05 | Admin Access | Open `/admin` without role | Shows “Unauthorized” |  Pass |  

---

##  Detailed Test Cases

| ID | Title | Pre-conditions | Steps | Expected Result | Post-conditions | Evidence |
|----|--------|----------------|-------|-----------------|-----------------|-----------|
| TC-01 | Launch App Successfully | Node installed; `npm install` done | 1. Run `npm start` 2. Visit `localhost:3000/catalog` | Homepage loads without errors | App ready for testing |  |
| TC-02 | Verify Catalog Book List | App running | 1. Observe catalog 2. Scroll through books | All books displayed with image/title/price | Catalog visible |  |
| TC-03 | Search for a Book | App running | 1. Type "React" in search bar 2. Press Enter | Search results show “React” related books | Matching results displayed |  |
| TC-04 | Add to Cart | App running | 1. Click “Buy Now” 2. Open cart | Cart updates with added item | Item saved in localStorage | |
| TC-05 | Update Cart Quantity | Cart has at least one book | 1. Change quantity from 1→2 2. Verify subtotal | Subtotal and total update correctly | Cart reflects new quantity | |
| TC-06 | Remove Book from Cart | Cart contains items | 1. Click “Remove” | Item removed and total updates | Updated cart saved |  |
| TC-07 | Verify Checkout Navigation | Cart not empty | 1. Click “Checkout” 2. Observe page | Checkout page loads successfully | Checkout flow accessible | |
| TC-08 | Paystack Integration (Key Missing) | `.env` has no key | 1. Attempt payment | Error message appears gracefully | Payment aborted | |
| TC-09 | Admin Page Restriction | Not logged in as admin | 1. Visit `/admin` | “Unauthorized” page displayed | No unauthorized access | |
| TC-10 | Cart Persistence | Items in cart | 1. Refresh page | Cart data remains | Persistent data retained |  |

---

## 🔄 Regression Test Suite (Key User Flows)

| Flow ID | Flow Description | Steps | Expected Result | Status |
|----------|------------------|-------|-----------------|---------|-----------|
| RF-01 | Guest Checkout | Catalog → Cart → Checkout → Payment | Checkout works with Paystack Test Key | Not tested | 
| RF-02 | Cart Update Cycle | Add → Update → Remove → Refresh | Cart updates and persists |  Pass | 
| RF-03 | Admin Access Control | Visit `/admin` | Access restricted |  Pass | 
| RF-04 | Search & Add | Search → Add to Cart → Verify | Correct item added | pass | 

---

##  Payment, Cart, and Search Feature Scenarios

###  Cart Functionality
| ID | Scenario | Steps | Expected Outcome | Status | 
|----|-----------|--------|------------------|--------|-----------|
| CF-01 | Add multiple books | Add two items from catalog | Both items appear with correct totals |  Pass | 
| CF-02 | Update quantity | Change 1to2 | Subtotal recalculates |  Pass | 
| CF-03 | Remove item | Click Remove | Item deleted from cart |  Pass | 
| CF-04 | Clear cart | Remove all items | Cart empty message appears |  Pass | 

###  Search Functionality
| ID | Scenario | Steps | Expected Outcome | Status | 
|----|-----------|--------|------------------|--------|-----------|
| SF-01 | Search by valid title | Search “The rings” | Shows matching books | pass | 
| SF-02 | Search invalid title | Search “it” | “No books found matching your search” |  Pass | 
| SF-03 | Clear search | Delete query | Full catalog displayed |  Pass | 

###  Paystack Test Payment
| ID | Scenario | Steps | Expected Outcome | Status | 
|----|-----------|--------|------------------|--------|-----------|
| PF-01 | Payment with Test Key | Add test key → Checkout | Payment iframe opens | Not tested | 
| PF-02 | Missing Key | No test key → Checkout | Shows payment error | Not tested | 
| PF-03 | Simulate Success | Use 408408 test card | Payment success screen |  Not tested |
| PF-04 | Simulate Failure | Use declined card | “Payment failed” message |  Not tested |  

---

##  Environment Notes
| Component | Detail |
|------------|--------|
| OS | Windows 11 |
| Browser | Chrome (primary), Firefox (secondary) |
| Environment | Localhost via `npm start` |
| Payment Mode | Paystack test mode |
| Persistence | localStorage |


---



