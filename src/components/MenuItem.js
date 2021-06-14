import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionChangeIsMenuOpen, actionChangeLocation } from '../state/actions'
import board from '../images/board.svg'
import { gsap } from "gsap"


const MenuItem = ({ name }) => {

    //console.log('MENU ITEM RENDERED ', name);    

    const dispatch = useDispatch();
    
    const location = useSelector((state) => state.location);  

    let classNames = ['menuItemText'];

    !classNames.includes('active') && location === name 
        ? classNames.push('active')
        : classNames = classNames.filter(item => item !== 'active');
        

    const handleClick = () => {
        name === "menu" 
        ? dispatch(actionChangeIsMenuOpen(true))
        : dispatch(actionChangeLocation(name));

        gsap.to(".menuItems", {rotation: 27, x: 100, duration: 1});
    }

    

    

    return (
        <div className = "menuItem" name = { name }>
            <img src={ board } className = "board" alt=""/>
            <p onClick={ handleClick } className = {classNames.join(' ')}>{name === 'omnie' ? 'o mnie' : name}</p>
        </div>
    )
}

export default MenuItem