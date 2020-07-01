export {};
const express = require('express');
const stocks = require('./routes/stocks');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

mongoose.connect(
  'mongodb+srv://root:rootpwd123@cluster0.35emn.mongodb.net/StockWatcher?retryWrites=true&w=majority',
  { useNewUrlParser: true },
);

app.use('/stocks', stocks);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
