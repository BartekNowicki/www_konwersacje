import React from 'react'
import { Text } from "./Text"
import data from "../components/data"

const Section3 = ({ sectionID }) => {
   
    return (
        <div id = { sectionID } className = "pageSection">

            <div className = "mainTextWrapper">

                <Text tag = 'p' text = 'kilka słów o mnie' name = 'o mnie' classN = 'pageSectionTitle'/>
                <Text tag = 'p' text = {data.text91} name = 'text_91'/>
                <Text tag = 'p' text = {data.text92} name = 'text_92'/>
                <Text tag = 'p' text = {data.text93} name = 'text_93'/>
                <Text tag = 'p' text = {data.text94} name = 'text_94'/>
                <Text tag = 'p' text = {data.text95} name = 'text_95'/>
                <Text tag = 'p' text = {data.text96} name = 'text_96'/>
                <Text tag = 'p' text = {data.text97} name = 'text_97'/>  

            </div>
            
        </div>
    )
}

export default Section3


        