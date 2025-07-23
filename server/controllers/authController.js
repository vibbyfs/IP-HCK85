const { comparePassword } = require('../helpers/bcryptjs');
const { signToken } = require('../helpers/jwt');
const { User, Role } = require('../models');

class AuthController {

    static async register(req, res) {
        try {
            const { name, email, password } = req.body;

            const user = await User.findOne({ where: { email } });
            if (user) {
                return res.status(400).json({ message: 'Email already exists.' });
            }
            await User.create({
                name,
                email,
                password,
            });

            return res.status(201).json({
                message: 'Registration successful. You can login'
            });
        } catch (err) {
            console.log("ERROR REGISTER", err);
            if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
                return res.status(400).json({ message: err.errors[0].message });
            }
            return res.status(500).json({ message: 'Internal server error' });
        }
    };

    static async login(req, res) {
        try {
            const { email, password } = req.body;

            if (!email) {
                return res.status(400).json({ message: 'Email is required.' });
            }

            if (!password) {
                return res.status(400).json({ message: 'Password is required.' });
            }

            const user = await User.findOne({
                where: { email },
            });

            if (!user) {
                return res.status(401).json({ message: 'Email or password is incorrect.' });
            }

            const valid = comparePassword(password, user.password);
            if (!valid) {
                return res.status(401).json({ message: 'Email or password is incorrect.' });
            }

            const access_token = signToken(
                { id: user.id }
            );

            res.status(200).json({
                access_token,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                }
            });

        } catch (err) {
            console.log("ERROR LOGIN", err);
            return res.status(500).json({ message: 'Internal server error' });
        }
    };


}

module.exports = AuthController;