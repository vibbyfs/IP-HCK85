const { User, Role } = require('../models');

class UserController {

    static async getPendingUsers(req, res) {
        try {
            const users = await User.findAll({
                where: { isApproved: false },
                attributes: ['id', 'name', 'email', 'createdAt'],
                include: [{ model: Role, attributes: ['name'] }]
            });
            res.json(users);
        } catch (err) {
            console.log("ERROR GET PENDING USERS", err);
            res.status(500).json({ message: 'Internal server error' });
        }
    };

    static async approveUser(req, res) {
        try {
            const { id } = req.params;

            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            if (user.isApproved) {
                return res.status(400).json({ message: 'User already approved' });
            }

            user.isApproved = true;
            user.approvedAt = new Date();

            await user.save();

            res.json({ message: 'User successfully approved' });
        } catch (err) {
            console.log("ERROR APPROVE USER", err);
            res.status(500).json({ message: 'Internal server error' });
        }
    };

    static async rejectUser(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findByPk(id);

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            await user.destroy();

            res.json({ message: 'User successfully deleted' });
        } catch (err) {
            console.log("ERROR REJECT USER", err);
            res.status(500).json({ message: 'Internal server error' });
        }
    };

    static async getProfile(req, res) {
        try {

            const id = req.user.id;
            // console.log("REQ.USER", req.user);

            const user = await User.findByPk(id, {
                attributes: ['id', 'name', 'email', 'isApproved', 'RtId', 'RoleId'],
                include: [{ model: Role, attributes: ['name'] }]
            });

            // console.log("USER PROFILE", user);

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