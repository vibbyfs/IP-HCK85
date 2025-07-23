const express = require('express');
const reportsController = require('../controllers/reportsController');
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization');

const reportRouter = express.Router();

reportRouter.use(authentication)
reportRouter.get('/', reportsController.listReports);
reportRouter.get('/:id', reportsController.reportsById);
reportRouter.post('/add', reportsController.createReport);
reportRouter.put('/:id/update', authorization, reportsController.updateReport);
reportRouter.delete('/:id/delete', authorization, reportsController.deleteReport);

const upload = require('../middleware/upload');
reportRouter.post('/:id/upload', upload.single('image'), reportsController.uploadReportImage);

module.exports = reportRouter;

// Mount comments routes on reportRouter
// reportRouter.use('/:id/comments', commentRouter);
