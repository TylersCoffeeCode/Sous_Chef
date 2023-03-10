require('dotenv').config()
module.exports = {
  development: {
    database: 'Sous_Chef',
    dialect: 'postgres',
    // username: "postgres",
    // password: "1234"
  },
  test: {
    database: 'Sous_Chef',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}