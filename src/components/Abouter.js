import React from 'react'
import { Text } from './Text'
import flagPL from '../images/flagPL.svg'
import flagUS from '../images/flagUS.svg'
import * as scssVariables from '../scssVariablesForJs.module.scss'



const Abouter = ({ text, logoUrl, country, location, dates, status }) => {

    const screenStyles = {
        color: 'rgba(255, 255, 255, 0.6)',
        fontFamily: scssVariables.scssSecondaryFont,
        fontSize: '4vmin',
        display: 'flex',
        width: '100%', 
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        //border: '2px solid green',        
    }

    const logoStyles = {        
        width: '30vmin', 
        height: '30vmin',
        backgroundImage: `url(${logoUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        border: '1px solid rgba(0, 0, 0, 0.8)',
        borderRadius: '50%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        position: 'relative' //for the flag
    }

    const flagStyles = {        
        width: '20vmin', 
        height: '10vmin',
        backgroundImage: `url(${country === 'pl' ? flagPL : flagUS})`,
        backgroundRepeat: 'no-repeat',        
        backgroundSize: 'contain',        
        borderBottomLeftRadius: '5px',
        position: 'absolute',
        top: '-10%',
        transformOrigin: 'bottom left',
        transform: `translateY(-50%) rotate(${country === 'pl' ? '0deg' : '25deg'})`,
        //border: '1px solid red',        
        right: '-60%',
    }

    

    return (

        <div style = { screenStyles }>

            <div style = { logoStyles }>
                
                <div style = { flagStyles }></div>

            </div>

            
            
            <Text tag = 'p' text = { text } styles = {{ textAlign: 'center', marginTop: '10px' }}/>
            
            <Text tag = 'p' text = { dates } styles = {{ textAlign: 'center', marginTop: '10px' }}/>

            <Text tag = 'p' text = { location } styles = {{ textAlign: 'center', marginTop: '10px' }}/>

            <Text tag = 'p' text = { status } styles = {{ textAlign: 'center', marginTop: '10px' }}/>            
            

        </div>
    )
}

export default Abouter
