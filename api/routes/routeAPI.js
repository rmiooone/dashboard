var express = require('express');
var router = express.Router();
const Model = require('../models/model');
const modelCountry = require('../models/modelCountry');


router.get('/', function (req, res, next) {
  res.send('API is working properly on routeAPI.js');
});


router.get('/get/:id', async (req, res) => {
  try{
    const data = await Model.findById(req.params.id);
    res.json(data)
}
catch(error){
    res.status(500).json({message: error.message})
}
})

router.get('/getAll', async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//Delete by ID Method
router.get('/delete/:id',  async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id)
    res.send(`Document with ${data.name} has been deleted..`)
}
catch (error) {
    res.status(400).json({ message: error.message })
}
})

//Post Method
router.post('/post', async (req, res) => {
  const data = new Model({
      datasetid: req.body. datasetid,
      name: req.body.name
  })

  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
})

//Update by ID Method
  router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )
        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;