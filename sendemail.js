// Import nodemailer
const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'hibarustha27@gmail.com', // Your Gmail email address
        pass: 'sjyi vumt eoya qfvn' // Your Gmail password or app-specific password
    },
    tls:{
        rejectUnauthorized: false
    }
});

// Define email options
let mailOptions = {
    from: 'hibarustha27@gmail.com',
    to: 'hibarustha@gmail.com', // Friend's email address
    subject: 'Test Email',
    text: 'This is a test email sent using Nodemailer.'
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error occurred:', error);
    }
    console.log('Email sent successfully:', info.response);
});