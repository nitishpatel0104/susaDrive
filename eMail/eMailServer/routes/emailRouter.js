var express = require('express');
var bodyParser = require('body-parser');
var cors = require('./../cors');
const emailRouter = express.Router();
var nodemailer = require('nodemailer');
emailRouter.route('/')
.options(cors.cors,(req,res) => {
    console.log("Coming email here");
    res.sendStatus(200);
})
.post(cors.cors,(req,res,next) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'patelnitish0104@gmail.com', //Senders Mail Id
            pass: "Nitish@0104" // Senders Password
        }
    });
    var mailOptions = {
        from: 'patelnitish0104@gmail.com',
        to: req.body.email,
        subject: `Nodemailer Testing`,
        html: `Node Mail Testing Successfull`
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.send('Error');
        }
        else{
            console.log('Email Sent: '+ info.response);
            res.send("Sent Successfull");
        }
    });
})

module.exports = emailRouter;