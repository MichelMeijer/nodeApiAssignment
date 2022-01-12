require('dotenv').config()

const express = require('express');
const mongoose = require('./config/mongo');
const routes = require('./routes/routes');

// Constants
const PORT = process.env.PORT || 5000

// App
const app = express();

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on the port::${PORT}`);
});
