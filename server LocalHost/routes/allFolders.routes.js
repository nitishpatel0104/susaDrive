const express = require('express');
const router = express.Router()
const Model = require('../models/allFolders.models');

//Post Method
router.post('/post', async (req, res) => {
    const folders = new Model({
        adminId: req.body.adminId,
        folderName: req.body.folderName
    })
    try {
        const dataToSave = await folders.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try {
        const folders = await Model.find();
        res.json(folders)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try {
        const folders = await Model.findById(req.params.id);
        res.json(folders)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const folder = await Model.findByIdAndDelete(id)
        res.send(`Document with ${folder.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;