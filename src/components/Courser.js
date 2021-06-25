import React from 'react'
import { Text } from './Text'
import * as scssVariables from '../scssVariablesForJs.module.scss'


const Courser = ({ title, description, dates, price }) => {    

    const styleCourser = {
        margin: '30px 0',
        border: '1px solid rgba(0, 0, 0, 0.6)',
        textAlign: 'center',
    }

    const styleTitle = {
         border: `1px solid transparent`,
         backgroundColor: scssVariables.scssOrange,
         padding: '5px',
         fontWeight: 'bold',
    }

    const styleDescription = {
         border: `1px solid ${ scssVariables.scssOrange }`,
         backgroundColor: scssVariables.scssOrangeLight,
         padding: '5px',
         fontStyle: 'italic',
    }

    const styleDates = {
         border: `1px solid transparent`,
         backgroundColor: 'transparent',
         padding: '5px',
         display: 'flex',
         flexDirection: 'column',
    }

    const stylePrice = {
         border: `1px solid ${ scssVariables.scssOrange }`,
         backgroundColor: scssVariables.scssOrangeLight,
         padding: '5px',
    }

    return (
        <div style = { styleCourser }>
            <div style = { styleTitle }>{ title }</div>
            <div style = { styleDescription }>{ description }</div>
            <div style = { styleDates }>{ dates[0] }</div>
            {dates[1] && <div style = { styleDates }>{ dates[1] }</div>}
            {dates[2] && <div style = { styleDates }>{ dates[2] }</div>}
            {dates[3] && <div style = { styleDates }>{ dates[3] }</div>}
            <div style = { stylePrice }>{ price }</div>          
        </div>
    )
}

export default Courser
