import React from 'react'
import { Text } from '../Text'
import data from '../../data'
import MyFormik from '../myFormik'
import * as scssVariables from '../../scssVariablesForJs.module.scss'
import './section6.scss';
import Wave from '../Wave'


const Section6 = ({ sectionID }) => {

    const styleOverride = {
         backgroundColor: scssVariables.section6BackgroundColor,
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'start',         
    }   
    

    return (

        <div id = { sectionID } className = 'pageSection'>

            <div className = 'mainTextWrapper' style = { styleOverride }>

                <Text tag = 'p' text = { data.textSection6_1 } classN = 'pageSectionTitle' name = 'section6Title'/>

                <div className = 'zapisyTop'>

                    <Text tag = 'p' text = { data.textSection6_2 } styles = {{ textAlign: 'center' }}/>

                    <Text tag = 'p' text = { data.textSection6_3a } styles = {{ color: scssVariables.scssGreen, textAlign: 'center', userSelect: 'text'}}/>

                    <Text tag = 'p' text = { data.textSection6_3b } styles = {{ color: scssVariables.scssGreen, textAlign: 'center' }}/>

                    <Text tag = 'p' text = { data.textSection6_4 } styles = {{ textAlign: 'center' }}/>
                    
                </div>

                <div className = 'zapisyBottom'>

                    <MyFormik />

                </div>      
                
                

            </div>

            <Wave color = { scssVariables.section7BackgroundColor } />         
            
        </div>
    )
}

export default Section6