import React from 'react'
import { Text } from './Text'
import data from '../data'
import Content1 from '../components/methoderDescriptionContent/Content1'
import Content2 from '../components/methoderDescriptionContent/Content2'
import Content3 from '../components/methoderDescriptionContent/Content3'
import Content4 from '../components/methoderDescriptionContent/Content4'
import Content5 from '../components/methoderDescriptionContent/Content5'
import Content6 from '../components/methoderDescriptionContent/Content6'


const MethoderDescription = ({ text }) => {

    const markerClass = `methoderDescription${text[0]}${text[1]} hidden`;
    
    if (text === data.textSection2_1a) return (
        <>
            <div className = { markerClass }>
                <Text tag = 'p' text = { data.textSection2_1b } />
                <Content1 />
            </div>        
        </>
    )

    if (text === data.textSection2_2a) return (
        <>
            <div className = { markerClass }>
                <Text tag = 'p' text = { data.textSection2_2b } />
                <Content2 />
            </div>        
        </>
    )

    if (text === data.textSection2_3a) return (
        <>
            <div className = { markerClass }>
                <Text tag = 'p' text = { data.textSection2_3b } />
                <Content3 />
            </div>        
        </>
    )

    if (text === data.textSection2_4a) return (
        <>
            <div className = { markerClass }>
                <Text tag = 'p' text = { data.textSection2_4b } />
                <Content4 />
            </div>        
        </>
    )

    if (text === data.textSection2_5a) return (
        <>
            <div className = { markerClass }>
                <Text tag = 'p' text = { data.textSection2_5b } />
                <Content5 />
            </div>        
        </>
    )

    if (text === data.textSection2_6a) return (
        <>
            <div className = { markerClass }>
                <Text tag = 'p' text = { data.textSection2_6b } />
                <Content6 />
            </div>        
        </>
    )

    }

export default MethoderDescription


