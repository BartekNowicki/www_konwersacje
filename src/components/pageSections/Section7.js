import React from 'react'
import { Text } from '../Text'

const Section7 = ({ sectionID }) => {

    return (

        <div id = { sectionID } className = "pageSection">

            <div className = "mainTextWrapper">

                <Text tag = 'p' text = 'często zadawane pytania' name = 'faq' classN = 'pageSectionTitle'/>

            </div>
            
        </div>
    )
}

export default Section7

        