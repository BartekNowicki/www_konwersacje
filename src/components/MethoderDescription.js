import React from 'react'
import { Text } from './Text'
import data from '../components/data'



const MethoderDescription = ({ text }) => {

    const markerClass = `methoderDescription${text[0]}${text[1]} hidden`;
    
    if (text === data.textSection2_1a) return (
        <>
            <div className = { markerClass }>
                <Text tag = 'p' text = { data.textSection2_1b } />
            </div>        
        </>
    )

    return (
        <>
            <div className = { markerClass }>
                <Text tag = 'p' text = { data.textSection2_2b } />
            </div>        
        </>
    )
}

export default MethoderDescription


