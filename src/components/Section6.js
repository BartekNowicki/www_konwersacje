import React from 'react'
import { Text } from "./Text"
import MyFormik from "./myFormik"

const Section6 = ({ sectionID }) => {

    return (

        <div id = { sectionID } className = "pageSection">

            <div className = "mainTextWrapper">

                <Text tag = 'p' text = 'zapisy i kontakt' name = 'zapisy' classN = 'pageSectionTitle'/>

                <MyFormik />

            </div>            
            
        </div>
    )
}

export default Section6