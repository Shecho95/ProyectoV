const { Pool } = require("pg")
// Coloca aquí tus credenciales
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "database",
  password: "5617",
  port: 5432,
});
module.exports = pool;