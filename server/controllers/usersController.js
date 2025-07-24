const { User, Role } = require('../models');

class UserController {

    static async getProfile(req, res, next) {
        try {
            const id = req.user.id;

            const user = await User.findByPk(id, {
                attributes: ['id', 'name', 'email'],
            });

            if (!user) {
                throw { name: "NotFound", message: "User not found" };
            }
            res.status(200).json(user);
        } catch (err) {
            console.log("ERROR GET PROFILE", err);
            next(err);
        }
    };

}

module.exports = UserController;