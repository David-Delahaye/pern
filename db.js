const {Client} = require('pg');
const db_PORT = (process.env.DATABASE_URL || '3000');

const client = new Client({
    connectionString: db_PORT,
    ssl: {
      rejectUnauthorized: false
    }
});

client.connect();
module.exports = client;