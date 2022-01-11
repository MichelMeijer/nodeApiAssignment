const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
    key: {type: String},
    createdAt: {type: Date},
    counts: [Number],
  }, { collection : 'records' });

const Record = mongoose.model('Record', recordSchema);

module.exports = Record;