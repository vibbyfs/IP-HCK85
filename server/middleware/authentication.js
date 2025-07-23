const jwt = require('jsonwebtoken')
const { User } = require('../models')
const { verifyToken } = require('../helpers/jwt')

async function authentication(req, res, next) {
    try {
        const authorization = req.headers.authorization

        if (!authorization) {
            res.status(401).json({ message: 'Invalid token' })
        }

        const rawToken = authorization.split(' ')
        const keyToken = rawToken[0]
        const valueToken = rawToken[1]

        if (keyToken !== 'Bearer' || !valueToken) {
            res.status(401).json({ message: 'Invalid token' })
        }

        const result = verifyToken(valueToken)

        // console.log("RESULT AUTENTICATION", result);

        const user = await User.findByPk(result.id)
        if (!user) {
            res.status(401).json({ message: 'Invalid token' })
        }

        req.user = { id: user.id }

        next()
    } catch (err) {
        console.log("ERROR AUTENTICATION", err);
        if (err.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Invalid token' })
        }
        res.status(500).json({ message: 'Internal server error' })
    }
}

module.exports = authentication