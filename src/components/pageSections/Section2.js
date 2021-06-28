import React, { useRef, useEffect, useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Text } from '../Text'
import data from '../../data'
import { Methoder, methoderTimeline } from '../Methoder'
import  MethoderDescription from '../MethoderDescription'
import './section2.scss';
import * as scssVariables from '../../scssVariablesForJs.module.scss'
import Wave from '../Wave'



const Section2 = ({ sectionID }) => {
    
    //console.log('SECTION2 RENDERED');

    const [methoderSize, setMethoderSize] = useState(0);

    const [newRender, setNewRender] = useState(0);

    console.log('SECTION2 RENDERED', newRender);

    const handleCloseClick = useCallback(
        () => {
            //console.log(methoderTimeline);
            methoderTimeline.reverse();
            setNewRender(newRender + 1);
            //enable back scrolling blocked by opened methoder
            //and scroll again to the right section
            document.body.style.position = 'unset';
            document.getElementById('metodaID').scrollIntoView();            
        },
        [],
    );
    
    
    // const handleCloseClick = () => {        
    //     //console.log(methoderTimeline);
    //     methoderTimeline.reverse();
    //     setNewRender(newRender + 1);
    // } 


    const methoders = [
        {
            id: 0,
            text: data.textSection2_1a
        },
        {
            id: 1,
            text: data.textSection2_2a
        },
        {
            id: 2,
            text: data.textSection2_3a
        },
        {
            id: 3,
            text: data.textSection2_4a
        },
        {
            id: 4,
            text: data.textSection2_5a
        },
        {
            id: 5,
            text: data.textSection2_6a
        }
    
    ];

    const gridderFieldRef = useRef();

    const portrait = useSelector((state) => state.isPortrait);    

    useEffect(() => {

        //console.log(gridderFieldRef.current);

        const { width, height } = gridderFieldRef.current.getBoundingClientRect();
        const size = Math.floor(Math.min(width, height));
        //console.log('resize ', size);
        setMethoderSize(size);
    }, [portrait])

    
    const styleOverride = { backgroundColor: scssVariables.section2BackgroundColor }

    const descriptionStyles = {
        height: `calc(100% - ${methoderSize / 1.5}px)`,
        //border: '1px solid red', 
    }
    

    return (
        <div id = { sectionID } className = 'pageSection'>

            <div className = 'mainTextWrapper' style = { styleOverride }>

                <Text tag = 'p' text = { data.textSection2_1 } name = 'metoda' classN = 'pageSectionTitle'/>

                <article className = 'gridder'>
                    { methoders.map(item => <div ref = { item.id === 0 ? gridderFieldRef : null } key = { item.id } className='gridderField'> <Methoder text = { item.text } squareSize = { methoderSize } /></div> ) }
                </article>

                <article className = 'gridderOverlay'>
                    <button onClick = { handleCloseClick }></button>
                    <div className='methoderDescription' style = { descriptionStyles }>

                        { methoders.map(item => 
                        <div key = { item.id } >
                            <MethoderDescription text = { item.text }/>
                        </div> ) }
                        
                        
                    </div>

                </article>


            </div>  

            <Wave color = { scssVariables.section3BackgroundColor } />

        </div>
    )
}

export default Section2

        