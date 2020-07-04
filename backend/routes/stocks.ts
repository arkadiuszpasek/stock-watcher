export {};
const express = require('express');
const mongoose = require('mongoose');
const alpha = require('../apis/alpha');
const Stock = require('../mongoose/models/Stock');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const stocks = await Stock.find({}).sort({ views: -1 }).limit(15);
    if (stocks.length <= 0) {
      throw new Error('No stocks in database');
    }

    res.send(stocks);
  } catch (err) {
    console.log('Error getting stocks from mongo: ', err);
    res.status(404).send('Unable to find stocks');
  }
});

router.get('/all', async (req, res) => {
  try {
    const stocks = await Stock.find({});
    if (stocks.length <= 0) {
      throw new Error('No stocks in database');
    }

    res.send(stocks);
  } catch (err) {
    console.log('Error getting stocks from mongo: ', err);
    res.status(404).send('Unable to find stocks');
  }
});

router.get('/:ticker', async (req, res) => {
  const ticker = req.params.ticker.toUpperCase();
  const query = Stock.where({ ticker });

  let response;
  try {
    const resp = await alpha.get('/', {
      params: {
        symbol: ticker,
        function: 'TIME_SERIES_DAILY',
        apikey: 'LDHSD4FVSJ9P7FCX',
      },
    });

    const entries = {};

    for (const [key, value] of Object.entries(
      resp.data['Time Series (Daily)'],
    )) {
      entries[key] = value['4. close'];
    }

    response = {
      data: entries,
    };
  } catch (err) {
    console.log('Error fetching stock from AlphaVantage: ', err);
    res.status(500).send('Could not get stock information');
  }

  try {
    let stock = await query.findOne();

    if (!stock) {
      stock = new Stock({ ticker });
      stock.save();
    } else {
      query.updateOne({ views: stock.views + 1 }).exec();
    }

    response = {
      ...response,
      ticker: stock.ticker,
      views: stock.views,
    };

    res.send(response);
  } catch (err) {
    console.log(`Error fetching ${ticker} from mongo: `, err);
    res.status(404).send('Unable to find stock');
  }
});

module.exports = router;
