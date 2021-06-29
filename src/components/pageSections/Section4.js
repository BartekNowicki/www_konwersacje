import React from 'react'
import { useSelector } from 'react-redux'
import { Text } from '../Text'
import data from '../../data'
import * as scssVariables from '../../scssVariablesForJs.module.scss'
import Courser from '../../components/Courser'
import Wave from '../Wave'



const coursers = [
    {
        id: 0,
        title: 'General English in Conversation Regular',
        description: 'grupa konwersacyjna spotykająca się raz w tygodniu',
        dates: ['grupa A wtorek g.9:00 - 10:00', 'grupa B wtorek g.19:00 - 20:00', 'grupa C środa g.9:00 - 10:00', 'grupa D środa g.19:00 - 20:00'],
        price: '1390zł / 20 spotkań'
    },
    {
        id: 1,
        title: 'General English in Conversation Intense',
        description: 'grupa konwersacyjna spotykająca się dwa razy w tygodniu',
        dates: ['grupa E poniedziałek i czwartek g.9:00 - 10:00', 'grupa F poniedziałek i czwartek g.19:00 - 20:00'],
        price: '2790zł / 40 spotkań'
    },
    {
        id: 2,
        title: 'Analyzing Scripts From Movies, TV Shows and Series',
        description: 'grupa konwersacyjna spotykająca się raz w tygodniu',
        dates: ['termin do ustalenia z uczestnikami'],
        price: '1390zł / 20 spotkań'
    },
    {
        id: 3,
        title: 'English in IT for Programmers and Software Developers',
        description: 'grupa konwersacyjna spotykająca się raz w tygodniu',
        dates: ['termin do ustalenia z uczestnikami'],
        price: '1390zł / 20 spotkań'
    },
    {
        id: 4,
        title: 'General English in Conversation One-on-One',
        description: 'spotkania indywidualne',
        dates: ['terminy ustalane są na bieżąco'],
        price: '110zł / 60min'
    },
    {
        id: 5,
        title: 'Specialized English in Conversation One-on-One',
        description: 'spotkania indywidualne',
        dates: ['terminy ustalane są na bieżąco'],
        price: '140zł / 60min'
    }
           
];


const Section4 = ({ sectionID }) => {

    const portrait = useSelector((state) => state.isPortrait);

    const styleOverride = {
         
        //border: '2px solid pink',
         backgroundColor: scssVariables.section4BackgroundColor,
         fontFamily: scssVariables.scssSecondaryFont,
         fontSize: scssVariables.standardFontSize,

    }
    

    const styleCourserWrapper = portrait 
    ? 
    {
        //border: '2px solid blue',
        margin: '20px auto',
        overflowY: 'scroll',
        scrollbarWidth: 'thin',
        scrollbarColor: '#1D1D1D gray',
        height: '80vh',
        width: '100%',
        maxWidth: '1000px',
    }
    :
    {
        //border: '2px solid blue',
        margin: '20px auto',
        overflowY: 'scroll',
        scrollbarWidth: 'thin',
        scrollbarColor: '#1D1D1D gray',
        height: '60vh',
        width: '100%',
        maxWidth: '1000px',       
    }

    return (

        <div id = { sectionID } className = 'pageSection'>

            <div className ='mainTextWrapper' style = { styleOverride }>

                <Text tag = 'p' text = { data.textSection4_1 } name = 'cennik' classN = 'pageSectionTitle'/>

                <Text tag = 'p' text = { data.textSection4_2 } />
                <Text tag = 'p' text = { data.textSection4_3 } />

                <div style = { styleCourserWrapper }>

                    { coursers.map(item => <div key = { item.id}><Courser title = { item.title } description = { item.description } dates = { item.dates } price = { item.price } /> </div>) }
                    
                </div>                

            </div>

            <Wave color = { scssVariables.section5BackgroundColor } />
            
        </div>
    )
}

export default Section4

        