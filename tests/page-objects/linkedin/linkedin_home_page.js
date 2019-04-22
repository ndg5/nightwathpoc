/* eslint no-unused-vars: off */

const env = require('dotenv').config();
const { client } = require('nightwatch-cucumber');
const base = require('bizzy-nightwatch-base-page');

const linkedinHome = {
  url: function setUrl() {
    const url = base.setURL(process.env.BASE_URL_LINKEDIN);
    return url;
  },
  elements: {
    pageTitleLinkedin: 'LinkedIn: Log In or Sign Up',
  },
  commands: [{
    navigateToLinkedinHomePage: function () {
      return this.navigate();
    },
    assertPageTitleLinkedin: function () {
      return base.assertPageTitle(this, linkedinHome.elements.pageTitleLinkedin);
    },
  }],
};

module.exports = linkedinHome;
