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

    res.send('Delete A Product Successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('Delete Product Error!');
  }
};

//update product
exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const updateObj = {};

    for (const key in req.body) {
      updateObj[key] = req.body[key];
    }

    const product = await Product.findByIdAndUpdate(
      { _id: productId },
      { ...updateObj, image: req.file.filename },
      {
        new: true,
      }
    );

    res.send('Update A Product Successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('Update Product Error!');
  }
};
