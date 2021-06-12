import React from 'react'
import { useSelector } from 'react-redux'
import CampsiteInlineSvg from '../images/campsite.inline.svg'
import './campsite.scss';
import { Text } from "../components/Text"
// import MenuItem from "./MenuItem"
import  MenuItems from "./MenuItems"

import data from "../components/data"

export const Campsite = () => {
    

    const scaleFactor = window.innerWidth >= window.innerHeight ? Math.abs(1.3 + (2 - window.innerWidth / window.innerHeight)) : 1; 
    //2 comes from original svg dimention ratio, 1.3 is my safety margin
    console.log('CAMPSITE RENDERED, ENLARGED BY ', scaleFactor);
    
    
    const isMenuOpen = useSelector((state) => state.isMenuOpen);

    const style1 = { 
        transform: `scale(${scaleFactor})` 
    };
    
    return (
    <div className = "campsiteWrapper">
        <CampsiteInlineSvg style = { style1 }/>
        <MenuItems open = { isMenuOpen }/>
        <Text tag = 'h1' text = {data.text1} name = 'text_1'/>
        <Text tag = 'h3' text = {data.text2} name = 'text_2'/>
        <Text tag = 'h2' text = {data.text3} name = 'text_3'/>
        <Text tag = 'h4' text = {data.text4} name = 'text_4'/>
        {/* <Text tag = 'h5' text = {data.text5} name = 'text_5'/> */}
        {/* <Text tag = 'p' text = {data.text6} name = 'text_6'/> */}
        {/* <Text tag = 'p' text = {data.text7} name = 'text_7'/> */}
        
    </div>
    )
}


