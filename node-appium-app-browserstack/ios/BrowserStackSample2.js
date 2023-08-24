let wd = require('wd');
let assert = require('assert');
let asserters = wd.asserters;
let Q = wd.Q;

desiredCaps = {
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
  'name': 'BrowserStack Example 2'
};

// Initialize the remote Webdriver using BrowserStack remote URL
// and desired capabilities defined above
driver = wd.promiseRemote("http://hub-cloud.browserstack.com/wd/hub");

// Test case for the BrowserStack sample iOS app. 
// If you have uploaded your app, update the test case here.
driver.init(desiredCaps)
  .then(function () {
    return driver.getWindowSize()
  })
  .then(function (size) {
    return driver.waitForElementById('Text Input', asserters.isDisplayed 
    && asserters.isEnabled, 30000);
  })
  .then(function (textInput) {
    return assert(textInput.isClickable());
  })
  // .then(function () {
  //   return driver.waitForElementById('Text Output', asserters.isDisplayed 
  //   && asserters.isEnabled, 30000);
  // })
  // .then(function (textOutput) {
  //   return textOutput.text().then(function(value) {
  //     if (value === "helloHKJC@email.com")
  //       assert(true);
  //     else
  //       assert(false);
  //   });
  // })
  .fin(function() { 
    // Invoke driver.quit() after the test is done to indicate that the test is completed.
    return driver.quit(); 
  })
  .done();