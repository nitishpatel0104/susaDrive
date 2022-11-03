const mongoose = require('mongoose');

const folders = new mongoose.Schema({
    adminId: {
        required: true,
        type: String
    },
    folderName: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('folders', folders)