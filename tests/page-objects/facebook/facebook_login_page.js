/* eslint no-unused-vars: off */

const env = require('dotenv').config();
const { client } = require('nightwatch-cucumber');
const base = require('bizzy-nightwatch-base-page');

const facebookLogin = {
  url: function () {
    const url = base.setURL(`${process.env.BASE_URL_FACEBOOK}/login`);
    return url;
  },
  testData: {
    emailData: process.env.FACEBOOK_USERNAME,
    passData: process.env.FACEBOOK_PASSWORD,
  },
  elements: {
    email: '#email',
    pass: '#pass',
    buttonLogin: '#loginbutton',
  },
  commands: [{
    navigateToFacebookHomePage: function () {
      return this.navigate();
    },
    clickLoginButton: function () {
      base.clickButton(this, facebookLogin.elements.buttonLogin);
    },
    setUserPass: function () {
      base.setValueTextField(this, facebookLogin.elements.email, facebookLogin.testData.emailData);
      base.setValueTextField(this, facebookLogin.elements.pass, facebookLogin.testData.passData);
    },
  }],
};

module.exports = facebookLogin;
