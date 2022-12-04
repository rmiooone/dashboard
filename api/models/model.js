const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    datasetid: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    "type": {
        required: true,
        type: String
    },
    "display": {
        required: true,
        type: String
    }
})
module.exports = mongoose.model('Animal', dataSchema)
