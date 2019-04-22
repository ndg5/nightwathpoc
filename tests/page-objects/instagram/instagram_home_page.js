/* eslint no-unused-vars: off */

const env = require('dotenv').config();
const { client } = require('nightwatch-cucumber');
const base = require('bizzy-nightwatch-base-page');

const instagramHome = {
  url: function setUrl() {
    const url = base.setURL(process.env.BASE_URL_INSTAGRAM);
    return url;
  },
  elements: {
    pageTitleInstagram: 'Instagram',
  },
  commands: [{
    navigateToInstagramHomePage: function () {
      return this.navigate();
    },
    assertPageTitleInstagram: function () {
      return base.assertPageTitle(this, instagramHome.elements.pageTitleInstagram);
    },
  }],
};

module.exports = instagramHome;
