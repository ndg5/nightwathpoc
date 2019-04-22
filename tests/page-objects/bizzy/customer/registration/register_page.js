/* eslint no-unused-vars: off */

const env = require('dotenv').config();
const { client } = require('nightwatch-cucumber');
const base = require('bizzy-nightwatch-base-page');

const customerRegistration = {
  url: function setUrl() {
    const url = base.setURL(process.env.BASE_URL);
    return url;
  },
  testData: {
    pageTitle: 'Bizzy - Register',
  },
  elements: {
    linkTextRegister: '.ts-button-registernow',
  },
  commands: [{
    navigateToHomePage: function () {
      return this.navigate();
    },
    assertPageTitleCustomerRegist: function () {
      return base.assertPageTitle(this, customerRegistration.testData.pageTitle);
    },
  }],
};

module.exports = customerRegistration;
