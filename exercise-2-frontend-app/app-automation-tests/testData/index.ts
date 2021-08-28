import Chance from 'chance'

interface DirectDebitDetail {
  sortCode: string
  accountNumber: string
}

interface UserData {
  firstName: string
  lastName: string
  billingAddressOne: string
  billingAddressTwo: string
  state: string
  city: string
  postcode: string
  emailAddress: string
}

interface DebitCard {
  cardNumber: string
  cvv: string
  date: string
}

interface TestDataCollection {
  ddData: DirectDebitDetail
  cardData: DebitCard
  userData: UserData
}

export const TestData = (): TestDataCollection => {
  const randomData = new Chance()
  const userData: UserData = {
    firstName: randomData.first(),
    lastName: randomData.last(),
    billingAddressOne: randomData.address(),
    billingAddressTwo: randomData.address(),
    city: randomData.city(),
    state: randomData.state(),
    // postcode: randomData.postcode(),
    // Hardcoded because valid postcode is required.
    postcode: "E6 6NT",
    emailAddress: randomData.email(),
  }
  const directDebitData: DirectDebitDetail = {
    // source: https://iban.co.uk/examples.html
    sortCode: "100000",
    accountNumber: "31510604",
  }
  const visaTestCard: DebitCard = {
    //source: https://docs.checkout.com/testing/test-card-numbers
    cardNumber: '4242424242424242',
    cvv: '100',
    date: '1230',
  }

  return { userData, ddData: directDebitData, cardData: visaTestCard }
}
