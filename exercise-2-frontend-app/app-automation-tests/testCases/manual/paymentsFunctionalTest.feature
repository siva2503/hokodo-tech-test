Scenario: Test all possible payment options available in HOKODO payments page
    Given I navigate to the "payments" page
    When I see that the payment URL provided is not expired
    And I see the all required sections displayed
    When I choose "invoice" option as my payment method
    And fill in details if required for the chosen "invoice" option
    And submit payment method
    Then the payment should be successful
