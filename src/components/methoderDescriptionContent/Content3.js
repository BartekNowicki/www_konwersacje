import React from 'react'
import data from '../../data'
import { Text } from '../../components/Text'


const Content3 = () => {

    
    return (
        <div className = 'methoderDescriptionContent'>
    
            <Text tag = 'p' text = { data.textSection2_3c } />
            <Text tag = 'p' text = { data.textSection2_3d } />
            <Text tag = 'p' text = { data.textSection2_3e } />
            <Text tag = 'p' text = { data.textSection2_3f } />
        </div>
    )
}

export default Content3
