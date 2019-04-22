const { expect } = require('chai');
const api = require('../../page-objects/api/callback-style/api_get_request.js');
const cases = require('../../api-test-cases/api_get_testcases.js');

describe('@callback GET Request ./get Callback Style', () => {
  it(cases.scenario.getOK.desc, function (done) {
    api.getAPI(function (response) {
      expect(response.status).to.equal(cases.scenario.getOK.response);
      done();
    });
  });
});
