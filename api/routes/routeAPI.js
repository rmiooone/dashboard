var express = require('express');
var router = express.Router();
const Model = require('../models/model');
const ModelCountry = require('../models/modelCountry');

router.get('/getanimal', async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.get('/getcountry', async (req, res) => {
  try {
    const data = await ModelCountry.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
module.exports = router;