import React from 'react'
import { Text } from '../Text'

const Section4 = ({ sectionID }) => {

    return (
        <div id = { sectionID } className = "pageSection">

            <div className = "mainTextWrapper">
                <Text tag = 'p' text = 'cennik' name = 'cennik' classN = 'pageSectionTitle'/>
            </div>
            
        </div>
    )
}

export default Section4

        