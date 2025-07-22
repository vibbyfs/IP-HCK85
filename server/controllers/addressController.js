const { Address } = require('../models');


class AddressController {

    static async createAddress(req, res) {
        try {
            const address = await Address.create(req.body);

            res.status(201).json(address);
        } catch (err) {
            console.log("ERROR CREATE ADDRESS", err);
            res.status(500).json({ message: 'Internal server error' });
        }
    };


}

module.exports = AddressController;