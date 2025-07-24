const { Citizen, Address } = require("../models");

class CitizenController {
    static async createOrUpdateCitizen(req, res, next) {

        const UserId = req.user.id
        try {
            const {
                nationalId,
                fullName,
                gender,
                dateOfBirth,
                placeOfBirth,
                religion,
                maritalStatus,
                bloodType,
                occupation,
                nationality,
                AddressId
            } = req.body;

            const citizen = await Citizen.create({
                nationalId,
                fullName,
                gender,
                dateOfBirth,
                placeOfBirth,
                religion,
                maritalStatus,
                bloodType,
                occupation,
                nationality,
                UserId,
                AddressId
            });

            res.status(200).json(citizen);
        } catch (err) {
            console.log("ERROR CREATE OR UPDATE CITIZEN", err);
            next(err);
        }
    }

    static async getMyCitizen(req, res, next) {
        try {
            const citizen = await Citizen.findOne({
                where: { UserId: req.user.id },
                include: [{ model: Address }],
            });
            if (!citizen) {
                throw { name: 'NotFound', message: 'Citizen not found' };
            }

            res.status(200).json(citizen);
        } catch (err) {
            console.log("ERROR GET MY CITIZEN", err);
            next(err);
        }
    }

}

module.exports = CitizenController;
