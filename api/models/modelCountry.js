const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    data: {
        required: true,
        type: String
    },
   name: {
        required: true,
        type: String
    }
})
module.exports = mongoose.model('Country', dataSchema)
