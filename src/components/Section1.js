import React from 'react'
import { Campsite } from "../components/Campsite"


const Section1 = ({ sectionID }) => {

    return (
        <div id = { sectionID } className = "pageSection">
            <Campsite/>
        </div>
    ) 
}

export default Section1

        