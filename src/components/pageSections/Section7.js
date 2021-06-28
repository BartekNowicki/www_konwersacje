import React from 'react'
import { Text } from '../Text'
import * as scssVariables from '../../scssVariablesForJs.module.scss'

import Wave from '../Wave'

const Section7 = ({ sectionID }) => {

    const styleOverride = {
         backgroundColor: scssVariables.section7BackgroundColor,
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'start',         
    }

    return (

        <div id = { sectionID } className = 'pageSection'>

            <div className = 'mainTextWrapper' style = { styleOverride }>

                <Text tag = 'p' text = 'często zadawane pytania' name = 'faq' classN = 'pageSectionTitle' name = 'section7Title'/>

            </div>

            <Wave color = { scssVariables.black } />  
            
        </div>
    )
}

export default Section7

        