const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "tasksdb",
  password: "Maity@06",
  port: 5432,
});

module.exports = pool;
