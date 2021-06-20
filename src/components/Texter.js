import React from 'react'
import { Text } from '../components/Text'
import * as scssVariables from '../scssVariablesForJs.module.scss'


const Texter = ({ texterStyles, textTop, textBottom }) => {

    return (
        <div style = { texterStyles } className = 'texter'>
            <Text tag = 'p' text = { textTop } styles = {{color: scssVariables.scssOrange, border: '0px solid red', paddingLeft: '5px'}}/>
            <Text tag = 'p' text = { textBottom } styles = {{color: scssVariables.scssGreen, border: '0px solid green', margin: '0px', paddingLeft: '20px'}}/>
        </div>
    )
}

export default Texter
