import pgPromise from 'pg-promise';

const DATABASE_URL = process.env.DATABASE_URL;

if(!DATABASE_URL) {
  throw new Error('DATABASE_URL must be defined');
}

const pg = pgPromise();

export const db = pg(DATABASE_URL);
