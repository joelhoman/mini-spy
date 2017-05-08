const assert = require('assert');
const request = require('supertest');
const app = require('../app');
const { StaffMember } = require('../server/models');
const RoleController = require('../server/controllers/roles');

function postRequest(username, password, firstName, lastName, roles) {
  return request(app).post('/staffmembers').send({ username, password,
      firstName, lastName, roles });
}

describe('In the staffmember controller', () => {
  beforeEach((done) => {
    StaffMember.truncate({ cascade: true, restartIdentity: true });
    done();
  });

  // TODO deal with the roles in the post and get, might need id

  it('POST /staffmembers responds with a 201 and the created staffmember on success', (done) => {
    postRequest('JBizzle', 'isdope', 'JB', 'Morris', {name: 'boss', description: 'bosses'})
      .expect(201)
      .expect('Content-Type', /json/)
      .expect(/"username":\s*"JBizzle"/)
      .expect(/"password":\s*"isdope"/)
      .expect(/"firstName":\s*"JB"/)
      .expect(/"lastName":\s*"Morris"/, done);
      // .expect()

  });

  // it('GET /roles responds with a 200 on success', () =>
  //   postRequest('admin', 'Running the show').expect(201)
  //     .then(() => postRequest('founder', 'Starting it up').expect(201))
  //     .then(() => postRequest('case manager', 'Helping').expect(201))
  //     .then(() => postRequest('volunteer', 'Donating the time').expect(201))
  //     .then(() => request(app).get('/roles').expect(200))
  //     .then((res) => {
  //       assert.equal(res.body.length, 4);
  //       assert.deepEqual(res.body[0], { name: 'admin', description: 'Running the show' });
  //       assert.deepEqual(res.body[1], { name: 'case manager', description: 'Helping' });
  //       assert.deepEqual(res.body[2], { name: 'founder', description: 'Starting it up' });
  //       assert.deepEqual(res.body[3], { name: 'volunteer', description: 'Donating the time' });
  //     }) // eslint-disable-line comma-dangle
  //   );
});
