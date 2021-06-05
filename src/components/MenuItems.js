import React from 'react'
import MenuItem from "./MenuItem"

const MenuItems = ({ open }) => {

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
        </div>
    ) : (
        <div className = "menuItems">
            <MenuItem text = 'menu' name = 'menu'/>            
        </div>
    )
}

export default MenuItems



