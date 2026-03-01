const Crud = require('../models/Crud');
class CrudController {
  async createCrud(req, res) {
    try {
      const { name, price, desc, category, size, color, rating } = req.body;
      const product = new Crud({ name, price, desc, category, size, color, rating });
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

async getById(req, res) {
    try {
      const product = await Crud.findById(req.params.id);

      res.status(200).json({
        status: true,
        message: "Product retrieved successfully",
        data: product
      });

    } catch (error) {
      res.status(500).json({
        status: false,
        message: "Error retrieving product",
        error: error.message
      });
    }
  }
  async updateCrud(req, res) {
    try {
      const updatedProduct = await Crud.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

      res.status(200).json({
        status: true,
        message: "Product updated successfully",
        data: updatedProduct
      });

    } catch (error) {
      res.status(500).json({
        status: false,
        message: "Error updating product",
        error: error.message
      });
    }
  }

async deleteCrud(req, res) {
    try {
      const deletedProduct = await Crud.findByIdAndDelete(req.params.id);

      res.status(200).json({
        status: true,
        message: "Product deleted successfully",
        data: deletedProduct
      });

    } catch (error) {
      res.status(500).json({
        status: false,
        message: "Error deleting product",
        error: error.message
      });
    }
  }
}

module.exports = new CrudController();
