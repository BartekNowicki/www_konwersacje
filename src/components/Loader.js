import React from 'react'

const Loader = () => {

    const loaderStyles = {
    position: 'fixed',
    top: '50%', 
    left: '50%',    
    zIndex: '10',
    transform: 'translate(-50%, -50%)',
    color: 'gray',
    fontSize: '3vmin'
}


    return (
        <div style = { loaderStyles }>...loading this and that and what not, please wait up...</div>
    )
}

export default Loader
