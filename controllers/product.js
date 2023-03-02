const Product = require('../models/productModel');

// create product
exports.create = async (req, res) => {
  try {
    const data = req.body;
    const newData = {
      ...data,
      image: req.file.filename,
    };

    res.json(await new Product(newData).save());
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
