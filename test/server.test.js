const request = require('supertest');
const app = require('../app/server');

describe('Teste do endpoint raiz', () => {
  it('Deve retornar uma mensagem de boas-vindas', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Bem-vindo à minha API!');
  });
});