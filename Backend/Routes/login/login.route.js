const router = require('express').Router()
const { pool } = require('../../database/db')
const bcrypt = require('bcrypt')

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const query = 'SELECT * FROM users WHERE email = ?'

        pool.query(query, [email], (err, result) => {
            if (err){
                console.error(err)
                return res.status(400).json({succuss: false, message: 'Error logging in'})
            }

            if( result.length === 0) {
                return res.status(404).json({succuss: false, message: 'User not found'})
            }

            const user = result[0]

            const validPassword = bcrypt.compare(password, user.password)

            if (!validPassword) {
                return res.status(401).json({succuss: false, message: 'Incorrect credentials'})
            }

            res.status(200).json({succuss: true, message: 'Login successful', user: {
                id: user.userId,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone
            }})
        })
    } catch (err) {
        console.error(err)
        return res.status(500).json({succuss: false, message: 'Internal server error'})
    }
})

module.exports = router;
