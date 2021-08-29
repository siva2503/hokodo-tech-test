# Web application (Hokodo payments page) Test Strategy

## Test Scope

Payments page of HOKODO's frontend application is considered to be the scope of testing.

## Testing Tools

1. [BDD Cucumber](https://cucumber.io/docs/guides/overview/) for test design
2. [WebdriverIO](https://webdriver.io/) for browser automation.

## Test cases

Test cases designed are stored under [manual](manual) and [automatedRegression](automatedRegression) folders in BDD format.

## Automation Test Design

The below important happy paths are automated as it they contains potential to be regression test cases,

1. Payment using Direct debit
2. Payment using card details
3. Payment using invoice option

note: though all above paths are automated, they are currently commented out to avoid using all provided Payment URL.
