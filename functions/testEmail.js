require('dotenv').config();
const nodemailer = require('nodemailer');

exports.handler = function(event, context, callback) {

    let transporter = nodemailer.createTransport({
     service: "Gmail", 
     auth: {
         user: process.env.EMAIL_LOGIN,
         pass: process.env.EMAIL_PASS        
     }
});

    transporter.sendMail({
        from: 'angielskikonwersacjeeu@gmail.com',
        to: 'angielskikonwersacjeeu@gmail.com',
        subject: `Sending...`,
        html: `
            <h3>an email from NETLIFY!!!<h3>
            `
    }, function(error, info) {
        if (error) {
            callback(error);
        } else {
            callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                   'result': 'success'
                })
        });
        }
    });
}
