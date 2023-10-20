const mongoose = require('mongoose')
const arrivals = new mongoose.Schema({
    image: {
        type: Array
    },
    name: {
        type: String
    },
    price: {
        type: Number
    },
    reating: {
        type: Number
    }
}, {
    timestamps: true,
    versionKey: false
})

const Arrivals = mongoose.model('Arrivals', arrivals)

module.exports = { Arrivals }  