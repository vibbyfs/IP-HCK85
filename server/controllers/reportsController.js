const { Report, User } = require('../models');
require('dotenv').config();
const fs = require("fs");
const path = require('path')
const OpenAI = require("openai");


class ReportsController {

    static async createReport(req, res, next) {
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
            next(err);
        }
    };

    static async listReports(req, res, next) {
        try {
            const reports = await Report.findAll({
                order: [["createdAt", "DESC"]],
                include: [
                    {
                        model: User,
                        attributes: ["name"]
                    }
                ]
            });

            res.status(200).json(reports);
        } catch (err) {
            console.log("ERROR LIST REPORTS", err);
            next(err);
        }
    }

    static async reportsById(req, res, next) {
        try {
            const { id } = req.params;

            const report = await Report.findByPk(id);

            if (!report) {
                throw { name: "NotFound", message: "Report not found" };
            }

            res.status(200).json(report);
        } catch (error) {
            console.log("ERROR GET REPORT BY ID", error);
            next(err);
        }
    }


    static async updateReport(req, res, next) {
        try {
            const { id } = req.params;
            const { title, description, CategoryId, latitude, longitude } = req.body;

            const report = await Report.findByPk(id);
            if (!report) {
                throw { name: "NotFound", message: "Report not found" };
            }

            await report.update({ title, description, CategoryId, latitude, longitude });

            res.status(200).json(report);
        } catch (err) {
            console.log("ERROR UPDATE REPORT", err);
            next(err);
        }
    }


    static async deleteReport(req, res, next) {
        try {
            const { id } = req.params;

            const report = await Report.findByPk(id);
            await report.destroy();

            res.status(200).json({ message: 'Report deleted successfully.' });
        } catch (err) {
            console.log("ERROR DELETE REPORT", err);
            next(err);
        }
    }

    static async uploadReportImage(req, res, next) {
        try {
            const { id } = req.params;
            const report = await Report.findByPk(id);

            report.imageUrl = req.file.path;
            await report.save();

            res.status(200).json({ message: 'Image uploaded successfully' });
        } catch (err) {
            console.log("ERROR UPLOAD REPORT IMAGE", err);
            next(err);
        }
    };

    static async uploadReportAudio(req, res, next) {

        if (!req.file) {
            throw { name: "BadRequest", message: "Audio file is required" };
        }

        const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

        try {
            const filePath = path.join(__dirname, '..', 'uploads', req.file.filename);

            const transcription = await openai.audio.transcriptions.create({
                file: fs.createReadStream(filePath),
                model: "gpt-4o-transcribe",
                response_format: "json"
            });

            fs.unlinkSync(filePath);

            const transcript = transcription.text;

            const systemPrompt = `
            Kamu adalah asisten admin RT. Ambil dan kembalikan data berikut dari teks laporan warga:
            - title: Judul singkat masalah/kejadian
            - description: Ringkasan masalah secara jelas
            - category: Nama kategori laporan (terdiri dari 8 category, yaitu Kebersihan, Keamanan, Fasilitas Umum, kesehatan, sosial, administrasi, gangguan lsitrik/air, lain-lain )
            Contoh hasil JSON: {"title":"Lampu Jalan Mati", "description":"Lampu di depan rumah mati sejak kemarin.", "category":"Fasilitas Umum"}
            Jika tidak jelas, isi category dengan "Lain-lain".
            Jawab HANYA JSON!
        `;

            const gptResult = await openai.chat.completions.create({
                model: "gpt-4o",
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: transcript }
                ],
                temperature: 0.3,
            });

            let output;
            try {
                output = JSON.parse(gptResult.choices[0].message.content);
            } catch (e) {
                return res.status(500).json({ message: "Internal server error" });
            }

            res.status(200).json(output);

        } catch (err) {
            console.log("ERROR UPLOAD REPORT AUDIO", err);
            next(err);
        }
    }


}

module.exports = ReportsController;
