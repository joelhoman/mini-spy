const { Role } = require('../server/models');
const app = require('../app');
const request = require('supertest');

describe('POST /roles', () => {
  beforeEach((done) => {
    Role.truncate({ cascade: true, restartIdentity: true });
    done();
  });
  it('responds with a 201 the created role on success', (done) => {
    request(app)
      .post('/roles')
      .send({ name: 'admin', description: 'They administrate' })
      .set('Accept', 'application/json')
      .expect(201)
      .expect('Content-Type', /json/)
      .expect(/"name":\s*"admin"/)
      .expect(/"description":\s*"They administrate"/, done);
  });
});
