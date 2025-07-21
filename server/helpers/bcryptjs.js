const bcryptjs = require('bcryptjs')

module.exports = {
    hashPassword: (password) => bcryptjs.hashSync(password, 10),
    comparePassword: (password, hashPassword) => bcryptjs.compareSync(password, hashPassword)
}