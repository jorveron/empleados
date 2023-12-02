const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: '5440',
    user: 'test',
    password: 'test123',
    database: 'personas',
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
