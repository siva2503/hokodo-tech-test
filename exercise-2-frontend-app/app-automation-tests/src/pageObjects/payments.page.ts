import {
  verifyAndClick,
  verifyIfElementPresent,
  waitForElementToBeVisible,
  waitForHeaderText,
} from '../lib/wdioActions'
import Page from './page'
import directDebitModal from './modals/directDebit.modal'
import creditDebitCardForm from './sections/card.form'
import invoicePayment from './sections/invoicePayment.section'

class PaymentsPage extends Page {
  /*
============================================================
Page selectors
============================================================ 
*/
  sectionComponent(sectionName: string) {
    return $(`[data-testid="${sectionName}"]`)
  }

  private get headerText() {
    return $('h1')
  }
  private paymentOption(optionName: string) {
    return $(`label[for="${optionName}"]`)
  }
  private get debitCardDetailsSection() {
    return this.sectionComponent('cardForm')
  }


  private get addDirectDebitDetails() {
    return $('[data-testid="paymentSelection.addPaymentMethod"]')
  }

  private get termsRadioButton() {
    return $('[data-testid="customCheckbox"]')
  }

  private get confirmPaymentButton() {
    return $('[data-testid="paymentConfirmation.submitButton"]')
  }

  private get useThisPaymentMethodButton() {
    return $('button=Use this payment method')
  }

  /*
============================================================
Page interactions
============================================================ 
*/

  async validateHeaderText() {
    await waitForHeaderText(await this.headerText)
  }

  async validateSections(sectionName: string): Promise<void> {
    await expect(this.sectionComponent(sectionName)).toBeExisting()
  }

  async selectPaymentAuthOption(optionName: string): Promise<void> {
    await verifyAndClick(await this.paymentOption(optionName))
  }

  async fillPaymentOptions(optionName: string) {
    if (optionName.includes('direct_debit')) {
      await verifyAndClick(await this.addDirectDebitDetails)
      await directDebitModal.enterDirectDebitDetailsAndSubmit()
      // Commented to avoid payment completion
      // await verifyAndClick(await this.useThisPaymentMethodButton)
    } else if (optionName.includes('card')) {
      await creditDebitCardForm.enterCardDetails()
    } else {
      await invoicePayment.acceptInvoicePayment()
    }
  }

  async acceptTermsAndConditions() {
    await verifyAndClick(await this.termsRadioButton)
  }

  async confirmPayment() {
    await verifyAndClick(await this.confirmPaymentButton)
  }

  async validatePaymentIsSuccess() {
    const urlName = await browser.getUrl()
    expect(urlName).toContain('www.hokodo.co/payment/ok')
  }
}

export default new PaymentsPage()
