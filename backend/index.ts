export { };
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const stocks = require('./routes/stocks');

const app = express();
const port = process.env.PORT || 5000;

const mongoUrl = 'mongodb+srv://root:rootpwd123@cluster0.35emn.mongodb.net/<dbname>?retryWrites=true&w=majority'
// const mongoUrl = 'mongodb://mongo:27017/docker-stock-watcher'

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.static(path.join(__dirname, 'build')));

app.use('/stocks', cors(), stocks);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
