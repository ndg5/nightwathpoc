/* eslint no-unused-vars: off */

const env = require('dotenv').config();
const base = require('bizzy-nightwatch-base-page');

const dropdown = {
  url: function setUrl() {
    const url = base.setURL(`${process.env.BASE_URL_SELENIUMEASY_PRACTICE}/basic-select-dropdown-demo.html`);
    return url;
  },
  elements: {
    dayList: '#select-demo',
    dayDisplay: 'p.selected-value',
  },
  commands: [{
    navigateToDropDownPage: function () {
      return this.navigate();
    },
    chooseDay: function (selectedOption) {
      return base.chooseOptionValue(this, dropdown.elements.dayList, selectedOption);
    },
    verifySelectedDay: function (selectedDay) {
      return base.assertParagraphContainsText(this, dropdown.elements.dayDisplay, selectedDay);
    },
  }],
};

module.exports = dropdown;
