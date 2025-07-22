const express = require('express');
const citizensController = require('../controllers/citizensController');
const authentication = require('../middleware/authentication');

const routerCitizens = express.Router();

routerCitizens.use(authentication)
routerCitizens.post('/add', citizensController.createOrUpdateCitizen);
routerCitizens.get('/me', citizensController.getMyCitizen);
routerCitizens.get('/', citizensController.getAllCitizens);

module.exports = routerCitizens;
