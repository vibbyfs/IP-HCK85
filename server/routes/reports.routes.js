const express = require('express');
const reportsController = require('../controllers/reportsController');
const authentication = require('../middleware/authentication')

const reportRouter = express.Router();

reportRouter.use(authentication)
reportRouter.get('/', reportsController.listReports);
reportRouter.post('/add', reportsController.createReport);
reportRouter.get('/:id', reportsController.getReportDetail);
reportRouter.put('/:id', reportsController.updateReport);
reportRouter.delete('/:id', reportsController.deleteReport);
reportRouter.patch('/:id/status', reportsController.updateStatus);

const upload = require('../middleware/upload');
reportRouter.post('/:id/upload', upload.single('image'), reportsController.uploadReportImage);

module.exports = reportRouter;

// Mount comments routes on reportRouter
// reportRouter.use('/:id/comments', commentRouter);
