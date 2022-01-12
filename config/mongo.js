const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URL)
.then(() => {
    console.log('DB Connected')
});

mongoose.connection.on('error', (error) => {
console.log('DB Error: ', error)
});

module.exports = mongoose;
