require('dotenv').config();
const nodemailer = require('nodemailer');

exports.handler = function(event, context, callback) {

    console.log('TESTING: ', process.env.GATSBY_EMAIL_LOGIN);

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
        subject: `you've got mail :)`,
        html: `<h3>an email from NETLIFY!!!<h3>`
    }, function(error, info) {
        if (error) {
            callback( 'lalalalal' + error);
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
