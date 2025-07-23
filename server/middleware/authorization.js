const { Report } = require('../models');

async function authorization(req, res, next) {
  try {
    const id = req.params.id;

    const report = await Report.findByPk(id);
    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }

    if (report.UserId !== req.user.id) {
      return res.status(403).json({ message: 'You are not authorized' })
    }

    next();
  } catch (error) {
    console.log('ERROR AUTHORIZATION', error);
    res.status(500).json({ message: 'Internal server error' })
  }
}

module.exports = authorization
