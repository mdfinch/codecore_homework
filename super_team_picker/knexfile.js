// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "super_team_picker",
      username: "tungsten",
      password: "postgres"
    },

    migrations: {
      tableName: "migrations",
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    }
  }
};
