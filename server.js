const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express();

require('dotenv').config();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
