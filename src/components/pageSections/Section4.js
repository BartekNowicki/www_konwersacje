import React from 'react'
import { useSelector } from 'react-redux'
import { Text } from '../Text'
import data from '../../data'
import * as scssVariables from '../../scssVariablesForJs.module.scss'
import Courser from '../../components/Courser'



const coursers = [
    {
        id: 0,
        title: 'course1',
        description: 'description1',
        dates: 'dates1',
        price: 'price1'
    },
    {
        id: 1,
        title: 'course2',
        description: 'description2',
        dates: 'dates2',
        price: 'price2'
    },
    {
        id: 2,
        title: 'course3',
        description: 'description3',
        dates: 'dates3',
        price: 'price3'
    },
    {
        id: 3,
        title: 'course4',
        description: 'description4',
        dates: 'dates4',
        price: 'price4'
    },
       
];


const Section4 = ({ sectionID }) => {

    const portrait = useSelector((state) => state.isPortrait);

    const styleOverride = {
         //border: '2px solid blue',
         //backgroundColor: scssVariables.scssOrangeDark,
         backgroundColor: scssVariables.scssOrangeLight,
         fontFamily: scssVariables.scssSecondaryFont,
         fontSize: '3vmin',       
        //  display: 'flex',
        //  flexDirection: 'column',
        //  justifyContent: 'center',
        //  alignItems: 'center',
    }
    

    const styleCourserWrapper = portrait 
    ? 
    {
        border: '2px solid blue',
        overflowY: 'scroll',
        height: '80vh',        
    }
    :
    {
        border: '2px solid blue',
        overflowY: 'scroll',
        height: '60vh',        
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

        