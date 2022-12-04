var express = require('express');
var router = express.Router();
const Model = require('../models/modelCountry');

router.get('/', function (req, res, next) {
  res.send('API is working properly on index.js');
});

router.get('/getcountry', async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
module.exports = router;
