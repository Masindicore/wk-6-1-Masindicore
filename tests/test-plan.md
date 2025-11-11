#  Book Store App —  test plan
**Team:** Elite Software Testers  
**Phase:** Week 1 — Planning and setup 
**Assigned To:** Ian Njeru (Risk analyst)  
**Date:** November 5, 2025 


### **Objective**

The Bookstore Web Application allows customers to browse books, add items to a cart, and checkout as a guest (no account creation). Payments run in Paystack test mode, and order/cart data is stored in localStorage. An admin page exists and is protected, only accessible when the user’s role is set to admin.

**Goal:** Ensure the shopping flow works smoothly, totals are accurate, orders persist, and high-impact defects are identified early.

---

## **In-Scope **

* Book catalog browsing and search
* Add-to-cart functionality and quantity updates
* Guest checkout flow
* Paystack test-mode payment (success and failure scenarios)
* Order persistence in localStorage
* Admin route access control (role must be admin)

---

## **Out-of-Scope**

* Account creation / Login system
* Real payment processing (test mode only)
* Full responsive design and mobile optimization

---

## ** Test Environments **

| Component            | Details                                  |
| -------------------- | ---------------------------------------- |
| **OS**               | Windows 11                               |
| **Browsers**         | Chrome (Primary), Firefox (Secondary)    |
| **Framework**        | React (local dev server via `npm start`) |
| **Payment**          | Paystack test mode only                  |
| **Data Persistence** | localStorage                             |

---

## **Tools (extensions, screen readers)**

**Primary Tools:**

* Web browsers: Chrome, Firefox
* Dev tools: Browser Developer Tools (Network, Console)
* Paystack test dashboard
* GitHub Issues & Project Board (for defect tracking)

---



## **Test Types (functional, a11y, perf, compatibility, hygiene)**

| **Type**                         | **Description**                                                             |
| -------------------------------- | --------------------------------------------------------------------------- |
| **Functional Testing**           | Verify core book browsing, cart, and checkout workflows                     |
| **Accessibility Testing (a11y)** | Basic keyboard navigation and readable alt text                             |
| **Performance Testing**          | Observe page load speed under normal load                                   |
| **Compatibility Testing**        | Verify key flows on Chrome and Firefox                                      |
| **Hygiene Testing**              | Validate clean console logs, proper data persistence, and correct UI labels |

---

## **3. Test Objectives**

* Verify book browsing and search works correctly.
* Ensure the cart updates quantities and recalculates subtotals accurately.
* Confirm the entire guest checkout flow works (cart → checkout → payment → confirmation).
* Validate both successful and failed Paystack test payments.
* Ensure completed orders are stored and persist in localStorage.
* Confirm that only users with admin role can access `/admin`.
* Detect and report high-impact defects such as:

  * Broken checkout experiences
  * Incorrect totals
  * Duplicate orders
  * Lost or corrupted data
* Check usability and clarity of the main user flow.
* Verify behavior across at least Chrome and Firefox.

---

## **4. Testing Approach**

Testing will be performed manually using:

* Functional UI test cases
* Exploratory testing (especially checkout/payment)
* Basic browser compatibility checks

Defects will be logged in **GitHub Issues** and tracked in the **GitHub Project Board**.

---

## **5. Team Roles**

| **Name**                 | **Role**   | **Responsibilities** |
| ----------------------------------- | ------------- | -----------------------|
|masindinewa@gmail.com        |   Test Lead     | Coordinates testing and documentation                                      |
| muriukichristiana@gmail.com  | Test Engineer | Writes and executes test cases; logs defects                               |
| njeruian52@gmail.com        |    Risk Hunter   | Identifies high-impact defects in checkout, payment, and order persistence |

---

## **6. Entry Criteria**

Testing begins when:

* The app runs locally without errors.
* `npm install` and `npm start` are successful.
* Paystack is configured in test mode.
* Sample books are visible in the catalog.
* GitHub Project Board is ready.

---

## **7. Exit Criteria**

Testing is complete when:

* All planned test cases are executed.
* All high-priority defects are resolved or accepted.
* Checkout flow is verified working (success + failure).
* Orders persist properly in localStorage.
* Admin access control is validated.
* Screenshots/test evidence are collected.
* Final test summary is completed.

---

## **Risks and Mitigations**

| **Risk**                                     | **Impact** | **Mitigation**                                        |
| -------------------------------------------- | ---------- | ----------------------------------------------------- |
| Duplicate order if payment page is refreshed | High       | Validate idempotency + disable buttons during payment |
| Cart/order data lost in localStorage         | High       | Retest after refresh/restart                          |
| Incorrect subtotal or total calculations     | High       | Test multiple quantity adjustments                    |
| Unauthorized access to admin page            | Medium     | Attempt bypass and confirm access is denied           |
| Paystack failure not handled gracefully      | Medium     | Test payment success + failure scenarios              |

---


## **8. Schedule**

| **Phase**   | **Task**                  | **Due Date** |
| ----------- | ------------------------- | ------------ |
| **Phase 1** | Planning & Setup          | Nov 5, 2025  |
| **Phase 2** | Test Design & Execution   | Nov 11, 2025 |
| **Phase 3** | Final Report & Submission | Nov 18, 2025 |

---

