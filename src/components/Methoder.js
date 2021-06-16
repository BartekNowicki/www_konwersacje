import React from 'react'
import { Text } from "./Text"

const Methoder = ({ text, squareSize }) => {
    
    return (
        <div className = {`methoder ${text[0]}${text[1]}`} style = {{ height: squareSize + 'px', width: squareSize}}>

            <Text tag = 'p' text = { text } name = ''/>
            <div className='decorator'></div>
            <div className='decorator'></div>
            <div className='decorator'></div>
            <div className='decorator'></div>
            
        </div>
    )
}

export default Methoder


