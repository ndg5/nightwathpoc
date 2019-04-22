const { expect } = require('chai');
const api = require('../../page-objects/api/async-await-style/api_post_request.js');

const cases = require('../../api-test-cases/api_post_testcases.js');
const global = require('../../helper/global.js');

describe('POST request ./post Async Await Style', function () {
  it(`@asyncawait ${cases.scenario.getOK.desc}`, async () => {
    const response = await api.postAPI(global.testData);
    expect(response.status).to.equal(cases.scenario.getOK.response);
  });
});
