import React from 'react'

const Map = () => {

    const stylesMap = {
         //border: '2px solid yellow',
         width: '100%',
         height: '100%',        
    }

    const stylesIframe = {
         //border: '2px solid green',
         width: '100%',
         height: '100%',
         allowfullscreen: 'true',
         loading: 'lazy'  ,
    }

    return (
        <div style = { stylesMap }>
          
        <iframe title='location map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9774.605189937382!2d21.067895870022827!3d52.23155278771817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecda21872f759%3A0xbc8a52247f543ad9!2sJezioro%20Goc%C5%82awskie!5e0!3m2!1spl!2spl!4v1624539129301!5m2!1spl!2spl" style = { stylesIframe } ></iframe>

        </div>
    )
}

export default Map

