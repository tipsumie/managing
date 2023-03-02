const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { readdirSync } = require('fs');
require('dotenv').config();
const connectDB = require('./config/dbConfig');

const app = express();

// Serving static files 
app.use('/images', express.static(__dirname+"/public/uploads"));

// Connect MongoDB
connectDB();

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '20mb' }));
app.use(cors());

// Route
// http://localhost:5001/api
readdirSync('./routes').map((r) => app.use('/api', require('./routes/' + r)));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
