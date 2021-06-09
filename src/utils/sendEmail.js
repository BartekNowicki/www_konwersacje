
const sendEmail = async (submissionJSON, confirmFormSent) => {
  
  console.log('submission to send ', submissionJSON);

  try {
      const { status } = await fetch('/.netlify/functions/sendit', {
        
      // const { status } = await fetch('http://localhost:8888/.netlify/functions/sendit', {

      method: 'POST',
      mode: 'cors',
      body:  submissionJSON,
      });
      
      console.log('status: ', status);
      status === 200 ? confirmFormSent(true) : confirmFormSent(false);
  
  } catch (error) {
    console.error('error sending the message...', error);
  }

}

export default sendEmail

