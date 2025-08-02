const { comparePassword } = require('../helpers/bcryptjs');
const { signToken } = require('../helpers/jwt');
const { User, Role } = require('../models');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client();

class AuthController {

    static async register(req, res, next) {
        try {
            const { name, email, password } = req.body;

            const user = await User.findOne({ where: { email } });
            if (user) {
                throw { name: 'BadRequest', message: 'Email already exists.' };
            }
            await User.create({
                name,
                email,
                password,
            });

            return res.status(201).json({
                message: 'Registration successful. Please log in to proceed.'
            });
        } catch (err) {
            console.log("ERROR REGISTER", err);
            next(err);
        }
    };

    static async login(req, res, next) {
        try {
            const { email, password } = req.body;

            if (!email) {
                throw { name: 'BadRequest', message: 'Email is required.' };
            }

            if (!password) {
                throw { name: 'BadRequest', message: 'Password is required.' };
            }

            const user = await User.findOne({
                where: { email },
            });

            if (!user) {
                throw { name: 'Unauthorized', message: 'Email or password is incorrect.' };
            }

            const valid = comparePassword(password, user.password);
            if (!valid) {
                throw { name: 'Unauthorized', message: 'Email or password is incorrect.' };
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
            next(err);
        }
    };

    static async googleLogin(req, res, next) {
        const { id_token } = req.body

        try {

            const ticket = await client.verifyIdToken({
                idToken: id_token,
                audience: process.env.GOOGLE_CLIENT_ID,
            });

            const { name, email } = ticket.getPayload();

            let user = await User.findOne({ where: { email } })
            if (!user) {
                user = await User.create({
                    name,
                    email,
                    password: Math.random().toString(33).slice(-13)
                })
            }

            const access_token = signToken({ id: user.id })

            res.status(200).json({
                access_token,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                }
            })
        } catch (err) {
            console.log("ERROR LOGIN WITH GOOGLE", err);
            next(err);
        }
    }

}

module.exports = AuthController;