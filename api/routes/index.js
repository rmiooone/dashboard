var express = require('express');
const AnimalsCrtl = require('../controllers/animals-crtl');

var router = express.Router();
const Model = require('../models/model');



router.get('/', function (req, res, next) {
  res.send('API is working properly');
});

router.post('/animals', AnimalsCrtl.createAnimals);

router.get('/getanimal', AnimalsCrtl.getAnimals);

router.get('/getAllanimal', AnimalsCrtl.getAnimals);

router.get('/getAll', async(req,res) => {
res.send('API is working properly');
})

module.exports = router;
