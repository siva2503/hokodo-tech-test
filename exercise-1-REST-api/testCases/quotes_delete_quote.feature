Feature: API tests for HOKODO's Delete Quote endpoint

# ============================================================ #
# Delete quote - Test Scenarios - DELETE /v1/quotes
# ============================================================ #
Background: Given I am authorized to access HOKODO's create, delete quote endpoint - `DELETE /v1/quotes` & `POST /v1/quotes`

# Scenario 1
Scenario: Delete a quote using quote_id
  When I request another new quote with value in the only mandatory field "transaction"
  And I delete the newly created quote using "DELETE /v1/quotes<newly_created_quoteid>" endpoint
  Then the delete request should succeed  




# Scenario 2
# Prerequisite: details about an accepted query.
Scenario: Delete a quote that is already accepted
  Given I have details of an accepted Quote
  And I delete the accepted quote using "DELETE /v1/quotes<accepted_quoteid>" endpoint
  Then the delete request should fail with "409" status code




# Scenario 3
Scenario: Delete a quote with quote_id that is invalid
  When I hit the delete request endpoint "DELETE /v1/quotes<invalid_quoteid>" with invalid quoteid
  Then the delete request should fail with "404" status code


