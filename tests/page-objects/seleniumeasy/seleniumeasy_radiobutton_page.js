/* eslint no-unused-vars: off */

const env = require('dotenv').config();
const base = require('bizzy-nightwatch-base-page');

const radiobutton = {
  url: function setUrl() {
    const url = base.setURL(`${process.env.BASE_URL_SELENIUMEASY_PRACTICE}/basic-radiobutton-demo.html`);
    return url;
  },
  elements: {
    sexOption: '.radio-inline',
    checkValueButton: '#buttoncheck',
    textDisplayed: 'p.radiobutton',
  },
  commands: [{
    navigateToRadioButtonPage: function () {
      return this.navigate();
    },
    chooseSex: function (sex) {
      return base.selectRadioButtonByValue(this, radiobutton.elements.sexOption, sex);
    },
    verifyChoosenSex: function (choosenSex) {
      return base.expectRadioButtonSelectedValue(this, radiobutton.elements.sexOption, choosenSex);
    },
    clickGetCheckedValueButton: function () {
      return base.clickButton(this, '@checkValueButton');
    },
    sexTextDisplayed: function (choosenSex) {
      const expectedText = `Radio button '${choosenSex}' is checked`;
      return base.assertParagraphContainsText(this, '@textDisplayed', expectedText);
    },
  }],
};

module.exports = radiobutton;
