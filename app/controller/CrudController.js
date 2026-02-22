const Crud = require('../models/Crud');
class CrudController {
  async createCrud(req, res) {
    try {
      const { name, price, desc, category } = req.body;
      const product = new Crud({ name, price, desc, category });
      const data= await product.save();
      res
        .status(200)
        .json({
          status: true,
          message: "Product created successfully",
          data: product,
        });
    } catch (error) {
      return res
        .status(500)
        .json({ status: false, message: "Error creating product", error });
    }
  }

    async readCrud(req, res) {
        try {
            const products = await Crud.find();
            res.status(200).json({ status: true, message: "Products retrieved successfully", data: products });
        } catch (error) {
            return res.status(500).json({ status: false, message: "Error retrieving products", error });
        }   
    }
}

module.exports = new CrudController();
