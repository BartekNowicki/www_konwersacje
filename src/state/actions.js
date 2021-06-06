    export const actionChangeEmail = (newEmail) => {        
        return {
            type: 'NEW_EMAIL', 
            payload: newEmail 
        }
    }

    export const actionChangeMessage = (newMessage) => {        
        return {
            type: 'NEW_MESSAGE', 
            payload: newMessage
        }
    }

    export const actionChangeIsMenuOpen = (openMenu = false) => {        
        return {
            type: openMenu ? 'OPEN_MENU' : 'CLOSE_MENU'
        }
    }

    export const actionChangeLocation = (newLocation) => {        
        return {
            type: 'NEW_LOCATION',
            payload: newLocation
        }
    }

    