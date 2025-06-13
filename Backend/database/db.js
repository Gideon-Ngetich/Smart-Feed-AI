const mysql = require('mysql2')

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    charset: 'utf8',
    waitForConnections: true,
    connectionLimit: 100000,
    queueLimit: 0
})

module.exports = pool.promise()