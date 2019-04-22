const { expect } = require('chai');
const api = require('../../page-objects/api/callback-style/api_post_request.js');

const cases = require('../../api-test-cases/api_post_testcases.js');
const global = require('../../helper/global.js');

describe('POST request ./post Callback Style', function () {
  it(`@callback ${cases.scenario.getOK.desc}`, function (done) {
    api.postAPI(global.testData, function (response) {
      expect(response.status).to.equal(cases.scenario.getOK.response);
      done();
    });
  });
});
