# AUTOMATED Tests

Feature: Validate functionalities of HOKODO payments page 

  Scenario Outline: Test all possible payment options available in HOKODO payments page
    Given I navigate to the "payments" page
    When I see that the payment URL provided is not expired
    And I see the all required sections displayed
    When I choose "<paymentMethod>" option as my payment method
    And fill in details if required for the chosen "<paymentMethod>" option
    # Commented as once submitted the payment link will expire.
    # And submit payment method
    # Then the payment should be successful

# note: the test will be executed for 3 iterations with the below provided payment methods
# Refer: https://cucumber.io/docs/gherkin/reference/#:~:text=A%20Scenario%20Outline%20must%20contain,counting%20the%20first%20header%20row)
    Examples:
    |paymentMethod|
    |invoice|
    |card|
    |direct_debit|


  Scenario: Complete payments using invoice payment option in HOKODO payments page
    Given I navigate to the "payments" page
    When I see that the payment URL provided is not expired
    And I see the all required sections displayed
    When I choose "invoice" option as my payment method
    And fill in details if required for the chosen "invoice" option
    And submit payment method
    Then the payment should be successful
