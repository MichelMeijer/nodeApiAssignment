const mongoose = require('mongoose')
const DB_URL = process.env.DB_URL

mongoose.connect(DB_URL)
.then(() => {
    console.log('DB Connected')
});

mongoose.connection.on('error', (error) => {
console.log('DB Error: ', error)
});

module.exports = mongoose;
