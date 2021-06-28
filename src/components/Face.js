import React from 'react'
import { Text } from "./Text"
import * as scssVariables from '../scssVariablesForJs.module.scss'

const styles = {
        fontSize: '14px',
        position: 'absolute',
        bottom: '0%',
        width: '100%',
        //border: '1px solid red',
        textAlign: 'center',
        color: scssVariables.scssYellow,
        zIndex: '3'
}


const Face = () => {
    return (
        <>
        <article className = 'face' name = 'face'>
            <Text tag = 'p' text = "Hey, I'm Bartek &#128521;" name = 'hey' styles = { styles }/>
        </article>
        
        </>
    )
}

export default Face
