import React, { useCallback } from 'react'
import { Text } from './Text'
import { gsap } from 'gsap'

//import noentry from '../images/noentry.inline.svg'

let methoderTimeline = null;

const movedMethoderStyles = {
    position: 'fixed',
    top: '0', 
    left: '0',    
    zIndex: 2,
    cursor: 'default',
    transform: 'scale(0.5)'
}


const Methoder = ({ text, squareSize }) => {
        
    //console.log('METHODER RENDERED');

    const handleMethoderClick = useCallback(
        (e) => {

            if (e.target.tagName === 'P') {
                //if clicked on a child, propagate up
                //console.log('manually propagating the event to my parent');
                e.target = e.target.parentNode;
            }
            
            if (!e.target || e.target.getAttribute('status') === 'moved') return
                
                //disable scrolling under the methoder
                document.body.style.position = 'fixed';               

                const tl = gsap.timeline();
                methoderTimeline = tl;
                
                const getMatchingDescriptionElement = (node) => document.querySelector(`.methoderDescription${node.classList[1]}`)

                tl.to('.decorator', {
                        visibility: 'hidden',   
                        duration: 0.1,                    
                        onComplete: () => {
                            console.log('decorators hidden');             
                        }
                }).to('.gridderOverlay', {
                        visibility: 'visible',
                        width: '100vw',
                        height: '100vh', 
                        duration: 0.3,                    
                        onComplete: () => {
                            console.log('myOuterTween complete');                       
                        }
                }).to(e.target, {
                        ...movedMethoderStyles,                        
                        duration: 0.3,                    
                        onComplete: () => {
                            console.log('myInnerTween complete');
                            e.target.setAttribute('status', 'moved');
                            //console.log(e.target, 'status after complete', e.target.getAttribute('status'));
                            //tl.reverse();
                        },
                        onReverseComplete: () => {
                            console.log('reverse complete');
                            e.target.removeAttribute('status');
                            //console.log(e.target, 'status after reverse', e.target.getAttribute('status'));
                        }                   
                })
                .to(getMatchingDescriptionElement(e.target), {
                        // visibility: 'visible',
                        className: "-='hidden'",
                        duration: 0.1,
                        delay: 0.75, //target not immediately identified                      
                });

                //console.log('creating new timeline, playing');

                //methoderDescription
               
                tl.play();            
            
        },
        [],
    );
   
    
    return (
        <div className = {`methoder ${text[0]}${text[1]}`} style = {{ height: squareSize + 'px', width: squareSize }} onClick = { handleMethoderClick }>

            <Text tag = 'p' text = { text }/>
            <div className='decorator'></div>
            <div className='decorator'></div>
            <div className='decorator'></div>
            <div className='decorator'></div>
            
        </div>
    )
}

const test = 999;

//export default Methoder
export { Methoder, methoderTimeline };




