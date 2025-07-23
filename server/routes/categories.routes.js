const express = require('express');
const categoriesController = require('../controllers/categoriesController')
const authentication = require('../middleware/authentication');


const categoriesRouter = express.Router();

categoriesRouter.use(authentication)
categoriesRouter.get('/', categoriesController.getCategories);

module.exports = categoriesRouter
