require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: process.env.DB_PASS,
    database: "parkSmartDB",
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: "P@SSword123",
    database: "parkSmartDB",
    host: "localhost",
    dialect: "mysql",
    logging: false
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};
