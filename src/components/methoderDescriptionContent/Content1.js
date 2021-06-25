import React from 'react'
import data from '../../data'
import { Text } from '../../components/Text'
import lexical from '../../images/lexical.jpg'

const Content1 = () => {

    const bookStyles = {
        width: '20vw',
        height: '30vw',
        maxWidth: '300px',
        maxHeight: '450px',
        //border: '1px solid green',
        backgroundImage: `url(${ lexical })`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        float: 'left',
        margin: '15px',
        
    }

    return (
        <div className = 'methoderDescriptionContent'>

            <div style = { bookStyles }></div>
            
            <Text tag = 'p' text = { data.textSection2_1c } />
            <Text tag = 'p' text = { data.textSection2_1d } />
            <Text tag = 'p' text = { data.textSection2_1e } />
            <Text tag = 'p' text = { data.textSection2_1f } />
            
        </div>
    )
}

export default Content1
