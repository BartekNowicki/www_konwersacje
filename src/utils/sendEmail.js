
const sendEmail = async (submissionJSON, confirmFormSent) => {
  
  console.log('submission to send ', submissionJSON);
  

  try {
      
      //const { status } = await fetch('https://angielski-konwersacje.eu/.netlify/functions/sendit', {

      const { status } = await fetch('/.netlify/functions/sendit', {

      //const { status } = await fetch('http://localhost:8888/.netlify/functions/sendit', {
      
      method: 'POST', // *GET, POST, PUT, DELETE, etc.

      //mode: 'cors', // netlify: cors???
      mode: 'no-cors', // local dev: no-cors!!!

      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit

      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },

      redirect: 'follow', // manual, *follow, error

      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url

      body:  submissionJSON,

      });
      
      console.log('status: ', status);
      status === 0 ? confirmFormSent(true) : confirmFormSent(false);
  
  } catch (error) {
    console.error('error sending the message...', error);
  }

}

export default sendEmail

