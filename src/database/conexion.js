const { Pool } = require("pg")
// Coloca aquí tus credenciales
const pool = new Pool({
  user: "enkcgzjvtnvvzd",
  host: "ec2-44-199-49-128.compute-1.amazonaws.com",
  database: "da6d6hctcil9pq",
  password: "56aaac1c538ed4e280cad6e47c2219e717b25672bc6777e118808776d2b2431c",
  port: 5432,
});
module.exports = pool;

