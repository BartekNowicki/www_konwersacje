import React from 'react'
import { Text } from '../Text'

const Section5 = ({ sectionID }) => {

   return (
        <div id = { sectionID } className = "pageSection">

            <div className = "mainTextWrapper">
                <Text tag = 'p' text = 'lokalizacja' name = 'lokalizacja' classN = 'pageSectionTitle'/>
            </div>
            
        </div>
    )
}

export default Section5

        