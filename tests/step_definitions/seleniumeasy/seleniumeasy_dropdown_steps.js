const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');

const browser = client.page.seleniumeasy.seleniumeasy_dropdown_page();


Given(/^user is at seleniumeasy dropdown list demo page$/, () => {
  return browser.navigateToDropDownPage();
});

When(/^user choose "([^"]*)" on day dropdown list$/, (day) => {
  return browser.chooseDay(day);
});

Then(/^user can see day selected "([^"]*)"$/, (day) => {
  return browser.verifySelectedDay(day);
});
