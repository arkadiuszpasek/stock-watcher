export {};
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const stocks = require('./routes/stocks');

const app = express();
const port = process.env.PORT || 5000;

// mongoose.connect('mongodb://mongo:27017/docker-stock-watcher', {
mongoose.connect(
  'mongodb+srv://root:rootpwd123@cluster0.35emn.mongodb.net/StockWatcher?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

app.use(express.static(path.join(__dirname, 'build')));

app.use('/stocks', cors(), stocks);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
