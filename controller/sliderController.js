const { Slider } = require('../model/sliderModel')

const createSlider = async (req, res) => {
    const files = req.files;
    const imagePaths = files.map(file => file.path);
    const {
    } = req.body
    const obj = new Slider({
        image: imagePaths,
    })
    try {
        const data = await obj.save()
        res.status(201).send({ Message: 'Slider Created Successfully', data })
    } catch (error) {
        res.status(500).send({ Message: 'Something wait wrong!!!' })
    }
}

const viewAll = async (req, res) => {
    try {
        const data = await Slider.find()
        res.status(201).send({ Message: 'Get all Successfully', data })
    } catch (error) {
        res.status(500).send({ Message: 'Something wait wrong!!!' })
    }
}

const viewById = async (req, res) => {
    const { id } = req.params
    try {
        const data = await Slider.findById(id)
        if (!data) {
            return res.status(404).send({ Message: 'Slider Not Found' })
        }
        res.status(201).send({ Message: 'Slider Finded Successfully', data })
    } catch (error) {
        res.status(500).send({ Message: 'Something wait wrong!!!' })
    }
}

const updateSlider = async (req, res) => {
    const { _id } = req.params
    try {
        const existing = Slider.findById(id)
        if (!existing) {
            return res.status(404).send({ Message: 'Slider Not Found' })
        }
        const data = await Slider.findByIdAndUpdate({ _id: _id }, req.body, { new: true })
        res.status(201).send({ Message: 'Slider Updated Successfully', data })
    } catch (error) {
        res.status(500).send({ Message: 'Something wait wrong!!!' })
    }
}

const deleteSlider = async (req, res) => {
    const { id } = req.params
    try {
        const existing = Slider.findById(id)
        if (!existing) {
            return res.status(404).send({ Message: 'Slider Not Found' })
        }
        let data = await Slider.findByIdAndDelete(id)
        data = {
            Message: 'Ok'
        }
        res.status(201).send({ Message: 'Slider Deleted Successfully', data })
    } catch (error) {
        res.status(500).send({ Message: 'Something wait wrong!!!' })
    }
}

module.exports = { createSlider, viewAll, viewById, updateSlider, deleteSlider }