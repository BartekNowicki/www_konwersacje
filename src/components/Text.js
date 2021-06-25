import React from 'react'

export const Text = ({text, tag, name, classN, styles}) => {

    
    if (!'h1h2h3h4h5p'.includes(tag)) {
        console.warn('warning - tag not recognized! ', tag);
    }
        
    return tag === 'h1' 
    ? (
        <h1 name = { name } className = { classN } style = { styles } >
            {text}
        </h1>
    ):tag === 'h2' 
    ? (
        <h2 name = { name } className = { classN } style = { styles } >
            {text}
        </h2>
    ):tag === 'h3' 
    ? (
        <h3 name = { name } className = { classN } style = { styles } >
            {text}
        </h3>
    ):tag === 'h4' 
    ? (
        <h4 name = { name } className = { classN } style = { styles } >
            {text}
        </h4>
    ):tag === 'h5' 
    ? (
        <h5 name = { name } className = { classN } style = { styles } >
            {text}
        </h5>
    ):tag === 'p' 
    ? (
        <p name = { name } className = { classN } style = { styles } >
            {text}
        </p>
    ):(null)
}