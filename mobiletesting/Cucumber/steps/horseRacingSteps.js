const assert = require('assert')
const { Given, When, Then } = require ("@cucumber/cucumber")

class IsItHorseRacingDay{

  constructor(today){
    this.today = today;
  }
  
  IsItHorseRacingDay() {
    if(this.today == "Wed")
      this.result = true;
    else
    this.result = false;
  }

  GetResult() {
    if(this.result)
      return "Yes";
    else
      return "No"
  }



}

let cal;

Given('Today is Sunday', function () {
  today = "Sun"
  cal = new IsItHorseRacingDay(today);
  
});

Given('Today is Wednesday', function () {
  today = "Wed"
  cal = new IsItHorseRacingDay(today);
  
});

When('I ask whether it\'s a Horse Racing day', function () {
  cal.IsItHorseRacingDay()
});


Then('I should be told {string}', function (string) {
  assert.equal(cal.GetResult(),string)
});
