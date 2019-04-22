const { client } = require('nightwatch-cucumber');
const { Then } = require('cucumber');

const browser = client.page.bizzy.customer.registration.register_page();

Then(/^user will see customer registration page$/, () => {
  return browser.assertPageTitleCustomerRegist();
});
