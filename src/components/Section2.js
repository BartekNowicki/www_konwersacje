import React, { useRef, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Text } from "./Text"
import data from "../components/data"
import Methoder from "../components/Methoder"
import './section2.scss';
import * as scssVariables from './scssVariablesForJs.module.scss'


const Section2 = ({ sectionID }) => {

    console.log('SECTION2 RENDERED');

    const [methoderSize, setMethoderSize] = useState(0);

    const methoders = [
        {
            id: 0,
            text: data.text81a
        },
        {
            id: 1,
            text: data.text82a
        },
        {
            id: 2,
            text: data.text83a
        },
        {
            id: 3,
            text: data.text84a
        },
        {
            id: 4,
            text: data.text85a
        },
        {
            id: 5,
            text: data.text86a
        }
    
    ];

    const gridderFieldRef = useRef();

    const portrait = useSelector((state) => state.isPortrait);

    // useEffect(() => {

    //     const { width, height } = gridderFieldRef.current.getBoundingClientRect();
    //     //const size = Math.min(Math.floor(width), Math.floor(height));
    //     const size = Math.min(width, height);
    //     console.log('size ', size);
    //     setMethoderSize(size);
    // }, []);

    useEffect(() => {

        console.log(gridderFieldRef.current);

        const { width, height } = gridderFieldRef.current.getBoundingClientRect();
        const size = Math.floor(Math.min(width, height));
        console.log('resize ', size);
        setMethoderSize(size);
    }, [portrait])

    
    const styleOverride = { backgroundColor: scssVariables.scssDark }

    

    return (
        <div id = { sectionID } className = "pageSection">

            <div className = "mainTextWrapper" style = { styleOverride }>

                <Text tag = 'p' text = 'metoda i założenia teoretyczne' name = 'metoda' classN = 'pageSectionTitle'/>

                <article className = 'gridder'>
                    { methoders.map(item => <div ref = { item.id === 0 ? gridderFieldRef : null } key = { item.id } className='gridderField'> <Methoder text = { item.text } squareSize = { methoderSize } /></div> ) }
                </article>                    

            </div>  
        </div>
    )
}

export default Section2

        