let wd = require('wd');
let assert = require('assert');
let asserters = wd.asserters;
let Q = wd.Q;

let desiredCaps = [{
  // Set your BrowserStack access credentials
  'browserstack.user' : 'gloriachan_zqPMu2',
  'browserstack.key' : 'MpsBbFByNqeV6ESrh1kt',

    // Set URL of the application under test
  'app' : 'bs://f58e4b367e08625ebdf3f7af429277e420d9d073',
 

  // Specify device and os_version for testing
  'device' : 'iPhone 11 Pro',
  'os_version' : '13',

  // Set other BrowserStack capabilities
  'project' : 'BrowserStack Example',
  'build' : 'Node iOS',
  'name': 'BrowserStack Example'
},
{
  // Set your BrowserStack access credentials
  'browserstack.user' : 'gloriachan_zqPMu2',
  'browserstack.key' : 'MpsBbFByNqeV6ESrh1kt',

    // Set URL of the application under test
  'app' : 'bs://f58e4b367e08625ebdf3f7af429277e420d9d073',
 

  // Specify device and os_version for testing
  'device' : 'iPhone 11',
  'os_version' : '13',

  // Set other BrowserStack capabilities
  'project' : 'BrowserStack Example',
  'build' : 'Node iOS',
  'name': 'BrowserStack Example'
}
];


let drivers = [];
desiredCaps.forEach((caps) => {
  let driver = wd.promiseRemote("http://hub-cloud.browserstack.com/wd/hub");
  drivers.push(driver);
});

drivers.map((driver, index) => {
  return driver.init(desiredCaps[index])
  .then(function () {
    return driver.waitForElementById('Text Button', asserters.isDisplayed 
    && asserters.isEnabled, 30000);
  })
  .then(function (textButton) {
    return textButton.click();
  })
  .then(function () {
    return driver.waitForElementById('Text Input', asserters.isDisplayed 
    && asserters.isEnabled, 30000);
  })
  .then(function (textInput) {
    return textInput.sendKeys("helloHKJC@email.com"+"\n");
  })
  .then(function () {
    return driver.waitForElementById('Text Output', asserters.isDisplayed 
    && asserters.isEnabled, 30000);
  })
  .then(function (textOutput) {
    return textOutput.text().then(function(value) {
      if (value === "helloHKJC@email.com")
        assert(true);
      else
        assert(false);
    });
  })
  .fin(function() { 
    // Invoke driver.quit() after the test is done to indicate that the test is completed.
    return driver.quit(); 
  }).done()
  
});

