require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
    next();
});

// mongoose.connect(mongoString, { useNewUrlParser: true });
mongoose.connect('mongodb://localhost:27017/eSignDocument', { useNewUrlParser: true });
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
})

database.once('connected', () => {
    console.log('Database Connected');
})


const admins = require('./routes/admins.routes');
const fileUploads = require('./routes/filesUpload.routes');
const allfolders = require('./routes/allFolders.routes');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/admin', admins);
app.use('/fileUpload', fileUploads);
app.use('/allfolders', allfolders);

const port = process.env.PORT || 4000;


app.get('/', (req, res) => {

    console.log("hello")
    res.json('working')
})
app.listen(port, () => console.log(`Server is up and running at ${port}`));