const express = require('express')
const router = express.Router()
const multer = require('multer')
const uploads = multer({ dest: 'uploads/' });
const { createArrivals,
    viewAll,
    viewById,
    updateArrivals,
    deleteArrivals,
    topSeller } = require('../controller/newArrivalsController')


router.post('/arrivals', uploads.array('image', 5), createArrivals)
router.get('/arrivals', viewAll)
router.get('/arrivals/:id', viewById)
router.get('/topSeller', topSeller)
router.put('/arrivals/:id', updateArrivals)
router.delete('/arrivals/:id', deleteArrivals)


module.exports = router