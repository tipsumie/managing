const Product = require('../models/productModel');

// create product
exports.createProduct = async (req, res) => {
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
    res.status(500).send('Get Product Error!');
  }
};

//get product by Id
exports.productById = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id }).exec();
    res.send(product);
  } catch (error) {
    console.log(error);
    res.status(500).send('Get Product By Id Error!');
  }
};

//delete product
exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndRemove({
      _id: req.params.id,
    }).exec();

    res.send(deleted);
  } catch (error) {
    console.log(error);
    res.status(500).send('Delete Product Error!');
  }
};

//update product
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    ).exec();
    res.send(product);
  } catch (error) {
    console.log(error);
    res.status(500).send('Update Product Error!');
  }
};
