const {Pool} = require('pg');


const pool = new Pool({
    connectionString: (process.env.DATABASE_URL || 'postgresql://postgres:'+ process.env.DB_PASS +'@localhost:5433/perntodo'),
    // ssl: {
    //   rejectUnauthorized: false
    // }
});

module.exports = pool;