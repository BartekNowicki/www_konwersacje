import { actionChangeOrientation } from '../state/actions'


const handleResize = (store) => {

    console.log('resize');

    window.innerWidth >= window.innerHeight 
    ? store.dispatch(actionChangeOrientation(false))
    : store.dispatch(actionChangeOrientation(true));
}

const checkOrientationAndsetupResizeListener = (store) => {
    handleResize(store);
    window.addEventListener('resize', () => handleResize(store));
}


export default checkOrientationAndsetupResizeListener