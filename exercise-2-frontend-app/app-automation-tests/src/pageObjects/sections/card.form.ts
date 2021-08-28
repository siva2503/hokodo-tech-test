import { TestData } from '../../../testData'
import {
  verifyAndAddValue,
  verifyAndClick,
  verifyAndEnterValue,
  switchToParentFrameAndVerify,
  waitAndSwitchToIFrame,
} from '../../lib/wdioActions'
import PaymentsPage from '../payments.page'

class CreditDebitCardForm {
  /*
  ============================================================
  Page selectors
  ============================================================ 
  */
  private get cardHolderName() {
    return $('#cardholderName')
  }
  private get cardNumber() {
    return $('[name="cardnumber"]')
  }
  private get cardCVV() {
    return $('[name="cvc"]')
  }
  private get cardExpiry() {
    return $('[name="exp-date"]')
  }
  private get billingAddressLine1() {
    return $('#line1')
  }
  private get billingAddressLine2() {
    return $('#line2')
  }
  private get city() {
    return $('#cityOrTown')
  }
  private get region() {
    return $('#region')
  }
  private get postalCode() {
    return $('#postcode')
  }
  private get stripeIframe() {
    return $('//iframe[@title="Secure card payment input frame"]')
  }
  private get addCardButton() {
    return $('[data-testid="cardForm.submit"]')
  }

  /*
  ============================================================
  Page interactions
  ============================================================ 
  */

  enterCardDetails = async () => {
    const { cardData, userData } = TestData()
    await verifyAndEnterValue(
      await this.cardHolderName,
      `${userData.firstName} ${userData.lastName}`,
    )
    await waitAndSwitchToIFrame(await this.stripeIframe)
    await verifyAndAddValue(await this.cardNumber, cardData.cardNumber)
    await verifyAndAddValue(await this.cardExpiry, cardData.date)
    await verifyAndAddValue(await this.cardCVV, cardData.cvv)
    await switchToParentFrameAndVerify()
    await verifyAndEnterValue(
      await this.billingAddressLine1,
      userData.billingAddressOne,
    )
    await verifyAndEnterValue(
      await this.billingAddressLine2,
      userData.billingAddressTwo,
    )
    await verifyAndEnterValue(await this.city, userData.city)
    await verifyAndEnterValue(await this.region, userData.state)
    await verifyAndEnterValue(await this.postalCode, userData.postcode)
    // Commented to avoid payment completion
    // await verifyAndClick(await this.addCardButton)
  }
}

export default new CreditDebitCardForm()
