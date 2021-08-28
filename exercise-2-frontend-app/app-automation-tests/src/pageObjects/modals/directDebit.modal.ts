import {
  switchToParentFrameAndVerify,
  verifyAndAddValue,
  verifyAndClick,
  waitAndSwitchToIFrame,
} from '../../lib/wdioActions'
import PaymentsPage from '../payments.page'
import { TestData } from '../../../testData'

class DirectDebitModal {
  /*
  ============================================================
  Page selectors
  ============================================================ 
  */
  private get directDebitModalIFrame() {
    return $('#iframeId')
  }
  private get individualDirectDebit() {
    return $('[value="individual"]')
  }
  private get ddFirstName() {
    return $('[name="givenName"]')
  }
  private get ddLastName() {
    return $('[name="familyName"]')
  }
  private get ddSortCode() {
    return $('[name="branchCode"]')
  }
  private get ddAccountNumber() {
    return $('[name="accountNumber"]')
  }
  private get ddBillingAddressLine1() {
    return $('[name="addressLine1"]')
  }
  private get ddBillingAddressLine2() {
    return $('[name="addressLine2"]')
  }
  private get ddTown() {
    return $('[name="city"]')
  }
  private get ddPostCode() {
    return $('[name="postalCode"]')
  }
  private get ddEmailAddress() {
    return $('[name="email"]')
  }
  private get ddContinue() {
    return $('[type="submit"]')
  }
  private get setUpDirectDebit() {
    return $('button=Set up this Direct Debit')
  }
  private get closeDirectDebitWindow() {
    return $('button=Close this window')
  }

  // Set up this Direct Debit

  // Close this window
  /*
  ============================================================
  Page interactions
  ============================================================ 
  */

  enterDirectDebitDetailsAndSubmit = async () => {
    await waitAndSwitchToIFrame(await this.directDebitModalIFrame)

    const { ddData, userData } = TestData()
    await verifyAndAddValue(await this.ddFirstName, userData.firstName)
    await verifyAndAddValue(await this.ddLastName, userData.lastName)
    await verifyAndAddValue(await this.ddSortCode, ddData.sortCode)
    await verifyAndAddValue(
      await this.ddAccountNumber,
      ddData.accountNumber,
    )
    await verifyAndAddValue(
      await this.ddBillingAddressLine1,
      userData.billingAddressOne,
    )
    await verifyAndAddValue(
      await this.ddBillingAddressLine2,
      userData.billingAddressTwo,
    )
    await verifyAndAddValue(await this.ddTown, userData.city)
    await verifyAndAddValue(await this.ddPostCode, userData.postcode)
    await verifyAndAddValue(
      await this.ddEmailAddress,
      userData.emailAddress,
    )
    await verifyAndClick(await this.ddContinue)

    await verifyAndClick(await this.setUpDirectDebit)

    // Commented to avoid payment completion
    // await verifyAndClick(await this.closeDirectDebitWindow)
    // await switchToParentFrameAndVerify()
  }
}

export default new DirectDebitModal()
