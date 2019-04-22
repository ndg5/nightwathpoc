const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');

const browser = client.page.bizzy.home_page();

Given(/^user is at Bizzy homepage$/, () => {
  return browser.navigateToHomePage();
});

Then(/^the homepage title is correct$/, () => {
  return browser.assertPageTitle();
});

When(/^user click link text "([^"]*)"$/, (linkText) => {
  return browser.clickLinkText(linkText);
});
