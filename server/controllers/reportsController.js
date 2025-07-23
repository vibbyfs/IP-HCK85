const { Report } = require('../models');

class ReportsController {

    static async createReport(req, res) {
        try {
            const { title, description, imageUrl, CategoryId, latitude, longitude } = req.body;
            const report = await Report.create({
                title,
                description,
                UserId: req.user.id,
                imageUrl,
                CategoryId,
                latitude,
                longitude,
            });
            res.status(201).json(report);
        } catch (err) {
            console.log("ERROR CREATE REPORT", err);
            res.status(500).json({ message: 'Internal server error' });
        }
    };

    static async listReports(req, res) {
        try {
            const reports = await Report.findAll({
                order: [["createdAt", "DESC"]],
            });

            res.json(reports);
        } catch (err) {
            console.log("ERROR LIST REPORTS", err);
            res.status(500).json({ message: "Internal server error" });
        }
    }


    static async reportsById(req, res) {
        try {
            const { id } = req.params;

            const report = await Report.findByPk(id);

            if (!report) {
                return res.status(404).json({ message: "Report not found." });
            }

            res.status(200).json(report);
        } catch (error) {
            console.log("ERROR GET REPORT BY ID", error);
            res.status(500).json({ message: "Internal server error." });
        }
    }


    static async updateReport(req, res) {
        try {
            const { id } = req.params;
            const { title, description, CategoryId, latitude, longitude } = req.body;

            const report = await Report.findByPk(id);
            if (!report) {
                return res.status(404).json({ message: "Report not found." });
            }

            await report.update({ title, description, CategoryId, latitude, longitude });

            res.json(report);
        } catch (err) {
            console.log("ERROR UPDATE REPORT", err);
            res.status(500).json({ message: "Internal server error" });
        }
    }


    static async deleteReport(req, res) {
        try {
            const { id } = req.params;

            const report = await Report.findByPk(id);
            await report.destroy();

            res.status(200).json({ message: 'Report deleted successfully.' });
        } catch (err) {
            console.log("ERROR DELETE REPORT", err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async uploadReportImage(req, res) {
        try {
            const { id } = req.params;
            const report = await Report.findByPk(id);

            report.imageUrl = req.file.path;
            await report.save();

            res.status(200).json({ message: 'Image uploaded successfully' });
        } catch (err) {
            console.log("ERROR UPLOAD REPORT IMAGE", err);
            res.status(500).json({ message: 'Internal server error' });
        }
    };


}

module.exports = ReportsController;
