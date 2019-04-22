/* eslint no-unused-vars: off */

const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.API_BASE_URL);

const Path = '/post';

const postAPI = function (body, response) {
  api.post(Path)
    .set('Content-Type', 'application/json')
    .send(body)
    .end(function (err, result) {
      response(result);
    });
};

module.exports = {
  postAPI,
};
