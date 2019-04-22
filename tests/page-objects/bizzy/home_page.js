/* eslint no-unused-vars: off */

const env = require('dotenv').config();
const { client } = require('nightwatch-cucumber');
const base = require('bizzy-nightwatch-base-page');

const home = {
  url: function setUrl() {
    const url = base.setURL(process.env.BASE_URL);
    return url;
  },
  testData: {
    pageTitle: 'Bizzy | e-Marketplace B2B & platform e-Procurement terdepan di Indonesia',
  },
  elements: {
    linkTextCustomerRegister: '.ts-button-registernow',
  },
  commands: [{
    navigateToHomePage: function () {
      return this.navigate();
    },
    assertPageTitle: function () {
      return base.assertPageTitle(this, home.testData.pageTitle);
    },
    clickLinkText: function (linkText) {
      if (linkText === 'Daftar Sekarang') {
        base.clickLinkText(this, '@linkTextCustomerRegister');
      }
    },
  }],
};

module.exports = home;
