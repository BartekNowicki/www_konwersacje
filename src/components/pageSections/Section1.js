import React from 'react'
import { Campsite } from "../Campsite"
import './section1.scss';


const Section1 = ({ sectionID }) => {

    return (
        <div id = { sectionID } className = "pageSection">
            <Campsite/>
        </div>
    ) 
}

export default Section1

        