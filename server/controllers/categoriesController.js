const { Category } = require("../models");

class CategoryController {

    static async getCategories(req, res, next) {
        try {
            const categories = await Category.findAll()

            res.status(200).json(categories)
        } catch (err) {
            console.log("ERROR GET CATEGORIES", err);
            next(err)
        }
    }

}

module.exports = CategoryController
