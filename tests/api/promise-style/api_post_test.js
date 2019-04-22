const { expect } = require('chai');
const Promise = require('bluebird');

const api = require('../../page-objects/api/promise-style/api_post_request.js');
const cases = require('../../api-test-cases/api_post_testcases.js');
const global = require('../../helper/global.js');

describe('POST request ./post Promise Style', () => {
  it(`@promise ${cases.scenario.getOK.desc}`, function () {
    return api.postAPI(global.testData)
      .then((response) => {
        expect(response.status).to.equal(cases.scenario.getOK.response);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  });
});
