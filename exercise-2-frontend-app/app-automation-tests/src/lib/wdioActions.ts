export const verifyAndGetValue = async (element: WdioElem): Promise<string> => {
  await expect(await element).toBeDisplayed()
  const value = await element.getText()
  return value
}

export const verifyAndClick = async (element: WdioElem): Promise<void> => {
  await expect(await element).toBeDisplayed()
  await element.click()
}

export const verifyAndEnterValue = async (element: WdioElem, value: string): Promise<void> => {
  await expect(await element).toBeDisplayed()
  await element.setValue(value)
}

export const verifyAndAddValue = async (element: WdioElem, value: string): Promise<void> => {
  await expect(await element).toBeDisplayed()
  await element.addValue(value)
}

export const waitForElementToBeVisible = async (element: WdioElem): Promise<void> => {
  await browser.waitUntil(() => element.isExisting(), {
    timeout: browser.config.waitforTimeout,
    timeoutMsg: `waited for ${browser.config.waitforTimeout} seconds`
  })
}


export const waitForElementToBeEnabled = async (element: WdioElem): Promise<void> => {
  await browser.waitUntil(() => element.isEnabled(), {
    timeout: browser.config.waitforTimeout,
    timeoutMsg: `waited for ${browser.config.waitforTimeout} seconds`
  })
}

export const waitForElementToBeDisplayed = async (element: WdioElem): Promise<void> => {
  await browser.waitUntil(() => element.isDisplayed(), {
    timeout: browser.config.waitforTimeout,
    timeoutMsg: `waited for ${browser.config.waitforTimeout} seconds`
  })
}

export const waitAndSwitchToIFrame = async (element: WdioElem): Promise<void> => {
  await waitForElementToBeEnabled(element)
  await browser.switchToFrame(await element)
}

export const switchToParentFrameAndVerify = async (element?: WdioElem): Promise<void> => {
  await browser.switchToParentFrame()
  if (element) {
    await waitForElementToBeDisplayed(await element)
  }
}

export const verifyIfElementPresent = async (element: WdioElem): Promise<void> => {
  await expect(element).toBeExisting()
}

export const waitForHeaderText = async (element: WdioElem): Promise<void> => {
  await browser.waitUntil(
    async () => {
      const value = (await element.getText()).toLowerCase()
      return value === 'trade credit'
    },
    {
      timeout: 5000,
      timeoutMsg: 'Payment URL provided might have been expired/used.',
      interval: 1000,
    }
  );
}