const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

// Constants
const PORT = process.env.PORT || 5000

// App
const app = express();

mongoose.connect('mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study')
.then(() => {
    console.log('DB Connected')
});

mongoose.connection.on('error', (error) => {
console.log('DB Error: ', error)
});

app.use(routes);

app.get('/', (req, res) => {
  res.send('Hello World Getir2');
});

app.listen(PORT, () => {
  console.log(`Server listening on the port::${PORT}`);
});
