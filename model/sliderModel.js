const mongoose = require('mongoose')
const slider = new mongoose.Schema({
    image: {
        type: Array
    }
}, {
    timestamps: true,
    versionKey: false
})

const Slider = mongoose.model('Slider', slider)

module.exports = { Slider }  