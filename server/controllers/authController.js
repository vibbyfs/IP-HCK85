const { comparePassword } = require('../helpers/bcryptjs');
const { signToken } = require('../helpers/jwt');
const { User, Role } = require('../models');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client();

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

    static async googleLogin(req, res) {
        const { id_token } = req.body
        try {

            const ticket = await client.verifyIdToken({
                idToken: id_token,
                audience: process.env.GOOGLE_CLIENT_ID,
            });

            const { name, email } = ticket.getPayload();

            let user = await User.findOne({ where: { email } })
            if (!user) {
                User.create({
                    name,
                    email,
                    password: Math.random().toString(33).slice(-13)
                })
            }

            const access_token = signToken({ id: user.id })

            res.status(200).json({ access_token })
        } catch (err) {
            console.log("ERROR LOGIN WITH GOOGLE", err);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }


}

module.exports = AuthController;