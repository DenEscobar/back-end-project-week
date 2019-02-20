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
    }
  }

};
