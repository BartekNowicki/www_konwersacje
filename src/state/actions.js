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

    export const actionChangeFormSent = (isSent = false) => {        
        return {
            type: 'NEW_STATUS',
            payload: isSent
        }
    }

    export const actionChangeOrientation = (isPortrait = true) => {        
        return {
            type: 'NEW_ORIENTATION',
            payload: isPortrait
        }
    }

    