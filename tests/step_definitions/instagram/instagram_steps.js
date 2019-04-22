const { client } = require('nightwatch-cucumber');
const { Given, Then } = require('cucumber');

const browser = client.page.instagram.instagram_home_page();

Given(/^user is at instagram homepage$/, () => {
  return browser.navigateToInstagramHomePage();
});

Then(/^user will see instagram page$/, () => {
  return browser.assertPageTitleInstagram();
});
