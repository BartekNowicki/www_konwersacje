import React from 'react'
import MenuItem from "./MenuItem"
import { useDispatch } from 'react-redux'
import { actionChangeIsMenuOpen } from '../state/actions'


const MenuItems = ({ open }) => {

    const dispatch = useDispatch();

    const handleCloseClick = () => dispatch(actionChangeIsMenuOpen(false));

    return open ? 
    (
        <div className = "menuItems">
            <MenuItem text = 'konwersacje' name = 'konwersacje'/>
            <MenuItem text = 'metoda' name = 'metoda'/>
            <MenuItem text = 'o mnie' name = 'omnie'/>
            <MenuItem text = 'cennik' name = 'cennik'/>
            <MenuItem text = 'lokalizacja' name = 'lokalizacja'/>
            <MenuItem text = 'zapisy' name = 'zapisy'/>
            <MenuItem text = 'faq' name = 'faq'/>
            <div className = 'menuCloseBtn' name = 'menuCloseBtn' onClick={ handleCloseClick } ></div>
        </div>
    ) : (
        <div className = "menuItems">
            <MenuItem text = 'menu' name = 'menu'/>            
        </div>
    )
}

export default MenuItems
