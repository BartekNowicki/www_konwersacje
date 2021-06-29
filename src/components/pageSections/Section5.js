import React from 'react'
import { Text } from '../Text'
import data from '../../data'
import * as scssVariables from '../../scssVariablesForJs.module.scss'
import  Map from '../Map'
import Wave from '../Wave'

const Section5 = ({ sectionID }) => {

    const styleOverride = {
         //border: '2px solid blue',
         backgroundColor: scssVariables.section5BackgroundColor,
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center',
    }

    const styleIntro = {
          //border: '2px solid pink',
          padding: '10px',
          fontFamily: scssVariables.scssSecondaryFont,
          fontSize: scssVariables.standardFontSize,         
          color: scssVariables.scssSmoke,        
    }

    const styleMapWrapper = {
         //border: '2px solid red',
         display: 'flex',
         flexDirection: 'column',
         flexGrow: '1',
         width: '100%',        
    }

   return (

        <div id = { sectionID } className = "pageSection">

            <div className = "mainTextWrapper" style = { styleOverride }>
                <Text tag = 'p' text = { data.textSection5_1 } classN = 'pageSectionTitle' name = 'section5Title'/>

                <div style = { styleIntro }>
                    <Text tag = 'p' text = { data.textSection5_2 } />
                    <Text tag = 'p' text = { data.textSection5_3 } />
                </div>

                <div style = { styleMapWrapper }>
                    <Map />
                </div>
                
            </div>

            <Wave color = { scssVariables.section6BackgroundColor } />
            
        </div>
    )
}

export default Section5

        