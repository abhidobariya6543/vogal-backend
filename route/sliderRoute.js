const express = require('express')
const router = express.Router()
const multer = require('multer')
const uploads = multer({ dest: 'uploads/' });
const { createSlider,
    viewAll,
    viewById,
    updateSlider,
    deleteSlider } = require('../controller/sliderController')


router.post('/Slider', uploads.array('image', 5), createSlider)
router.get('/Slider', viewAll)
router.get('/Slider/:id', viewById)
router.put('/Slider/:id', updateSlider)
router.delete('/Slider/:id', deleteSlider)


module.exports = router