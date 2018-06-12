Feature: basic navigation
  As a user
  I want to visit the Wikipedia web page
  So that I test web navigation

  Scenario: visit the test page
    Given I navigate to the test website
    Then I find the logo

  Scenario: make a simple search
    Given I navigate to the test website
    And I make a simple search
