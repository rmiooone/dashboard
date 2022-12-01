var express = require('express');
const AnimalsCrtl = require('../controllers/animals-crtl');

var router = express.Router();
const Model = require('../models/model');



router.get('/', function (req, res, next) {
  res.send('API is working properly');
});

router.post('/animals', AnimalsCrtl.createAnimals);

router.get('/getanimal', AnimalsCrtl.getAnimals);

router.get('/getAll', async(req,res) => {
/*try {
  const datas = await Model.find();
  res.json(datas)
} catch (error) {
res.status(500).json({message: error.message})
}*/
res.send('API is working properly');
})

module.exports = router;
