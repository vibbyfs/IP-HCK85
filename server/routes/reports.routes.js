const express = require('express');
const reportsController = require('../controllers/reportsController');
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization');
const commentRouter = require('./comments.routes');
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + '-' + file.fieldname + '-' + file.originalname)
  }
})
const uploadAudio = multer({ storage });

const reportRouter = express.Router();

reportRouter.use(authentication)
reportRouter.get('/', reportsController.listReports);
reportRouter.get('/:id', reportsController.reportsById);
reportRouter.post('/add', reportsController.createReport);
reportRouter.post('/generate-from-audio', uploadAudio.single("audio"), reportsController.uploadReportAudio)
reportRouter.put('/:id/update', authorization, reportsController.updateReport);
reportRouter.delete('/:id/delete', authorization, reportsController.deleteReport);

reportRouter.use('/:id/comments', commentRouter);

const upload = require('../middleware/upload');
reportRouter.post('/:id/upload', upload.single('image'), reportsController.uploadReportImage);

module.exports = reportRouter;
