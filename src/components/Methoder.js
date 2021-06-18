import React, { useCallback } from 'react'
import { Text } from "./Text"



const Methoder = ({ text, squareSize }) => {

    const handleMethoderClick = useCallback(
        (e) => {
            console.log(e.target);
        },
        [],
    );

    
    return (
        <div className = {`methoder ${text[0]}${text[1]}`} style = {{ height: squareSize + 'px', width: squareSize}} onClick = { handleMethoderClick }>

            <Text tag = 'p' text = { text } name = ''/>
            <div className='decorator'></div>
            <div className='decorator'></div>
            <div className='decorator'></div>
            <div className='decorator'></div>
            
        </div>
    )
}

export default Methoder


