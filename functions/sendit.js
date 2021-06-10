require('dotenv').config();

const nodemailer = require('nodemailer');



exports.handler = async (event, context) => {

    console.log('serverless handler initiated ');

    const showInfo = (intro = 'show info: ', msg = '\n you did not write anything non default to show here...') => {
    console.log('----------------------------------------');
    console.log(intro, msg);
    console.log('----------------------------------------');
    }

    const dummyTest = JSON.stringify({ "email": "testEmail", "message": "testMessage" });
    
    const mailContent = event.body ? JSON.parse(event.body) : JSON.parse(dummyTest);

    showInfo('stringified mailContent sent by serverless sendit ', JSON.stringify(mailContent));
    
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {            
            user: process.env.GATSBY_EMAIL_LOGIN,
            pass: process.env.GATSBY_EMAIL_PASS        
        }
    });

  try {

    transporter.sendMail({
        from: 'bartosznowickihq@gmail.com',
        // from: 'angielskikonwersacjeeu@gmail.com',
        to: 'angielskikonwersacjeeu@gmail.com',
        subject: `you've got mail :)`,
        html: `<p>${JSON.stringify(mailContent)}</p>`
    }, function(error, info) {        
       if (error) {
           showInfo('error', error);
       } else {
           showInfo('goodInfo', info);
       } 
    });

    return {
    statusCode: 200,
    headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
    body: JSON.stringify({status: 'success'})}
        
  } catch (error) {
    console.log('handler error: ', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};