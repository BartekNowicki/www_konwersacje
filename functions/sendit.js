require('dotenv').config();

const nodemailer = require('nodemailer');
const { google } = require('googleapis');


exports.handler = async (event) => {

    console.log('serverless handler initiated ');

    const oAuth2Client = new google.auth.OAuth2(process.env.GATSBY_CLIENT_ID, process.env.GATSBY_CLIENT_SECRET_KEY, process.env.GATSBY_REDIRECT_URI);
    
    oAuth2Client.setCredentials({ refresh_token: process.env.GATSBY_REFRESH_TOKEN });


    const showInfo = (intro = 'show info: ', msg = '\n you did not write anything non default to show here...') => {
    console.log('----------------------------------------');
    console.log(intro, msg);
    console.log('----------------------------------------');
    }


    const dummyTest = JSON.stringify({ "email": "testEmail", "message": "testMessage" });

    
    const mailContent = event.body ? JSON.parse(event.body) : JSON.parse(dummyTest);


    showInfo('stringified mailContent sent by serverless sendit ', JSON.stringify(mailContent));


    const accessToken = await oAuth2Client.getAccessToken();
    
    
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',          
            user: process.env.GATSBY_EMAIL_LOGIN,
            clientId: process.env.GATSBY_CLIENT_ID,
            clientSecret: process.env.GATSBY_CLIENT_SECRET_KEY,
            refreshToken: process.env.GATSBY_REFRESH_TOKEN,
            accessToken: accessToken,            
        }
    });

    

    const mailOptions = {
      from: 'angielskikonwersacjeeu@gmail.com',
      to: 'angielskikonwersacjeeu@gmail.com',
      subject: `you've got awesomness`,
      text: `what is awesome is this: ${JSON.stringify(mailContent)}`,
      html: `<p>what is awesome is this: ${JSON.stringify(mailContent)}</p>`
    };

  try {

    const result = await transport.sendMail(mailOptions);
    
    showInfo('result ', result);

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