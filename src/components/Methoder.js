import React, { useCallback } from 'react'
import { Text } from "./Text"
import { gsap } from "gsap"

let methoderTimeline = null;


const Methoder = ({ text, squareSize }) => {
        
    //console.log('METHODER RENDERED');

    const handleMethoderClick = useCallback(
        (e) => {
            
            if (e.target.getAttribute('status') === 'moved') 
                return console.log('already moved!');

                const tl = gsap.timeline();
                methoderTimeline = tl;           

                tl.to('.decorator', {
                        visibility: 'hidden',                    
                        duration: 0.1,                    
                        onComplete: () => {
                            console.log('decorators hidden');             
                        }
                }).to('.gridderOverlay', {
                        width: '100vw',
                        height: '100vh', 
                        duration: 0.3,                    
                        onComplete: () => {
                            console.log('myOuterTween complete');                       
                        }
                }).to(e.target, {
                        position: 'fixed',
                        top: '5vw', 
                        left: '5vw',
                        zIndex: 2,
                        cursor: 'default',
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
                });

                //console.log('creating new timeline, playing');
               
                tl.play();            
            
        },
        [],
    );


    
    
    return (
        <div className = {`methoder ${text[0]}${text[1]}`} style = {{ height: squareSize + 'px', width: squareSize}} onClick = { handleMethoderClick }>

            <Text tag = 'p' text = { text } name = ''/>
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




