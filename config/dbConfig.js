const mongoose = require('mongoose');

const uri = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB is connected');
  } catch (error) {
    console.log('connection error:', error);
  }
};

module.exports = connectDB;
