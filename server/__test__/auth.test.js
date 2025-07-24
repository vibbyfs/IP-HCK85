const request = require('supertest');
const app = require('../app'); // <- pastikan ini sesuai dengan path app kamu
const { User } = require('../models');
const { sequelize } = require('../models');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});
afterAll(async () => {
    await sequelize.close();
});

describe('AUTH CONTROLLER', () => {
    describe('POST /register', () => {
        it('should register a user successfully', async () => {
            const res = await request(app)
                .post('/register')
                .send({
                    name: 'Aminah',
                    email: 'aminah@mail.com',
                    password: 'password123',
                });
            expect(res.status).toBe(201);
            expect(res.body).toHaveProperty('message', 'Registration successful. Please log in to proceed.');
        });

        it('should not allow duplicate emails', async () => {
            // Register first
            await request(app)
                .post('/register')
                .send({
                    name: 'Dupe',
                    email: 'dupe@mail.com',
                    password: 'password123',
                });

            // Register again with same email
            const res = await request(app)
                .post('/register')
                .send({
                    name: 'Dupe2',
                    email: 'dupe@mail.com',
                    password: 'password1234',
                });
            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty('message', 'Email already exists.');
        });

        it('should fail validation for missing password', async () => {
            const res = await request(app)
                .post('/register')
                .send({
                    name: 'Tanpa Password',
                    email: 'nopass@mail.com'
                });
            expect(res.status).toBe(400);
        });
    });

    describe('POST /login', () => {
        beforeAll(async () => {
            await User.create({
                name: 'Test Login',
                email: 'testlogin@mail.com',
                password: 'pass1234', // pastikan ini sudah bcrypt hash jika pakai hook!
            });
        });

        it('should login successfully', async () => {
            const res = await request(app)
                .post('/login')
                .send({
                    email: 'testlogin@mail.com',
                    password: 'pass1234',
                });
            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('access_token');
            expect(res.body.user).toHaveProperty('email', 'testlogin@mail.com');
        });

        it('should fail with wrong password', async () => {
            const res = await request(app)
                .post('/login')
                .send({
                    email: 'testlogin@mail.com',
                    password: 'salahpassword',
                });
            expect(res.status).toBe(401);
            expect(res.body).toHaveProperty('message', 'Email or password is incorrect.');
        });

        it('should fail if email not found', async () => {
            const res = await request(app)
                .post('/login')
                .send({
                    email: 'notfound@mail.com',
                    password: 'apaaja',
                });
            expect(res.status).toBe(401);
        });
    });

    describe('POST /login-google', () => {
        it('should return 500 if id_token not valid (mocked)', async () => {
            const res = await request(app)
                .post('/login-google')
                .send({ id_token: 'invalid-token' });
            expect(res.status).toBe(500);
        });
    });
});
