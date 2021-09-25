const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required:true
    },
    long: {
        type: Number,
        required :true
    },
    lat: {
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('place',placeSchema)