const { Address } = require('../models');


class AddressController {

    static async createAddress(req, res, next) {
        try {
            const address = await Address.create(req.body);

            res.status(201).json({
                id: address.id,
                AddressId: address.id,
                message: "Address created successfully",
                data: address
            });
        } catch (err) {
            console.log("ERROR CREATE ADDRESS", err);
            next(err);
        }
    }
}

module.exports = AddressController;