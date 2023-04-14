// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "golden",
//   password: "password",
//   database: "node_complete",
// });

// module.exports = pool.promise();

const Sequelize = require("sequelize");

const sequelize = new Sequelize("node_complete", "golden", "password", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
