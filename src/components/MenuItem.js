import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionChangeIsMenuOpen, actionChangeLocation } from '../state/actions'
//import board from '../images/board.svg'
import board from '../images/board_minified.svg'

import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
gsap.registerPlugin(ScrollToPlugin);


const MenuItem = ({ name }) => {

    const scrollToLocation = useCallback(
        (nameID) => {
            //protection clause for the Gatsby build process, where window does not exist
            if (typeof window === 'undefined') return

            if (nameID === "menu") return

            gsap.to(window, {duration: 2, scrollTo: `#${nameID}ID`});
        },
        [],
    );

    const handleClick = useCallback(
        () => {
            name === "menu" 
        ? dispatch(actionChangeIsMenuOpen(true))
        : dispatch(actionChangeLocation(name));
       
        scrollToLocation(name);  
        },
        [],
    );


    //console.log('MENU ITEM RENDERED ', name);    

    const dispatch = useDispatch();
    
    const location = useSelector((state) => state.location);  

    let classNames = ['menuItemText'];

    !classNames.includes('active') && location === name 
        ? classNames.push('active')
        : classNames = classNames.filter(item => item !== 'active');
    

    return (
        <div className = "menuItem" name = { name }>
            <img src={ board } className = "board" alt=""/>
            <p onClick={ handleClick } className = {classNames.join(' ')}>{name === 'omnie' ? 'o mnie' : name}</p>
        </div>
    )
}

export default MenuItem