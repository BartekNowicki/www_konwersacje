import React from 'react'
import { Text } from '../Text'
import data from '../../data'
import * as scssVariables from '../../scssVariablesForJs.module.scss'

const Section5 = ({ sectionID }) => {

    const styleOverride = {
         border: '2px solid blue',
         backgroundColor: scssVariables.scssBlack,
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center',
    }

    const styleIntro = {
          //border: '2px solid pink',
          padding: '10px',
          fontFamily: scssVariables.scssSecondaryFont,
          fontSize: '3vmin',          
          color: scssVariables.scssSmoke,        
    }

    const styleMap = {
         border: '2px solid red',
         display: 'flex',
         flexDirection: 'column',
         flexGrow: '1',
         width: '100%',
        //  justifyContent: 'center',
        //  alignItems: 'center',
    }

   return (
        <div id = { sectionID } className = "pageSection">

            <div className = "mainTextWrapper" style = { styleOverride }>
                <Text tag = 'p' text = { data.textSection5_1 } classN = 'pageSectionTitle' name = 'section5Title'/>

                <div style = { styleIntro }>
                    <Text tag = 'p' text = { data.textSection5_2 } />
                </div>

                <div style = { styleMap }></div>
                
            </div>
            
        </div>
    )
}

export default Section5

        