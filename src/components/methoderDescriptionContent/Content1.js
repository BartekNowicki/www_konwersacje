import React from 'react'
import data from '../../data'
import { Text } from '../../components/Text'
import lexical from '../../images/lexical.jpg'

const Content1 = () => {

    const bookStyles = {
        width: '100%',
        height: '150px',
        border: '1px solid green',
        backgroundImage: `url(${ lexical })`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center'
        
    }

    return (
        <div>
            <div style = { bookStyles }></div>
            <Text tag = 'p' text = { data.textSection2_1c } />
            <Text tag = 'p' text = { data.textSection2_1d } />
        </div>
    )
}

export default Content1
