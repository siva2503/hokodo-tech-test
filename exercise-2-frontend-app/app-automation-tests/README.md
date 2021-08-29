Payments Page Browser Tests
============================
## Pre-requisites

Make sure you have the following installed in your environment:

- npm (Recommended: 6 or above)
- node (Recommended: 14 or above)
- A comptaible browser installed in your machine (default is chrome)

## Installation

The project uses npm as the package manager and are required libraries are mentioned in `package.json`. `pacakage-lock.json` holds library with version details.

Ensure you are inside the automation directory `hokodo-tech-test/exercise-2-frontend-app/app-automation-tests`

      npm install

## Settings

Runtime parameters or variables that need to change for execution are added to `.env` file

| VARIABLE      |                        DESCRIPTION                         |                       DEFAULT |
|---------------|:----------------------------------------------------------:|------------------------------:|
| PAYMENTS_URL  | HOKODO payments URL - currently expires on every execution |              An Unexpired URL |
| BASE_URL      |                  HOKODO's Sandbox domain                   | https://pay-sandbox.hokodo.co |
| CHROME        |         Browser the test will be executed against          |                        Chrome |
| DEBUG_ON_FAIL |    Helps to continue with webdriver session on failure     |                         False |

Refer [Dotenv](https://github.com/motdotla/dotenv)

## Execution

Tests automated in the project can be executed by using the below npm script,

      npm run test

note: please change the `PAYMENTS_URL` env variable on every execution as it will expire. Below URLs are currently unused,

- https://pay-sandbox.hokodo.co/?design=default&order=order-4fD3JWDuLwqvz3SFLRLqf4&plan=ppln-3PBHP6rmiRxgQudSLPiUeF&key=BTEgMYO-vORzLbZKDbsEYbIqCdOa-fMZPDS8CFg4P-o&template=pptemp-H5SMNDpBpVtT7ZYqAPDntf
- https://pay-sandbox.hokodo.co/?design=default&order=order-4oQDwhXvfHccpQLpmck3JG&plan=ppln-vPPu3JfhbFK5B3Wc9rpngF&key=yckKT71APJVfGFo0eiA2S5o4_XmkHJJdutizZtKu1NI&template=pptemp-H5SMNDpBpVtT7ZYqAPDntf
- https://pay-sandbox.hokodo.co/?design=default&order=order-c7F4ghsnxqf95tmQUzjzri&plan=ppln-Xx8c4D3VqDe8PjnFEK56U5&key=0GDwP98UDNFUWIEktbBuqNkMpbUV3QhXOd-EHkMd1wM&template=pptemp-H5SMNDpBpVtT7ZYqAPDntf

## Cross Browser Test Support

The automated tests are executed in both chrome & safari browsers and can confirm that it works perfectly. If you prefer to execute in a different browser than default, you can do that by changing the `BROWSER` attribute in [.env](hokodo-tech-test/exercise-2-frontend-app/app-automation-tests/.env) file.

## TestData

Test data are randomly created on every execution using [Chance](https://chancejs.com/) library for most inputs. Bank account & card detail are currently hardcoded using data from [iban](https://iban.co.uk/examples.html) and [checkout](https://docs.checkout.com/testing/test-card-numbers) as I figured out that random values are not accepted. Refer [TestData](testData/index.ts) to have a look at the implementation.

## Debugging in VS Code

You can debug your code in VS code as required configurations are committed, you can set breakpoints & step through code if required.

Steps to debug:

- Navigate to "Run and Debug" section od VS code
- you can notice "Debug Hokodo Payments test" in dropdown
- Click on Play/Execute icon

## Reporting

[Allure](https://docs.qameta.io/allure/) is implemented with this project for reporting purposes. Allure Framework is a flexible lightweight multi-language test report tool that shows a very concise representation of what have been tested in a neat web report form.

A sample report below,
![allurereport](https://user-images.githubusercontent.com/13304448/131235002-124d2a1d-ef7a-4416-b537-9348e51fcbb4.gif)



## General test Design followed

The project follow Page Object modal for easy readability, maintenance. Also, Behavioural driven development(BDD) approach is taken to explain test scenarios for everyone to understand without having to look at the underlying code.
