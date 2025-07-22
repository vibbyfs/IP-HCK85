const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');
const authentication = require('../middleware/authentication');

const addressRouter = express.Router();

addressRouter.use(authentication)
addressRouter.post('/add', addressController.createAddress);
// addressRouter.put('/:id', addressController.updateAddress);

module.exports = addressRouter;
