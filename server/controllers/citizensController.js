const { Citizen, Address } = require("../models");

class CitizenController {
    static async createOrUpdateCitizen(req, res) {

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
            console.log("ERROR CREATE/UPDATE CITIZEN", err);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getMyCitizen(req, res) {
        try {
            const citizen = await Citizen.findOne({
                where: { UserId: req.user.userId },
                include: [{ model: Address }],
            });
            if (!citizen) return res.status(404).json({ message: "Data not found" });
            res.status(200).json(citizen);
        } catch (err) {
            res
                .status(500)
                .json({
                    message: "Failed to retrieve citizen data",
                    error: err.message,
                });
        }
    }

    static async getAllCitizens(req, res) {
        try {
            const citizens = await Citizen.findAll({
                include: [{ model: Address }],
                order: [["createdAt", "DESC"]],
            });
            res.status(200).json(citizens);
        } catch (err) {
            console.log("ERROR GET ALL CITIZENS", err);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}

module.exports = CitizenController;
