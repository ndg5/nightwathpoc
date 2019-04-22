const { client } = require('nightwatch-cucumber');
const { Given, Then } = require('cucumber');

const browser = client.page.linkedin.linkedin_home_page();

Given(/^user is at linkedin homepage$/, () => {
  return browser.navigateToLinkedinHomePage();
});

Then(/^user will see linkedin page$/, () => {
  return browser.assertPageTitleLinkedin();
});
