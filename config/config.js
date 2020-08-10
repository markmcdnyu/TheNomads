require("dotenv").config();

module.exports = {

  development: {
    username: "tad1j9j25jw5qrel",
    password: "kxnrz4ry5hkc8kvw",
    database: "lxfszzg6vw1en0t9",
    host: "rnr56s6e2uk326pj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: "password",
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: "password",
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
};