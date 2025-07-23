const { Category } = require("../models");

class CategoryController {

    static async getCategories(req, res) {
        try {
            
            const categories = await Category.findAll()

            res.status(200).json(categories)
        } catch (err) {
            res
                .status(500)
                .json({
                    message: "Failed to retrieve citizen data",
                    error: err.message,
                });
        }
    }

}

module.exports = CategoryController
