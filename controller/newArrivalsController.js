const  Arrivals  = require('../model/newArrivalsModel')

const createArrivals = async (req, res) => {
    const files = req.files;
    const imagePaths = files.map(file => file.path);
    const {
        name,
        price,
        size,
        color,
        reating,
        discription
    } = req.body
    const obj = new Arrivals({
        image: imagePaths,
        name,
        price,
        size,
        color,
        reating,
        discription
    })
    try {
        const data = await obj.save()
        res.status(201).send({ Message: 'Arrivals Created Successfully', data })
    } catch (error) {
        res.status(500).send({ Message: 'Something wait wrong!!!' })
    }
}

const viewAll = async (req, res) => {
    try {
        const data = await Arrivals.find().sort({ _id: -1 })
        res.status(201).send({ Message: 'Get all Successfully', data })
    } catch (error) {
        res.status(500).send({ Message: 'Something wait wrong!!!' })
    }
}

const viewById = async (req, res) => {
    const { id } = req.params
    try {
        const data = await Arrivals.findById(id)
        if (!data) {
            return res.status(404).send({ Message: 'Arrivals Not Found' })
        }
        res.status(201).send({ Message: 'Arrival Finded Successfully', data })
    } catch (error) {
        res.status(500).send({ Message: 'Something wait wrong!!!' })
    }
}

const updateArrivals = async (req, res) => {
    const { _id } = req.params
    try {
        const existing = Arrivals.findById(id)
        if (!existing) {
            return res.status(404).send({ Message: 'Arrival Not Found' })
        }
        const data = await Arrivals.findByIdAndUpdate({ _id: _id }, req.body, { new: true })
        res.status(201).send({ Message: 'Arrival Updated Successfully', data })
    } catch (error) {
        res.status(500).send({ Message: 'Something wait wrong!!!' })
    }
}

const deleteArrivals = async (req, res) => {
    const { id } = req.params
    try {
        const existing = Arrivals.findById(id)
        if (!existing) {
            return res.status(404).send({ Message: 'Arrival Not Found' })
        }
        let data = await Arrivals.findByIdAndDelete(id)
        data = {
            Message: 'Ok'
        }
        res.status(201).send({ Message: 'Arrival Deleted Successfully', data })
    } catch (error) {
        res.status(500).send({ Message: 'Something wait wrong!!!' })
    }
}

const topSeller = async (req, res) => {
    try {
        const data = await Arrivals.find({ reating: { $gte: 3 } })
        res.status(201).send({ Message: 'Get all Successfully', data })
    } catch (error) {
        res.status(500).send({ Message: 'Something wait wrong!!!' })
    }
}


module.exports = { createArrivals, viewAll, viewById, updateArrivals, deleteArrivals, topSeller }