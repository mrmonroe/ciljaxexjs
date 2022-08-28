const request = require('supertest');
const baseURL = 'http://localhost:3000';

describe('GET requests/new ', () => {
  it('should return 200', async () => {
    const response = await request(baseURL).get('/requests/new');
    expect(response.statusCode).toBe(200);
    expect(response.body.error).toBe(undefined);
  });
});
