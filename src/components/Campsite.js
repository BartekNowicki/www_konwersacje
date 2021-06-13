import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CampsiteInlineSvg from '../images/campsite.inline.svg'
import './campsite.scss';
import { Text } from "../components/Text"
// import MenuItem from "./MenuItem"
import  MenuItems from "./MenuItems"
import data from "../components/data"


const scaleAndgetCampsiteSvgHeight = (portrait) => {

    const campsiteSvg = document.querySelector('.campsiteSvg');   

    const originalSvgRatio = 2000 / 1000;

    const weirdEmpiricalPart = 0.2;

    const factor = portrait ? 1 : Number((1 + (originalSvgRatio - window.innerWidth / window.innerHeight)).toFixed(1)) + weirdEmpiricalPart;

    console.log('campsiteSvg scaled by ', factor);

    campsiteSvg.style.transform = `scale(${factor})`;

    return campsiteSvg ? campsiteSvg.getBoundingClientRect().height : 0;
}



export const Campsite = () => {

    console.log('CAMPSITE RENDERED');

    const portrait = useSelector((state) => state.isPortrait);
    const isMenuOpen = useSelector((state) => state.isMenuOpen);
    
    const [renderCount, setRenderCount] = useState(0);

    const applyHeightPortrait = '100%';
    const applyHeightLandscape = '100%';

    let heroTextWrapperStyle = portrait
        ? { borderColor: 'red', height: `${applyHeightPortrait}` }
        : { borderColor: 'blue', height: `${applyHeightLandscape}` }


    const positionComponentContent = () => {

        console.log('POSITIONING COMPONENT CONTENT');

        //1) scale the campsiteSvg to cover a bit  more than necessary
        //2 read its height after scaling and return the height to 
        //position the hero text wrapper

        let heightAfterScaling = scaleAndgetCampsiteSvgHeight(portrait);

        heightAfterScaling = Math.floor(heightAfterScaling - window.innerWidth * 0.03);

        console.log(heightAfterScaling);

        document.querySelector('.heroTextWrapper').style.height = heightAfterScaling + 'px';

        

        heroTextWrapperStyle = portrait
        ? { borderColor: 'red', height: `${applyHeightPortrait}` }
        : { borderColor: 'blue', height: `${applyHeightLandscape}` }
    }            
    
    

    useEffect(() => {
        
        positionComponentContent();

    },[]);

    useEffect(() => {        
        
        setRenderCount(renderCount + 1);

        console.log('orientation change, rerendering for the nth time: ', renderCount);

        positionComponentContent();    

    },[portrait]);
    
    
    return (

    <div className = "campsiteWrapper">

        <CampsiteInlineSvg />

        <MenuItems open = { isMenuOpen }/>

        <div className = "heroTextWrapper" style = { heroTextWrapperStyle }>
            <Text tag = 'h1' text = {data.text1} name = 'text_1'/>
            <Text tag = 'h3' text = {data.text2} name = 'text_2'/>
            <Text tag = 'h2' text = {data.text3} name = 'text_3'/>
            <Text tag = 'h4' text = {data.text4} name = 'text_4'/>
        </div>
        {portrait && <div className = "mainTextWrapper">
            <Text tag = 'h5' text = {data.text5} name = 'text_5'/>
            <Text tag = 'p' text = {data.text6} name = 'text_6'/>
            <Text tag = 'p' text = {data.text7} name = 'text_7'/>
        </div>}
        
    </div>
    )
}


