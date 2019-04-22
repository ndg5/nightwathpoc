const { expect } = require('chai');
const Promise = require('bluebird');

const api = require('../../page-objects/api/promise-style/api_get_request.js');
const cases = require('../../api-test-cases/api_get_testcases.js');

describe('@promise GET Request ./get Promise Style', () => {
  it(cases.scenario.getOK.desc, function () {
    return api.getAPI()
      .then((response) => {
        expect(response.status).to.equal(cases.scenario.getOK.response);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  });
});
