import React from 'react'
import { useDispatch } from 'react-redux'
import { actionChangeIsMenuOpen, actionChangeLocation } from '../state/actions'
import board from '../images/board.svg'


const MenuItem = ({ name }) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        name === "menu" 
        ? dispatch(actionChangeIsMenuOpen(true))
        : dispatch(actionChangeLocation(name))
    }

    return (
        <div className = "menuItem" name = { name }>
            <img src={ board } className = "board" alt=""/>
            <p onClick={ handleClick } className = "menuItemText">{name === 'omnie' ? 'o mnie' : name}</p>
        </div>
    )
}

export default MenuItem