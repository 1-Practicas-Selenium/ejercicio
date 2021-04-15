Feature: Search Page

  Scenario: Home page correct
    Given I open tvShow website
    When It is correct website
    Then I will be in Home Page
	
 	Scenario: Search box is empty
    Given I open tvShow website
    When I do a search empty
    Then The search don't show me nothing
    
	Scenario: Search box with empty characters
    Given I open tvShow website
    When Enter a empty characters
    And I press the button search
    Then The search don't show me nothing
 
 	Scenario: Show a list of items
    Given I open tvShow website
    When Enter a information correct
    And I press the button search
    Then Show me a list of items
