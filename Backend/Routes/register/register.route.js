const router = require('express').Router()
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcrypt')
const { pool } = require('../../database/db')

router.post('/register', async (req, res) => {
    try{
        const { firstName, lastName, email, phone, password } = req.body;

        const userId = uuidv4()
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const query = 'INSERT INTO users ( userId, firstName, lastName, email, phone, password) VALUES (?, ?, ?, ?, ?, ?)'
        const values = [userId, firstName, lastName, email, phone, hashedPassword]

        pool.query(query, values, (err, results) => {
            if (err) {
                console.error(err)
                return res.status(400).json({success: false, message: 'Failed to register user'})
            }

            res.status(201).json({success: true, message: 'User registered successfull'})
        })
    } catch (err) {
        console.error(err)
        return res.status(500).json({success: false, message: 'Internal server error'})
    }
})

module.exports = router;