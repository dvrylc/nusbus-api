const app = require('../index');
const request = require('supertest');

// GET /
const apiInfo = require('../package.json');
describe('GET /', () => {
  it('should return API info', done => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(apiInfo)
      .end(done);
  });
});
