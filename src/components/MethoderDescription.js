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
    
    let number;
    let line;

    if (text === data.textSection2_1a) {
        number = 1;
        line = data.textSection2_1b;
    } else if (text === data.textSection2_2a) {
        number = 2;
        line = data.textSection2_2b;
    } else if (text === data.textSection2_3a) {
        number = 3;
        line = data.textSection2_3b;
    } else if (text === data.textSection2_4a) {
        number = 4;
        line = data.textSection2_4b;
    } else if (text === data.textSection2_5a) {
        number = 5;
        line = data.textSection2_5b;
    } else if (text === data.textSection2_6a) {
        number = 6;
        line = data.textSection2_6b;
    } 
        
    const getContentNode = (x) => {
        if (x === 1) return <Content1 />
        if (x === 2) return <Content2 />
        if (x === 3) return <Content3 />
        if (x === 4) return <Content4 />
        if (x === 5) return <Content5 />
        if (x === 6) return <Content6 />
    }
        
    // const markerClass = `methoderDescription${text[0]}${text[1]} hidden`;

    const markerClass = `methoderDescription${text[0]}${text[1]} hidden`;
    
    return (
        <>
            <div className = { markerClass } >
                <Text tag = 'p' text = { line } classN = 'methoderDescriptionHeader'/>
                { getContentNode(number) }
            </div>        
        </>
    )
    
    }

export default MethoderDescription


