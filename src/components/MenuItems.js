import React, { useState, useEffect } from 'react'
import MenuItem from "./MenuItem"
import { useDispatch, useSelector } from 'react-redux'
import { actionChangeIsMenuOpen } from '../state/actions'
import data from "../data"


const MenuItems = ({ open }) => {

    //console.log('MENU ITEMS RENDERED');

    const dispatch = useDispatch();

    const [timeToRerender, setTimeToRerender] = useState(false);

    const location = useSelector((state) => state.location);  

    const handleCloseClick = () => dispatch(actionChangeIsMenuOpen(false));

    useEffect(() => {
        
        setTimeToRerender(true);
        
    }, [location])



    return open ? 
    (
        <div className = "menuItems">
            <MenuItem text = { data.menu1 } name = { data.menu1 }/>
            <MenuItem text = { data.menu2 } name = { data.menu2 }/>
            <MenuItem text = { data.menu3 } name = { data.menu3 }/>
            <MenuItem text = { data.menu4 } name = { data.menu4 }/>
            <MenuItem text = { data.menu5 } name = { data.menu5 }/>
            <MenuItem text = { data.menu6 } name = { data.menu6 }/>
            <MenuItem text = { data.menu7 } name = { data.menu7 }/>
            <div className = 'menuCloseBtn' name = 'menuCloseBtn' onClick={ handleCloseClick } ></div>
        </div>
    ) : (
        <div className = "menuItems">
            <MenuItem text = 'menu' name = 'menu'/>            
        </div>
    )
}

export default MenuItems
