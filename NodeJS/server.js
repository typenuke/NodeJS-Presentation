//  NODEMAILER
//  NODEMON

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
            user: 'nodejsmailertest00@gmail.com',
            pass: 'P@ssw0rd!!!'
        }
    })

    const mailOptions = {
        from: "Nodemailer Contact <nodejsmailertest00@gmail.com>",
        to: 'bismainlearn@gmail.com',
        subject: `Nodemailer Contact !!!`,
        html: output
    }

    const output = `
        <h2 style="color:red;">You have new contact request</h2>
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Subject: ${req.body.subject}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.comments}</p>
    `
    
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