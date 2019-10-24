import { ExpectedConditions, browser } from 'protractor';

export async function waitBrowserTitleEqualsTo(expectedTitle: string) {
  await browser.wait(ExpectedConditions.titleIs(expectedTitle), 10000);
}

export async function waitForAlert() {
  await browser.wait(ExpectedConditions.alertIsPresent(), 5000);
}

export async function waitForAlertToHaveText(expectedText: string) {
  await browser.wait(ExpectedConditions.alertIsPresent(), 5000);
  const alertText = await browser.switchTo().alert().getText();
  return alertText === expectedText;
}

export async function waitForAlertToContainText(expectedText: string) {
  await browser.wait(ExpectedConditions.alertIsPresent(), 5000);
  const alertText = await browser.switchTo().alert().getText();
  return alertText.includes(expectedText);
}
