const Animals = require('../models/model')

createAnimals = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a movie',
        })
    }
    const animals = new Animals(body)

    if (!animals) {
        return res.status(400).json({ success: false, error: err })
    }
    animals
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: movie._id,
                message: 'Animals created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Animals not created!',
            })
        })
}

getAnimals = async (req, res) => {
    await Animals.find({}, (err, animals) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!animals.length) {
            return res
                .status(404)
                .json({ success: false, error: `Animals not found 1` })
        }
        return res.status(200).json({ success: true, data: animals })
    }).catch(err => console.log(err))
}

module.exports = {
    createAnimals,
    getAnimals
}