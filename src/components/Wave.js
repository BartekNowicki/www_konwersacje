import React from 'react'


const Wave = ({ color }) => {
   

    const waveStyles = {
        fill: color,
        fillOpacity: '1',
    }


    return (

        <div className = 'waveWrapStyles' >

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path style = { waveStyles } d="M0,224L60,234.7C120,245,240,267,360,261.3C480,256,600,224,720,218.7C840,213,960,235,1080,240C1200,245,1320,235,1380,229.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

        </div>
    )
}

export default Wave
