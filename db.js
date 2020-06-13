const {Pool} = require('pg');


const pool = new Pool({
    connectionString: (process.env.DATABASE_URL || 'postgresql://postgres:gov15bees@localhost:5433/perntodo'),
    // ssl: {
    //   rejectUnauthorized: false
    // }
});

module.exports = pool;