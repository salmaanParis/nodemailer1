// Importing nodemailer
const nodemailer = require('nodemailer');

// Create a transporter using SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'youtonez@gmail.com',  // Replace with your Gmail email address
        pass: 'vujv jazj jcen iyte'          // Replace with your Gmail password
    }
});

// Email content
let mailOptions = {
    from: 'youtonez@gmail.com',    // Sender address
    to: 'gifttelegram@example.com',        // Receiver address
    subject: 'Test Email',           // Subject line
    text: 'Hello from Nodemailer!'   // Plain text body
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error occurred:', error);
    }
    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
});
