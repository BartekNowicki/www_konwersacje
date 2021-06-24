import React from 'react'
import { Text } from './Text'
import * as scssVariables from '../scssVariablesForJs.module.scss'
// import data from '../../data'

const Courser = ({ title, description, dates, price }) => {

    

    const styleCourser = {
        marginTop: '10px',
         //border: '2px solid black',
         borderRadius: '5px',
        //  backgroundColor: scssVariables.scssSmoke,
         //fontFamily: scssVariables.scssSecondaryFont,
         //fontSize: '3vmin',       
        //  display: 'flex',
        //  flexDirection: 'column',
        //  justifyContent: 'center',
        //  alignItems: 'center',
    }

    const styleTitle = {
         border: `1px solid ${ scssVariables.scssOrange }`,
         backgroundColor: scssVariables.scssOrangeLight,
         padding: '5px',
    }

    const styleDescription = {
         border: `1px solid ${ scssVariables.scssOrange }`,
         backgroundColor: scssVariables.scssOrangeLight,
         padding: '5px',
    }

    const styleDates = {
         border: `1px solid ${ scssVariables.scssOrange }`,
         backgroundColor: scssVariables.scssOrangeLight,
         padding: '5px',
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
            <div style = { styleDates }>{ dates }</div>          
            <div style = { stylePrice }>{ price }</div>          
        </div>
    )
}

export default Courser
