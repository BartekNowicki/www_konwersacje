require('dotenv').config();
const nodemailer = require('nodemailer');

exports.handler = function(event, context, callback) {

    const mailContent = JSON.stringify(event.body);

    // console.log('----------------------------------------');
    // console.log(mailContent);  
    // console.log('----------------------------------------');

    let transporter = nodemailer.createTransport({
     service: "Gmail", 
     auth: {
         user: process.env.GATSBY_EMAIL_LOGIN,
         pass: process.env.GATSBY_EMAIL_PASS        
     }
});

    transporter.sendMail({
        from: 'angielskikonwersacjeeu@gmail.com',
        to: 'angielskikonwersacjeeu@gmail.com',
        subject: `you've got better mail :)`,
        html: `<p>${mailContent}</p>`
    }, function(error, info) {
        if (error) {
            callback(error);
            // callback(process.env.GATSBY_EMAIL_LOGIN + ' ' + process.env.GATSBY_EMAIL_PASS + error);
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
