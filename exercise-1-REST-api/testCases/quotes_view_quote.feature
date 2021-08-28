Feature: API tests for HOKODO's View Quote endpoint

# ============================================================ #
# View Quote - Test scenarios-  GET /v1/quotes/<quote_id>
# ============================================================ #


# Pre-requisite for all scenarios in this feature file
Background: Given I am a "NEW" user with authorization to access HOKODO's list & request quote endpoints - GET /v1/quotes & POST /v1/quotes

# Scenario 1
Scenario: Retrieve quote using quote_id
  When I request a new quote with value in the only mandatory field "transaction"
  And I view the quote with newly created quote_id using "GET /v1/quotes/<quote_id>"
  Then the view quote response must display details about the quote




# Scenario 2
Scenario: Retrieve quote using quote_id of a deleted quote
  When I request a new quote with value in the only mandatory field "transaction"
  And I delete the quote using "DELETE /v1/quotes/<newly_created_quoteid>" endpoint
  Then the view quote should fail with "404" as its statuscode as the quote is not anymore existing
