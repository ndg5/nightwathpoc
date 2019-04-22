const sum = require('./sum');
const { expect } = require('chai');

describe('Test Suites', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).to.be.equal(3, "Result != expected, expected should be 3");
  });
});