const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const db = require('./database/db')
const signup = require('./Routes/register/register.route')
const login = require('./Routes/login/login.route')

const app = express()

app.use(express.json())

app.use('/api', signup)
app.use('/api', login)

const port = process.env.PORT


app.listen(port, () => {
    console.log(`App running on port ${port}`)
})

db.getConnection()
    .then(Connection => {
        console.log('Database connected')
        Connection.release()
    })
    .catch(error => {
        console.error('error connecting to database', error)
    })