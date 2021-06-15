import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CampsiteInlineSvg from '../images/campsite.inline.svg'
import './campsite.scss';
import { Text } from "../components/Text"
import Texter from "../components/Texter"
import Face from "../components/Face"
import  MenuItems from "./MenuItems"
import data from "../components/data"
//import "./layout.scss"

import * as scssVariables from './scssVariablesForJs.module.scss'
//console.log('testVariable', scssVariables.scssPrimaryFont);


const scaleAndgetCampsiteSvgHeight = (portrait) => {

    
    //protection clause for the Gatsby build process, where window does not exist
    if (typeof window === 'undefined') return

    const campsiteSvg = document.querySelector('.campsiteSvg');   

    const originalSvgRatio = 2000 / 1000;

    const weirdEmpiricalPart = 0.4; //0.2 is to small when deployed

    const factor = portrait ? 1 : Number((1 + (originalSvgRatio - window.innerWidth / window.innerHeight)).toFixed(1)) + weirdEmpiricalPart;

    //console.log('campsiteSvg scaled by ', factor);

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
        ? { height: `${applyHeightPortrait}` }
        : { height: `${applyHeightLandscape}` }

        //{ borderColor: 'red', height: `${applyHeightPortrait}` }


    const positionComponentContent = () => {

        console.log('POSITIONING COMPONENT CONTENT');

        //1) scale the campsiteSvg to cover a bit  more than necessary
        //2 read its height after scaling and return the height to 
        //position the hero text wrapper

        let heightAfterScaling = scaleAndgetCampsiteSvgHeight(portrait);

        heightAfterScaling = Math.floor(heightAfterScaling - window.innerWidth * 0.03);

        //console.log(heightAfterScaling);

        document.querySelector('.heroTextWrapper').style.height = heightAfterScaling + 'px';        

        heroTextWrapperStyle = portrait
        ? { height: `${applyHeightPortrait}` }
        : { height: `${applyHeightLandscape}` }
    }            
    
    

    useEffect(() => {
        
        positionComponentContent();

    },[]);

    useEffect(() => {        
        
        setRenderCount(renderCount + 1);

        //console.log('orientation change, rerendering for the nth time: ', renderCount);

        positionComponentContent();    

    },[portrait]);

    const styleOverride = { backgroundColor: scssVariables.scssBlack }

    const styles1 = { position: 'absolute', top: '9%', left: '20px' }
    const styles2 = { position: 'absolute', top: '22%', left: '20px' }
    const styles3 = { position: 'absolute', top: '35%', left: '20px' }
    const styles4 = { position: 'absolute', top: '48%', left: '20px' }
    const styles5 = { position: 'absolute', top: '61%', left: '20px' }

    
    return (

    <div className = "campsiteWrapper">

        <CampsiteInlineSvg />

        <MenuItems open = { isMenuOpen }/>

        <div className = "heroTextWrapper" style = { heroTextWrapperStyle }>
            <Text tag = 'h1' text = { data.text1 } name = 'text_1'/>
            <Text tag = 'h3' text = { data.text2 } name = 'text_2'/>
            <Text tag = 'h2' text = { data.text3 } name = 'text_3'/>
            <Text tag = 'h4' text = { data.text4 } name = 'text_4'/>
        </div>
        {portrait && <div className = "mainTextWrapper" style = { styleOverride }>
            <Text tag = 'p' classN = "pageSectionTitle" text = { data.text5 } name = 'text_5'/>
            <Texter texterStyles = { styles1 } textTop = { data.text51a }  textBottom = { data.text51b }/>
            <Texter texterStyles = { styles2 } textTop = { data.text52a }  textBottom = { data.text52b }/>
            <Texter texterStyles = { styles3 } textTop = { data.text53a }  textBottom = { data.text53b }/>
            <Texter texterStyles = { styles4 } textTop = { data.text54a }  textBottom = { data.text54b }/>
            <Texter texterStyles = { styles5 } textTop = { data.text55a }  textBottom = { data.text55b }/>
            
            <Face />
        </div>}
        
    </div>
    )
}


