Feature: API tests for HOKODO's List Quotes endpoint

# ============================================================ #
# List All Quotes - Test scenarios-  GET /v1/quotes
# ============================================================ #

# Prerequisite
Background: Given I am a "NEW" user with authorization to access HOKODO's list & request quote endpoints - GET /v1/quotes & POST /v1/quotes

# Scenario 1
Scenario: List all currently requested quotes and if new Quote creation is reflected in the list Quote response.

# Test Steps
  When I request a new quote with value in the only mandatory field "transaction"
  And I request another new quote with value in the only mandatory field "transaction"
  Then the previously requested quote;s status must be set to "declined"
  And I receive a quote with status as "offered"
  When I perform a GET query to retrieve the list of all requested quotes
  Then the response must contain "2" quotes with correct statuscode and other information





# Prerequisite
Background: Given I am a "NEW" user with authorization to access HOKODO's list & request quote endpoints - GET /v1/quotes & POST /v1/quotes

# Scenario 2
Scenario: Listing quotes for an user who is without any quote

# Test Steps
  When I request a new quote with value in the only mandatory field "transaction"
  And I delete the newly created quote using "DELETE /v1/quotes" endpoint
  And I perform a GET query to retrieve the list of all requested quotes
  Then the Quote list retrieved in the response should be empty.

