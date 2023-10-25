// PG database client/connection setup
const { Pool } = require('pg');

const dbParams = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
};

const db = new Pool(dbParams);
// Log when connected
db.on('connect', () => {console.log('Connected to ElephantSQL');});
// Log connection errors
db.on('error', (err) => {console.error('Error connecting to ElephantSQL:', err);});

db.connect();

module.exports = db;
