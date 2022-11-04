
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      user: "root",
      password: "prem@630",
      database: "crud_hapi"
    }
  },

  staging: {
    client: 'postgresql',
    searchPath: 'database_schema',
    connection: {
      user: "postgres",
      password: "Prem@630",
      database: "crud_hapi"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'userData'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
