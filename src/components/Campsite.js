import React, { useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'
//import CampsiteInlineSvg from '../images/campsite.inline.svg'
import CampsiteInlineSvg from '../images/campsite.inline.svg'
import { Text } from '../components/Text'
import Texter from "../components/Texter"
import Face from "../components/Face"
import  MenuItems from "./MenuItems"
import data from '../data'
import * as scssVariables from '../scssVariablesForJs.module.scss'
import { gsap } from 'gsap'



export const Campsite = () => {

    //console.log('CAMPSITE RENDERED');

    const portrait = useSelector((state) => state.isPortrait);
    const isMenuOpen = useSelector((state) => state.isMenuOpen);
    
    const applyHeightPortrait = '100%';
    const applyHeightLandscape = '100%';

    let heroTextWrapperStyle = portrait
        ? { height: `${applyHeightPortrait}` }
        : { height: `${applyHeightLandscape}` }
    
    const scaleAndgetCampsiteSvgHeight = useCallback(
        (portrait) => {
        //protection clause for the Gatsby build process, where window does not exist
            if (typeof window === 'undefined') return

            const campsiteSvg = document.querySelector('.campsiteSvg');   

            const originalSvgRatio = 2000 / 1000;

            const weirdEmpiricalPart = 0.4; //0.2 is to small when deployed

            const factor = portrait ? 1 : Number((1 + (originalSvgRatio - window.innerWidth / window.innerHeight)).toFixed(1)) + weirdEmpiricalPart;

            //console.log('campsiteSvg scaled by ', factor);

            campsiteSvg.style.transform = `scale(${factor})`;

            return campsiteSvg ? campsiteSvg.getBoundingClientRect().height : 0;
        },        
    [],); 
    



    const positionComponentContent = useCallback(
        (portrait) => {
            //console.log('POSITIONING COMPONENT CONTENT');

            //1) scale the campsiteSvg to cover a bit  more than necessary
            //2 read its height after scaling and return the height to 
            //position the hero text wrapper

            let heightAfterScaling = scaleAndgetCampsiteSvgHeight(portrait);

            heightAfterScaling = Math.floor(heightAfterScaling - window.innerWidth * 0.03);

            document.querySelector('.heroTextWrapper').style.height = heightAfterScaling + 'px';        
        },
    [],);
    

    useEffect(() => {

        positionComponentContent(portrait);

        const tl = gsap.timeline();
        
        tl.to('[name = "text_1"] ', {
            opacity: 1,   
            duration: 2,
            delay: 2,                        
        }).to('[name = "text_2"] ', {
            opacity: 1,   
            duration: 2,                                  
        }).to('[name = "text_3"] ', {
            opacity: 1,   
            duration: 2,            
        }).to('[name = "text_4"] ', {
            opacity: 1,   
            duration: 2,
        });

        return () => {

            console.log('cleaning up the animation');

            tl.kill();

        }

    }, [portrait])


    const mainTextWrapper = { 
        backgroundColor: scssVariables.scssBlack,
        letterSpacing: '1px',        
        fontFamily: '$secondary-font',
        fontSize: '12px',     
    }

    const genericTexterStyles = {
        //border: '1px solid red'   
        borderRadius: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: '2vw',
        letterSpacing: '1px',
        fontSize: '14px',
        boxShadow: '10px 5px 5px black',
        
    }
        
    const texters = [
        {
            id: 0,
            styles: { position: 'absolute', top: '11%', left: '20px', ...genericTexterStyles },
            textTop : data.textSection1_51a,
            textBottom: data.textSection1_51b,
        },
        {   id: 1,
            styles: { position: 'absolute', top: '24%', left: '20px', ...genericTexterStyles },
            textTop: data.textSection1_52a,
            textBottom: data.textSection1_52b,
        },
        {
            id: 2,
            styles: { position: 'absolute', top: '37%', left: '20px', ...genericTexterStyles },
            textTop: data.textSection1_53a,
            textBottom: data.textSection1_53b,
        },
        {
            id: 3,
            styles: { position: 'absolute', top: '50%', left: '20px', ...genericTexterStyles },
            textTop: data.textSection1_54a,
            textBottom: data.textSection1_54b,
        },
        {
            id: 4,
            styles: { position: 'absolute', top: '63%', left: '20px', ...genericTexterStyles },
            textTop: data.textSection1_55a,
            textBottom: data.textSection1_55b,
        },
    ];

    const heroTexts = [
        {
            id: 0,
            tag: 'h1',
            text: data.textSection1_1,
            name: 'text_1',
        },
        {
            id: 1,
            tag: 'h3',
            text: data.textSection1_2,
            name: 'text_2',
        },
        {
            id: 2,
            tag: 'h2',
            text: data.textSection1_3,
            name: 'text_3',
        },
        {
            id: 3,
            tag: 'h4',
            text: data.textSection1_4,
            name: 'text_4',
        }
    
    ];


    
    return (

    <div className = "campsiteWrapper">

        <CampsiteInlineSvg />

        <MenuItems open = { isMenuOpen }/>

        <div className = "heroTextWrapper" style = { heroTextWrapperStyle }>

            { heroTexts.map(item => <Text key = { item.id } tag = { item.tag} text = { item.text } name = { item.name }/> ) }

        </div>

        {portrait && <div className = "mainTextWrapper" style = { mainTextWrapper }>

            <Text tag = 'p' classN = "pageSectionTitle" text = { data.textSection1_5 } name = 'section1Title'/>

            { texters.map(item => <Texter key = { item.id } texterStyles = { item.styles } textTop = { item.textTop }  textBottom = { item.textBottom }/>) }
                        
            <Face />

        </div>}
        
    </div>
    )
}