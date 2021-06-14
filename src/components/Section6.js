import React from 'react'
import { Text } from "./Text"
import MyFormik from "./myFormik"

const Section6 = () => {

    return (

        <div className = "pageSection">

            <div className = "mainTextWrapper">

                <Text tag = 'p' text = 'zapisy i kontakt' name = 'zapisy' classN = 'pageSectionTitle'/>

                <MyFormik />

            </div>            
            
        </div>
    )
}

export default Section6