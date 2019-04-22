const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');

const browser = client.page.seleniumeasy.seleniumeasy_radiobutton_page();


Given(/^user is at seleniumeasy radio button demo page$/, () => {
  return browser.navigateToRadioButtonPage();
});

When(/^user choose "([^"]*)" on sex list$/, (sex) => {
  return browser.chooseSex(sex);
});

Then(/^user can see sex choosen "([^"]*)"$/, (sex) => {
  return browser.verifyChoosenSex(sex);
});

When(/^user click get checked value button$/, () => {
  return browser.clickGetCheckedValueButton();
});

Then(/^user can see sex text "([^"]*)" displayed$/, (sex) => {
  return browser.sexTextDisplayed(sex);
});
