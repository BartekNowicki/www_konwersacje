import React, { useState, useEffect } from 'react'


const AsyncCampsiteComponent = () => {

  const [Component, setComponent] = useState(null);

  useEffect(() => {
  
    import('../images/campsite.inline.svg').then(module => setComponent(() => Object.values(module)[0]));    
    
  }, [])

  return Component ? <Component /> : <p className = 'campsiteSvg' >loading...</p>
 
}

export default AsyncCampsiteComponent