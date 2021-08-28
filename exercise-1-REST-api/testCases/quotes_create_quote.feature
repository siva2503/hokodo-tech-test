Feature: API tests for HOKODO's create quote endpoint

# ============================================================ #
# Quote Request - Test scenarios-  POST /v1/quotes
# ============================================================ #

# Pre-requisite for all scenarios in this feature file
Background: Given I am authorized to request new quote through HOKODO's endpoint - POST /v1/quotes

# Scenario 1
Scenario: Quote creation with Transaction attribute
  # Test steps  
  When I request a quote with value in the only mandatory field "transaction"
  Then I receive a quote with status as "offered"
  And the receive quote should contain all important information "createdTime, valid_until, insured currency/amount, total_price, premium, price, etc.,"
  # note: while automating a contract could be placed for above to confirm every field is returned.
  And the "Client" is defaulted to transaction's debtor




# Scenario 2
Scenario: Quote creation WITHOUT Transaction attribute
  # Test steps
  When I request a quote WITHOUT value in the only mandatory field "transaction"
  Then the request quote should fail with "400" as its statuscode




# Scenario 3
Scenario: Quote creation with Transaction & Client API Key
  # Test steps
  When I request a quote with "transaction" with client API unique identifier in the "Client" field
  Then I receive a quote with all important informations "status, createdTime, valid_until, insured currency/amount, total_price, premium, price, etc.,"
  And the "Client" is correctly mapped to the provided Client




# Scenario 4
Scenario: Quote creation with Transaction & Client attributes
  # Test steps
  When I request a quote with "transaction", "client_country" and "client_name"
  Then I receive a quote with all important informations "status, createdTime, valid_until, insured currency/amount, total_price, premium, price, etc.,"
  And the "Client" is correctly mapped to the provided Client

