import React, { useState, useEffect } from 'react'


const AsyncComponent = () => {

  const [Component, setComponent] = useState(null);

  useEffect(() => {
  
    import('./Face').then(module => setComponent(() => Object.values(module)[0]));    
    
  }, [])

  return Component ? <Component /> : <p>loading...</p>
 
}

export default AsyncComponent