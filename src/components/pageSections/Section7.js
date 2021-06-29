import React from 'react'
import { Text } from '../Text'
import * as scssVariables from '../../scssVariablesForJs.module.scss'
import data from '../../data'
import Wave from '../Wave'
import Texter from '../Texter'

const Section7 = ({ sectionID }) => {

    const styleOverride = {
        //border: '5px solid green', 
        backgroundColor: scssVariables.section7BackgroundColor,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',        
        overflow: 'hidden',         
    }

    const texterWrapperStyles = {
        //border: '5px solid blue',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        overflowY: 'scroll',
        maxWidth: '1000px',
        margin: 'auto',
        scrollbarWidth: 'thin',
        scrollbarColor: '#1D1D1D gray',
    }
        

    const genericTexterStyles = {
        //border: '1px solid red',   
        borderRadius: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: '3vmin',
        margin: '20px',
        font: scssVariables.exportedSecondaryFont,
        //letterSpacing: '1px',
        fontSize: scssVariables.standardFontSize,
        lineHeight: 1.5,
        boxShadow: '10px 5px 5px black',
               
        
    }


    const texters = [
        {
            id: 0,
            styles: { ...genericTexterStyles },
            textTop : data.textSection7_2a,
            textBottom: data.textSection7_2b,
        },
        {   id: 1,
            styles: { ...genericTexterStyles },
            textTop : data.textSection7_3a,
            textBottom: data.textSection7_3b,
        },
        {
            id: 2,
            styles: { ...genericTexterStyles },
            textTop : data.textSection7_4a,
            textBottom: data.textSection7_4b,
        },
        {
            id: 3,
            styles: { ...genericTexterStyles },
            textTop : data.textSection7_5a,
            textBottom: data.textSection7_5b,
        },
        {
            id: 4,
            styles: { ...genericTexterStyles },
            textTop : data.textSection7_6a,
            textBottom: data.textSection7_6b,
        },
        {
            id: 5,
            styles: { ...genericTexterStyles },
            textTop : data.textSection7_7a,
            textBottom: data.textSection7_7b,
        },
    ];


    return (

        <div id = { sectionID } className = 'pageSection'>

            <div className = 'mainTextWrapper' style = { styleOverride }>

                <Text tag = 'p' text = { data.textSection7_1 } name = 'faq' classN = 'pageSectionTitle' name = 'section7Title'/>

                <div style = { texterWrapperStyles }>
            
                    { texters.map(item => <Texter key = { item.id } texterStyles = { item.styles } textTop = { item.textTop }  textBottom = { item.textBottom }/>) }

                </div>

                

            </div>

            <Wave color = { scssVariables.black } />  
            
        </div>
    )
}

export default Section7

        