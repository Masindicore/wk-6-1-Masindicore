Initial Defect Log — Bookstore Web App

Phase: 2 — Test Design & Early Execution
Date: November 10 2025
Team: Elite Software Testers
Environment: Windows 11 · Microsoft Edge v121 · Node 18 (local dev server)

1. Introduction

The Bookstore Web Application allows customers to browse books, add items to a cart, and complete checkout as a guest.
Payments run in Paystack test mode, while order and cart data persist in localStorage.
An admin page exists but is only accessible when the user role = admin.

Goal:
Ensure the end-to-end shopping flow works smoothly, totals are accurate, and high-impact defects are detected early.

2. Scope

In Scope	Out of Scope
• Book catalog browsing and search	• Account creation / Login system
• Add-to-cart and quantity updates	• Real payment processing (beyond test mode)
• Guest checkout flow	• Full mobile optimization
• Paystack (test-mode payment success/failure)	
• Order persistence in localStorage	
• Admin route access control	

3. Test Objectives

Verify catalog search and browsing.
Ensure cart recalculates subtotals accurately.
Validate the full guest checkout → payment → confirmation flow.
Test both successful and failed Paystack transactions.
Confirm completed orders persist in localStorage.
Validate admin-only access for /admin.
Detect critical issues such as incorrect totals, duplicate orders, or data loss.
Observe usability and clarity in the checkout experience.
Verify behavior across Edge (primary) and Firefox (secondary).

4. Testing Approach

Manual testing using:

Functional UI test cases
Exploratory testing (focus on checkout & payments)
Browser compatibility spot-checks
Defects are logged through GitHub Issues and tracked in the Bookstore Project Board.

5. Test Environment

Component	Details
OS	Windows 11
Browsers	Edge (v121) Primary · Firefox Backup
Framework	React (local npm start)
Payment Mode	Paystack Test Mode only
Data Storage	localStorage
Tracking	GitHub Project Board
|

7. Entry Criteria

Testing began when:

App ran locally without errors.
npm install and npm start were successful.
Paystack configured in test mode.
Sample books visible in catalog.
GitHub Project Board set up for tracking.

8. Exit Criteria

Testing complete when:

All planned test cases executed.
All high-priority defects resolved or accepted.
Checkout flow verified (success + failure).
Orders persist correctly in localStorage.
Admin access control validated.
Screenshots and test evidence collected.
Final test summary documented.

9. Key Risks & Mitigation

Risk	Impact	Mitigation
Duplicate order if payment page refreshed	High	Disable “Pay Now” after click; test idempotency
Cart/order data loss in localStorage	High	Re-test after refresh/restart
Incorrect subtotal or total math	High	Test quantity changes and tax/shipping logic
Unauthorized admin access	Medium	Attempt URL bypass → confirm denied
Paystack failure not handled gracefully	Medium	Simulate cancelled and invalid key scenarios

10. Initial Defect Summary

ID	Title	Severity	Priority	Component	Status
DEFECT-001	Payment System Configuration Failure	Critical (Sev-1)	P0 Emergency	Payment	Open
DEFECT-002	Cart Subtotal vs Checkout Total Mismatch	High (Sev-2)	P1 Urgent	Cart/Checkout	Open
DEFECT-003	Currency Configuration Fallback Issue	High (Sev-2)	P1 Urgent	Payment	Open
DEFECT-004	Checkout Form Validation Gaps	Medium (Sev-3)	P2 High	Checkout	Open

11. Detailed Defect Reports

🟥 DEFECT-001 — Payment System Configuration Failure
Description: Empty .env prevents Paystack initialization.
Steps:

Run app with empty .env.
Add item → Proceed to Checkout → Payment → Click Pay Now.
Expected: Payment popup opens.
Actual: Alert → “We could not start this transaction – enter a valid key.”
Impact: Blocks all revenue flows.

Screenshot:
Image

Severity/Priority: Critical / P0

🟧 DEFECT-002 — Cart Subtotal vs Checkout Total Mismatch
Description: Cart displays only subtotal; checkout adds hidden tax and shipping.
Steps:

Add books worth R30 to cart.
Observe cart subtotal = R30.00.
Proceed to checkout → total = R30 + R4.99 + R2.40.
Expected: Clear display of all charges at cart stage.
Actual: Subtotal misleads user until checkout.
Impact: Potential cart abandonment.

Screenshot:
Image

Severity/Priority: High / P1

🟧 DEFECT-003 — Currency Configuration Fallback Issue
Description: Paystack hard-codes KES when REACT_APP_CURRENCY=ZAR.
Steps:

Set currency = ZAR in .env.
Start checkout → inspect network call.
Expected: Currency sent = ZAR.
Actual: Defaults to KES.
Impact: Currency mismatch → payment failure for SA users.
Code Ref: src/utils/paystack.js line 48.
Severity/Priority: High / P1
🟨 DEFECT-004 — Checkout Form Validation Gaps
Description: Invalid emails and blank fields pass form validation.
Steps:

Go to /checkout.
Enter abc@ as email → click Next.
Expected: Error message for invalid email.
Actual: Form advances without validation.
Impact: Order data errors and support burden.
Screenshot:
Image

Severity/Priority: Medium / P2

12. Overall Defect Summary

Severity	Count	Priority Range	Status
Critical (Sev-1)	1	P0	Open
High (Sev-2)	2	P1	Open
Medium (Sev-3)	1	P2	Open
Low (Sev-4)	0	–	–
Total	4		

13. Next Steps

Retest payment gateway after valid Paystack key is configured.
Align cart and checkout totals to prevent user confusion.
Fix currency parameter in Paystack API utility.
Strengthen checkout form validation (front and back end).
Re-verify on both Edge and Firefox.