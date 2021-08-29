# Tests written here are not automated


Scenario: Test adding multiple direct debit details and default direct debit account
    Given I navigate to the "payments" page
    When I enter more than one direct detbit details
    Then I should be able to switch my default direct debit detail successfully
    When use the default set direct detail for payment
    Then the payment should succeed

Scenario: Test adding multiple card detail to my account
    Given I navigate to the "payments" page
    When I enter more than one credit card detail
    Then I should be able to switch my default direct debit detail successfully
    When use the default set direct detail for payment
    Then the payment should succeed

Scenario: Field validation for direct debit and card section
    Given I navigate to the "payments" page
    When I proceed to enter new direct debit detail
    And I click on Continue leaving all fields empty in the direct debit screen
    Then Error messages must be displayed below every field
    When I proceed to enter new CARD detail
    And I click on Add Card leaving all fields empty
    Then Error messages must be displayed below every field

Scenario: Validating deletion of stored credit/debit card details 
    Given I navigate to the "payments" page
    When I delete one of my existing credit/debit card details
    Then the stored information should disapper

Scenario: Changing payment method after choosing one
    Given I navigate to the "payments" page
    When I select Invoce as my payment option
    And click on "Use payment method" option
    And later I click on "Change payment method"
    Then I should see three options again to choose one from

Scenario: Cancelling DirectDebit detail addition half way through
    Given I navigate to the "payments" page
    When I select "Direct debit" as my payment option.
    And I fill in few details required for the direct debit screen
    And I click on close window option on top left
    Then the partial information shouldnt be saved to the application

Scenario: Validate terms and conditions section
    Given I navigate to the "payments" page
    When I select Invoce as my payment option
    And click on "Use payment method" option
    Then terms and conditions radio button must be displayed
    And CONFIRM button must be in disabled state
    When I click on the terms radio button
    Then the CONFIRM button should be enabled






