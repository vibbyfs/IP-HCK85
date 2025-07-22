const { Report } = require('../models');

class ReportsController {

    static async createReport(req, res) {
        try {
            const { title, description, CategoryId, latitude, longitude } = req.body;
            const report = await Report.create({
                title,
                description,
                UserId: req.user.UserId,
                CategoryId,
                RtId: req.user.RtId,
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
            const { status, CategoryId } = req.query;

            const where = { RtId: req.user.RtId };

            if (status) {
                where.status = status;
            }
            if (CategoryId) {
                where.CategoryId = CategoryId;
            }

            const reports = await Report.findAll({ where, order: [['createdAt', 'DESC']] });
            res.json(reports);
        } catch (err) {
            console.log("ERROR LIST REPORTS", err);
            res.status(500).json({ message: 'Internal server error' });
        }
    };

    static async getReportDetail(req, res) {
        try {
            const { id } = req.params;

            const report = await Report.findByPk(id);
            if (!report) {
                return res.status(404).json({ message: 'Report not found' });
            }

            if (report.RtId !== req.user.RtId && req.user.RoleId !== 'Admin')
                return res.status(403).json({ message: 'Access denied' });

            res.json(report);
        } catch (err) {
            console.log("ERROR GET REPORT DETAIL", err);
            res.status(500).json({ message: 'Internal server error' });
        }
    };

    static async updateReport(req, res) {
        try {
            const { id } = req.params;

            const report = await Report.findByPk(id);
            if (!report || report.UserId !== req.user.UserId || report.status !== 'Pending')
                return res.status(403).json({ message: 'Access denied' });

            const { title, description, CategoryId, latitude, longitude } = req.body;

            await report.update({ title, description, CategoryId, latitude, longitude });

            res.json(report);
        } catch (err) {
            console.log("ERROR UPDATE REPORT", err);
            res.status(500).json({ message: 'Internal server error' });
        }
    };

    static async deleteReport(req, res) {
        try {
            const { id } = req.params;

            const report = await Report.findByPk(id);
            if (!report) {
                return res.status(404).json({ message: 'Report not found.' });
            }

            if (report.UserId !== req.user.UserId && req.user.RoleId !== 'RT')
                return res.status(403).json({ message: 'Access denied.' });

            await report.destroy();

            res.json({ message: 'Report deleted successfully.' });
        } catch (err) {
            console.log("ERROR DELETE REPORT", err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async updateStatus(req, res) {
        try {
            const { id } = req.params
            const { status } = req.body
            const report = await Report.findByPk(id)

            if (!report) {
                return res.status(404).json({ message: 'Report not found' })
            }

            if (report.RtId !== req.user.RtId)
                return res.status(403).json({ message: 'Access denied.' })

            report.status = status
            await report.save()

            await ReportHistory.create({
                ReportId: report.id,
                status: status,
                ChangeBy: req.user.UserId,
                note: `Status changed to ${status}`,
                createdAt: new Date(),
                updatedAt: new Date()
            })

            res.json({ message: `Status report changed to ${status}.` })
        } catch (err) {
            console.log("ERROR UPDATE STATUS", err);
            res.status(500).json({ message: 'Internal server error' });
        }
    };

    static async uploadReportImage(req, res) {
        try {
            const { id } = req.params;
            const report = await Report.findByPk(id);

            if (!report || report.UserId !== req.user.UserId)
                return res.status(403).json({ message: 'Access denied.' });

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
