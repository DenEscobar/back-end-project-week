// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/notes',
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    }
  },

  staging: {
    client: 'pg',
    connection: 'postgres://localhost/notes',
    migrations: {
      tableName: './data/migrations'
    }
  },

  production: {
    client: 'pg',
    connection: 'postgres://localhost/notes',
    migrations: {
      tableName: './data/migrations'
    }
  }

};
