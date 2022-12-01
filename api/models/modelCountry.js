const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    datasetid: {
        required: true,
        type: String
    }
})
module.exports = mongoose.model('country', dataSchema)
