const { Report } = require('../models');

async function authorization(req, res, next) {
  try {
    const id = req.params.id;

    const report = await Report.findByPk(id);
    if (!report) {
      throw { name: 'NotFound', message: 'Report not found' }
    }

    if (report.UserId !== req.user.id) {
      throw { name: 'Forbidden', message: 'You are not authorized to access this report' }
    }

    next();
  } catch (err) {
    console.log('ERROR AUTHORIZATION', err);
    next(err);
  }
}

module.exports = authorization
