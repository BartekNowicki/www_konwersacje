
const sendEmail = async (submissionJSON, confirmFormSent) => {
  
  let result;
  console.log('submission to send ', submissionJSON);

  try {
      const result = await fetch('https://angielski-konwersacje.eu/.netlify/functions/sendit', {
      //result = await fetch('http://localhost:8888/.netlify/functions/sendit', {
      method: 'POST',
      mode: 'cors',
      body:  submissionJSON,
      }).then(data => data.json()).then(data => {
        console.log('result: ', data.status);
        data.status === 'success' ? confirmFormSent(true) : confirmFormSent(false);
      })
  
  } catch (error) {
    console.error('error sending the message...', error);
  }

}

export default sendEmail

