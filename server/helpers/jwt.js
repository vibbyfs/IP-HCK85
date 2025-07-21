const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    signToken: (data) => jwt.sign(data, process.env.JWT_SECRET),
    verifyToken: (token) => jwt.verify(token, process.env.JWT_SECRET)
}