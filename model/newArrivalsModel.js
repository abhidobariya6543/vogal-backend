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
    size: {
        type: String
    },
    color: {
        type: String
    },
    reating: {
        type: Number
    },
    discription: {
        type: String
    }
}, {
    timestamps: true,
    versionKey: false
})

const Arrivals = mongoose.model('Arrivals', arrivals)

module.exports =  Arrivals 