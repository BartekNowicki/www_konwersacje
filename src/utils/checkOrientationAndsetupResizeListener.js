import { actionChangeOrientation } from '../state/actions'


const handleResize = (store) => {

    //protection clause for the Gatsby build process, where window does not exist
    if (typeof window === 'undefined') return

    console.log('resize');

    window.innerWidth >= window.innerHeight 
    ? store.dispatch(actionChangeOrientation(false))
    : store.dispatch(actionChangeOrientation(true));
}

const checkOrientationAndsetupResizeListener = (store) => {

    //protection clause for the Gatsby build process, where window does not exist
    if (typeof window === 'undefined') return
    
    handleResize(store);
    window.addEventListener('resize', () => handleResize(store));
}


export default checkOrientationAndsetupResizeListener