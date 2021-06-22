import React from 'react'
import { Text } from './Text'

const Abouter = ({ text, logoUrl, bakcgUrl, title, location, dates, status }) => {

    const screenStyles = {
        color: 'white',
        fontSize: '4rem',
        display: 'flex',
        width: '100%', 
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <div style = { screenStyles }>
            <Text tag = 'p' text = { text } />
            <div style = {{fontSize: '10px'}}>

                {logoUrl}
                {bakcgUrl}
                {title}
                {location}
                {dates}
                {status}
                
            </div>

        </div>
    )
}

export default Abouter
