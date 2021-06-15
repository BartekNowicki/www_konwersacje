import React from 'react'
import { Text } from "./Text"

const styles = {
        color: 'rgba(255,255,255, 0.7)',
        fontSize: '20px',
        position: 'absolute',
        bottom: '0',
}

const Face = () => {
    return (
        <>
        <article className = 'face' name = 'face'></article>
        <Text tag = 'p' text = "Hey, I'm Bartek &#128521;" name = 'hey' styles = { styles }/>
        </>
    )
}

export default Face
