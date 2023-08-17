Feature: Is it a Horse Racing day in Happy Valley?

    Scenario: Today isn't a Horse Racing day
        Given Today is Sunday
        When I ask whether it's a Horse Racing day
        Then I should be told "No"


    Scenario: Today is a Horse Racing day
        Given Today is Wednesday
        When I ask whether it's a Horse Racing day
        Then I should be told "Yes"