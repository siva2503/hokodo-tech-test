_note: below is just an hypothetical issue_

## Title

Unable to add card details in payment page.

## Bug description

"Add card" button in payments page is not working. This blocks end users from completing the payment journey.

### Details

**Severity - 1**
**Priority - 1**
**Environment - Production**
**Issue existence - Frontend**

**Steps to replicate**

1. Navigate to hokodo payments page by checking out any product
2. Enter valid Debit/credit card details
3. Enter valid billing details
4. Click on Add card button

Expected: Debit card addition should succeed
Actual: The button click has no effect in the application

**RootCause Analysis**

-   Analysing the network tab through chrome developer tool, its evident that the "Add card" button click is not generating any network calls related Hokodo, suggesting the issue is on the Frontend app.
-   Also, the button state is not changing its color on button presses confirming that is Frontend issue.
