import React from 'react'
import { Text } from '../Text'
import data from '../../data'
import MyFormik from '../myFormik'
import * as scssVariables from '../../scssVariablesForJs.module.scss'
import './section6.scss';

const Section6 = ({ sectionID }) => {

    const styleOverride = {
         backgroundColor: scssVariables.scssBlack,
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

                    <Text tag = 'p' text = { data.textSection6_3 } styles = {{ color: scssVariables.scssGreen, textAlign: 'center', userSelect: 'text'}}/>

                    <Text tag = 'p' text = { data.textSection6_4 } styles = {{ fontSize: '12px' }} styles = {{ textAlign: 'center', fontSize: '12px' }}/>
                    
                </div>

                <div className = 'zapisyBottom'>

                    <MyFormik />

                </div>      
                
                

            </div>            
            
        </div>
    )
}

export default Section6