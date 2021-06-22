import React from 'react'
import data from '../../data'
import { Text } from '../../components/Text'
import polglish from '../../images/polglish.jpg'

const Content2 = () => {

    const bookStyles = {
        width: '20vw',
        height: '30vw',
        maxWidth: '300px',
        maxHeight: '450px',
        //border: '1px solid green',
        backgroundImage: `url(${ polglish })`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        float: 'left',
        margin: '15px', 
    }

    return (
        <div className = 'methoderDescriptionContent'>
            <div style = { bookStyles }></div>
            <Text tag = 'p' text = { data.textSection2_2c } />
            <Text tag = 'p' text = { data.textSection2_2d } />
            <Text tag = 'p' text = { data.textSection2_2e } />
            <Text tag = 'p' text = { data.textSection2_2f } />
        </div>
    )
}

export default Content2
