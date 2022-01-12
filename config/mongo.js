const mongoose = require('mongoose')

console.log('here')
console.log(process.env.DB_URL)

mongoose.connect(process.env.DB_URL)
.then(() => {
    console.log('DB Connected')
});

mongoose.connection.on('error', (error) => {
console.log('DB Error: ', error)
});

module.exports = mongoose;
