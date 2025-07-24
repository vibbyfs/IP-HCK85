const jwt = require('jsonwebtoken')
const { User } = require('../models')
const { verifyToken } = require('../helpers/jwt')

async function authentication(req, res, next) {
    try {
        const authorization = req.headers.authorization

        if (!authorization) {
            throw { name: 'Unauthorized', message: 'Invalid token' }
        }

        const rawToken = authorization.split(' ')
        const keyToken = rawToken[0]
        const valueToken = rawToken[1]

        if (keyToken !== 'Bearer' || !valueToken) {
            throw { name: 'Unauthorized', message: 'Invalid token'}
        }

        const result = verifyToken(valueToken)

        const user = await User.findByPk(result.id)
        if (!user) {
            throw { name: 'Unauthorized', message: 'Invalid token' }
        }

        req.user = { id: user.id }

        next()
    } catch (err) {
        console.log("ERROR AUTENTICATION", err);
        next(err)
    }
}

module.exports = authentication