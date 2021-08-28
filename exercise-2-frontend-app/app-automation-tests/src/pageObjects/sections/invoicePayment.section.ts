import { verifyAndClick, verifyIfElementPresent } from '../../lib/wdioActions'

class InvoicePaymentSection {
  /*
  ============================================================
  Page selectors
  ============================================================ 
  */
  private get useThisPaymentMethodButton() {
    return $(
      '[data-testid="paymentMethods.invoice.selectPaymentMethodBtn"]',
    )
  }
  private get invoiceAddressSection() {
    return $('[data-testid="paymentMethod.invoice.details"]')
  }

  /*
  ============================================================
  Page interactions
  ============================================================ 
  */

  acceptInvoicePayment = async () => {
    await verifyIfElementPresent(await this.invoiceAddressSection)
    await verifyAndClick(await this.useThisPaymentMethodButton)
  }
}

export default new InvoicePaymentSection()
