_note: below is just an hypothetical issue_

## Title

Payment timeline endpoint is unreachable.

## Bug description

Payment timeline section on Hokodo payments page is not displayed and analysing the network calls made it looks like the issue is with the "payments-offer" API endpoint is unreachable.

### Details

**Severity - 2**
**Priority - 2**
**Environment - Production**
**Issue existence - Backend - Payment Offers**

_note: Considering it to be a P2 issue as it is not impacting any other functionality and also users can proceed & complete the journey._

**Steps to replicate**

1. Navigate to hokodo payments page by checking out any product

Expected: Payment Timeline section must display the offer, dueDate, timeline.
Actual: The section is empty with no details displayed

**RootCause Analysis**

-   "payment_offer" attribute of the response object is null

Request URL - https://api-sandbox.hokodo.co/v1/payment/offers/offr-G9r9Dq7bDZHgqx5DnS3R7S
