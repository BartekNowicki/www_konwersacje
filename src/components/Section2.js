import React from 'react'
import { Text } from "./Text"
import data from "../components/data"

const Section2 = ({ sectionID }) => {

    return (
        <div id = { sectionID } className = "pageSection">

            <div className = "mainTextWrapper">

                <Text tag = 'p' text = 'metoda i założenia teoretyczne' name = 'metoda' classN = 'pageSectionTitle'/>
                <Text tag = 'p' text = {data.text81} name = 'text_81'/>
                <Text tag = 'p' text = {data.text82} name = 'text_82'/>
                <Text tag = 'p' text = {data.text83} name = 'text_83'/>
                <Text tag = 'p' text = {data.text84} name = 'text_84'/>

            </div>  
        </div>
    )
}

export default Section2

        