import React from 'react'

export const Text = ({text, tag, name, classN}) => {

    if (tag !== ('h1' || 'h2' || 'h3' || 'h4' || 'h5' || 'p')) {
        console.warn('warning - tag not recognized!');
    }
        
    return tag === 'h1' 
    ? (
        <h1 name = {name}>
            {text}
        </h1>
    ):tag === 'h2' 
    ? (
        <h2 name = {name}>
            {text}
        </h2>
    ):tag === 'h3' 
    ? (
        <h3 name = {name}>
            {text}
        </h3>
    ):tag === 'h4' 
    ? (
        <h4 name = {name}>
            {text}
        </h4>
    ):tag === 'h5' 
    ? (
        <h5 name = {name}>
            {text}
        </h5>
    ):tag === 'p' 
    ? (
        <p name = {name} className = {classN}>
            {text}
        </p>
    ):(null)
}