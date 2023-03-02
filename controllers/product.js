const Product = require('../models/productModel');

// create product
exports.create = async (req, res) => {
  try {
    const product = await new Product(req.body).save();
    res.send(product);
  } catch (error) {
    console.log(error);
    res.status(500).send('Create Product Error!');
  }
};

//get products
exports.productList = async (req, res) => {
  try {
    const product = await Product.find();
    res.send(product);
  } catch (error) {
    console.log(error);
    res.status(500).send('Create Product Error!');
  }
};
