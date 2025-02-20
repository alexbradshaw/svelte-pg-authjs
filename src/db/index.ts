import pg from 'pg';
const { Pool } = pg;

export const pool = new Pool(
  process.env.CONNECTION_STRING
    ? {
        connectionString: process.env.CONNECTION_STRING,
      }
    : {
        user: 'templateuser',
        host: '0.0.0.0',
        database: 'templateDB',
        password: 'testpassword',
        port: 5435,
      },
);

// eslint-disable-next-line
export const query = (text: string, params?: any[]) => pool.query(text, params);
