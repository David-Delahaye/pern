const {Client} = require('./node_modules/pg').Pool;


const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
});

client.connect();
module.exports = client;