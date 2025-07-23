const { User, Role } = require('../models');

class UserController {

    static async getProfile(req, res) {
        try {

            const id = req.user.id;

            const user = await User.findByPk(id, {
                attributes: ['id', 'name', 'email'],
            });

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } catch (err) {
            console.log("ERROR GET PROFILE", err);
            res.status(500).json({ message: 'Internal server error' });
        }
    };

}

module.exports = UserController;