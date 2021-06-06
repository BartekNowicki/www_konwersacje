export const sendEmail = async (submission) => {

  try {
    const result = await fetch('/.netlify/functions/sendit.js');
    //endpoint: https://angielski-konwersacje.eu/.netlify/functions/sendit
  } catch (error) {
    console.error(error);
  }

}