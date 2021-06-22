const express = require('express');
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.json())

app.post('/', (req, res)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'bismainlearn@gmail.com',
            pass: 'le@rnEv3ryTh1ng!'
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'bismainlearn@gmail.com',
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.comments
    }
    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }
        else{
            console.log('Email sent: ' + info.response);
            res.send('success')
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})