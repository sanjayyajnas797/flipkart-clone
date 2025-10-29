const sql = require('mssql');
require('dotenv').config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  port: 1433, // ✅ Add this
  options: {
    encrypt: false, // ✅ Set to false for local/internal network
    trustServerCertificate: true,
  },
};

const pool = new sql.ConnectionPool(config);
let poolConnect = null;

const connect = async () => {
  try {
    console.log('Connecting to SQL Server...');
    if (!poolConnect) {
      poolConnect = pool.connect();
      await poolConnect;
      console.log('✅ Connected to SQL Server');
    }
  } catch (err) {
    console.error('❌ SQL Server connection error:', err.message);
  }
};

module.exports = { sql, pool, connect, poolConnect };
