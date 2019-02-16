// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: './data/notes.db',
      user:     'Denise',
      password: 'Cps39351056'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    }
  },

  staging: {
    client: 'pg',
    connection: {
      database: './data/notes.db',
      user:     'Denise',
      password: '1234'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: './data/migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database:'./data/notes.db',
      user:     'Denise',
      password: '1234'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: './data/migrations'
    }
  }

};
