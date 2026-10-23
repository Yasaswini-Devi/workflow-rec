const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
  it('should return "DevOps Docker Application" with status 200', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('DevOps Docker Application');
  });
});