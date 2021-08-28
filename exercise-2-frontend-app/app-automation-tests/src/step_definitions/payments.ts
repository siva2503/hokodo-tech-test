import { Given, When, Then } from '@cucumber/cucumber'

import PaymentsPage from '../pageObjects/payments.page'

interface pageMappings {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [page: string]: any
}

const pages: pageMappings = {
  payments: PaymentsPage,
}

Given(/^I navigate to the "([^"]*)" page$/, async (page: string) => {
  await pages[page].open({ fullPath: process.env.PAYMENTS_URL })
})

When(/^I see that the payment URL provided is not expired$/, async () => {
  await PaymentsPage.validateHeaderText()
})

When(/^I see the all required sections displayed$/, async () => {
  await PaymentsPage.validateSections('paymentAuthorisation')
  await PaymentsPage.validateSections('paymentTimeline')
  await PaymentsPage.validateSections('orderSummary')
  await PaymentsPage.validateSections('contactDetails')
})

When(
  /^I choose "([^"]*)" option as my payment method$/,
  async (selectPaymentAuthOption: string) => {
    await PaymentsPage.selectPaymentAuthOption(selectPaymentAuthOption)
  },
)

When(
  /^fill in details if required for the chosen "([^"]*)" option$/,
  async (selectPaymentAuthOption: string) => {
    await PaymentsPage.fillPaymentOptions(selectPaymentAuthOption)
  },
)

When(
  /^submit payment method$/,
  async () => {
    await PaymentsPage.acceptTermsAndConditions()
    await PaymentsPage.confirmPayment()
  },
)

Then(/^the payment should be successful$/, async () => {
  async () => {
    await PaymentsPage.validatePaymentIsSuccess()
  }
})
