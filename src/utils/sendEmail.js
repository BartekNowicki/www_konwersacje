const axios = require('axios');

const sendEmail = async (submission = 'bubba') => {

console.log('sending!');  

  try {
      const result = await fetch('/.netlify/functions/sendit.js', {
      //const result = await fetch('http://localhost:8888/.netlify/functions/sendit', {

      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ content: submission }) // body data type must match "Content-Type" header
      // body: {"name": "HexOcean pizza", "preparation_time": "01:30:22", "type": "pizza", "no_of_slices": 4, "diameter": 33.4}

  })    
  } catch (error) {
    console.error(error);
  }

}

export default sendEmail
