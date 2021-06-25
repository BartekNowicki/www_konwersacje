import React from 'react'
import { useSelector } from 'react-redux'
import { Text } from '../Text'
import data from '../../data'
import * as scssVariables from '../../scssVariablesForJs.module.scss'
import Courser from '../../components/Courser'



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
        title: 'General English in Conversation One-on-One',
        description: 'spotkania indywidualne',
        dates: ['terminy ustalane są na bieżąco'],
        price: '110zł / 60min'
    },
    // {
    //     id: 3,
    //     title: 'course4',
    //     description: 'description4',
    //     dates: ['dates4'],
    //     price: 'price4'
    // },
       
];


const Section4 = ({ sectionID }) => {

    const portrait = useSelector((state) => state.isPortrait);

    const styleOverride = {
         
        //border: '2px solid pink',
         backgroundColor: scssVariables.scssDark,
         fontFamily: scssVariables.scssSecondaryFont,
         fontSize: '3vmin',

    }
    

    const styleCourserWrapper = portrait 
    ? 
    {
        //border: '2px solid blue',
        margin: '20px',
        overflowY: 'scroll',
        height: '80vh',
        maxWidth: '800px',
    }
    :
    {
        //border: '2px solid blue',
        margin: '20px auto',
        overflowY: 'scroll',
        height: '60vh',
        maxWidth: '800px',       
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
            
        </div>
    )
}

export default Section4

        