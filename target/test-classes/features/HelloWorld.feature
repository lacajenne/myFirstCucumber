Feature: the Hello World class
  As a user
  I want to test the Hello World class
  So that I check that I get the right message

  Scenario: check the message
    Given I have an HelloWorld instance
    Then The message should be Hello, World!