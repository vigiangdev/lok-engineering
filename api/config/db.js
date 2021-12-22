module.exports = {
  database: process.env.DB_HOST.replace('db_user', process.env.DB_USER)
    .replace('db_cluster', process.env.DB_CLUSTER)
    .replace('db_password', process.env.DB_PASSWORD),
}
