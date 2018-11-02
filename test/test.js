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

// GET /stops
describe('GET /stops', () => {
  it('should return a list of stops', done => {
    request(app)
      .get('/stops')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(res => {
        if (typeof res.body !== 'object') throw new Error();
        if (!res.body[0].code) throw new Error();
      })
      .end(done);
  });
});
