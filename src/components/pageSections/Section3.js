import React from 'react'
import { Text } from '../Text'
import * as scssVariables from '../../scssVariablesForJs.module.scss'
import Slider from '../Slider';
import './section3.scss';

    

const Section3 = ({ sectionID }) => {

    const styleOverride = {
         //border: '2px solid blue',
         backgroundColor: scssVariables.scssBlack,
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center',
    }

    const sliderWrapperStyles = {
        //border: '2px solid blue',
        flexGrow: 1,
        width: '100%',        
    }
   
    return (
        <div id = { sectionID } className = 'pageSection'>

            <div className = 'mainTextWrapper' style = { styleOverride }>
                <Text tag = 'p' text = 'kilka słów o mnie' name = 'o mnie' classN = 'pageSectionTitle' name = 'section3Title'/>
                <div style = { sliderWrapperStyles }>
                    <Slider />
                </div>

            </div>
            
        </div>
    )
}

export default Section3