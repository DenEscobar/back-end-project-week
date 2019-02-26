// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/catNotes'
    },
    useNullAsDefault: true,
    migrations:{
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  staging: {
    client: 'sqlite3',
    connection: {
      filename: './data/catNotes'
    },
    useNullAsDefault: true,
    migrations:{
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: './data/catNotes'
    },
    useNullAsDefault: true,
    migrations:{
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};
