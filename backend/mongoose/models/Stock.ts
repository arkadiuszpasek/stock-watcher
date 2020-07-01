const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stockSchema = new Schema({
  ticker: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model('Stock', stockSchema, 'Stocks');
