Feature: Login

    We are going to sign in linked according to our credidential in .env file 

    Scenario: Login
        Given I visit linked in main page
        When I type my credidentials 
        And click on the submit button
        Then I am redirected to my personnal page