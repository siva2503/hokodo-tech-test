## Issue Title

Incorrect delivery details in payments page

## Bug description

Address line 3 of delievery address displayed under Contact Details section of the payments page is incorrect.

## Details

**Severity - 2**
**Priority - 2**
**Environment - Sandbox**
**Issue existence - Backend - Payment orders service**

note: On a scale of 1 - 3, with 1 being highly severe. Provided severity of this issue as 2, considering it could just be an addition of string to the address rather than replacement of address line. If it is identified to be a replacement of any of the address line, severity must be increased as it would lead to product delivery problems.

**Priority - 2**

note: On a scale of 1 - 3, with 1 being top priority, it is currently given as 2 with assumption of no address line lost. Should become top priority if identified otherwise.

### Steps to replicate

1. Navigate to hokodo payments page by checking out any product
2. Look for the delivery address details under Contact Details section
   Actual: Address lines contains a piece of html code - `<script>alert();</script>`
   Expected: Address details must display correct information

URL: https://pay-sandbox.hokodo.co/?design=default&order=order-YDPn5AHx3g5tkSXpHPqbnS&plan=ppln-VgQKuDGSqYbEEY6i9YBKrA&key=gotoYsfWiHYZyoYAMX_iY0gS9kpSSOF7hIRnb8tjH9s&template=pptemp-H5SMNDpBpVtT7ZYqAPDntf

### Rootcause Analysis

The "orders" endpoint returns response with invalid address detail in `address_line3` attribute of `delivery_address` object (_customer["delivery_address"]["address_line3"]_)

Request URL: https://api-sandbox.hokodo.co/v1/payment/orders/order-YDPn5AHx3g5tkSXpHPqbnS/?expand=customer,payment_offer,deferred_payment
Auth Header: OrderKey gotoYsfWiHYZyoYAMX_iY0gS9kpSSOF7hIRnb8tjH9s

_note: please find attached sample response attached here_
