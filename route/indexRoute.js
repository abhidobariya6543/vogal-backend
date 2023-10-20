const express = require("express")
const router = express.Router()

const newArrivalsRoute = require('./newArrivalsRoute')
const sliderRoute = require('./sliderRoute')
router.use(
    '/api',
    newArrivalsRoute,
    sliderRoute
)

module.exports = router