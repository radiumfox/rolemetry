import request from 'supertest';
import { describe, expect, it } from 'vitest';

process.env.NODE_ENV = 'test';
process.env.DATABASE_URL = 'postgresql://postgres:postgres@localhost:5432/rolemetry_test?schema=public';

const { app } = await import('@/app.js');

describe('app bootstrap', () => {
  it('is an Express app that responds', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(404);
  });

  it('sets security headers via helmet', async () => {
    const res = await request(app).get('/');
    expect(res.headers['x-content-type-options']).toBe('nosniff');
  });
});