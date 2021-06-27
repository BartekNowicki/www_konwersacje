import React from 'react'
import * as scssVariables from '../scssVariablesForJs.module.scss'


const Courser = ({ title, description, dates, price }) => {    

    const courserStyles = {
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        padding: '4vmin',
        margin: '20px',
        textAlign: 'center',
        boxShadow: '3px 3px 6px rgba(0, 0, 0, 0.1)',
    }

    const courserTitleStyles = {
        border: `1px solid ${ scssVariables.scssOrange }`,
        borderRadius: '5px',
        backgroundColor: scssVariables.scssOrangeLight,
        padding: '5px',
        fontWeight: 'bold',
    }

    const courserDescriptionStyles = {         
        padding: '5px',
        fontStyle: 'italic',
    }

    const courserDatesStyles = {         
        padding: '5px',
        display: 'flex',
        flexDirection: 'column',
    }

    const courserPriceStyles = {
        borderRadius: '10px',
        backgroundColor: scssVariables.scssGreen,
        padding: '5px',
        fontWeight: 'bold',
    }

    return (
        <div style = { courserStyles }>
            <div style = { courserTitleStyles }>{ title }</div>
            <div style = { courserDescriptionStyles }>{ description }</div>
            <div style = { courserDatesStyles }>{ dates[0] }</div>
            {dates[1] && <div style = { courserDatesStyles }>{ dates[1] }</div>}
            {dates[2] && <div style = { courserDatesStyles }>{ dates[2] }</div>}
            {dates[3] && <div style = { courserDatesStyles }>{ dates[3] }</div>}
            <div style = { courserPriceStyles }>{ price }</div>          
        </div>
    )
}

export default Courser
