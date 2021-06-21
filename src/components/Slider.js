import React, { useEffect, useRef } from 'react'
import Abouter from './Abouter';
import arrow from '../images/arrow.svg'
import { gsap } from 'gsap'


const abouters = [
    {
        id: 0,
        name: 'abouter1',
        text: '1',
    },
    {
        id: 1,
        name: 'abouter2',
        text: '2',
    },
    {
        id: 2,
        name: 'abouter3',
        text: '3',
    },
    {
        id: 3,
        name: 'abouter4',
        text: '4',
    },
    {
        id: 4,
        name: 'abouter5',
        text: '5',
    },
    {
        id: 5,
        name: 'abouter6',
        text: '6',
    },
    {
        id: 6,
        name: 'abouter7',
        text: '7',
    },
    {
        id: 7,
        name: 'abouter8',
        text: '8',
    },
    {
        id: 8,
        name: 'abouter9',
        text: '9',
    },
    {
        id: 9,
        name: 'abouter10',
        text: '10',
    }    
];


const sliderStyles = {
    display: 'flex',
    width: '100%', 
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', //for the abouterWrapper
};


const abouterWrapperStyles = {
    border: '2px solid red',
    width: '90%', 
    height: '90%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};


const arrowStyles = {
    //border: '1px solid white',
    width: '50px', 
    height: '50px',
    position: 'absolute',
    bottom: '0',
    backgroundImage: `url('${arrow}')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '60%',
}


const leftArrow = {    
    left: '0',
    transform: 'scale(-1)',
}


const rightArrow = {    
    right: '0',
}





const Slider = () => {    
    
    let tl;
    let slides = [];
    let startingSlide = 0;
    let currentSlide = startingSlide;
    
    const handleArrowClick = (e) => slide(e.target.getAttribute('name'));


    const showRefs = (refArr) => {
        if (!refArr || !refArr.length) return
        for (const ref of refArr) {
            if (ref.current) console.log('ref ', ref.current);
        }
    }


    // const positionSlides = (current = currentSlide, next = nextSlide, prev = previousSlide) => {

        // tl.to(slides[current], {
        //     duration: 0.3,
        //     x: '0vw',
        //     y: '0vh',
        //     zIndex: 1,
        //     onComplete: () => {
        //         console.log(`screen ${current} in position`);
        //     },
        //     });    
        
        // tl.to(slides[next], {
        //     duration: 0.3,
        //     x: '4vw',
        //     y: '-4vh',
        //     onComplete: () => {
        //         console.log(`screen ${next} in position`);
        //     },
        //     });

        // tl.to(slides[prev], {
        //     duration: 0.3,
        //     x: '-4vw',
        //     y: '4vh',
        //     onComplete: () => {
        //         console.log(`screen ${prev} in position`);
        //     },
        //     });        
    //}


    const slide = (direction) => {

        direction === 'right' 
        ? currentSlide = Math.min(++currentSlide, slides.length - 1) 
        : currentSlide = Math.max(--currentSlide, 0);
        console.log('sliding ', direction, 'to slide ', currentSlide);
        
}


    useEffect(() => {
        
        if (!abouterWrapperRefs) return 
        
        console.log('collected refs ');
        //showRefs(abouterWrapperRefs);

        slides = abouterWrapperRefs.filter(ref => typeof ref.current !== 'undefined').map(ref => ref.current);

        tl = gsap.timeline();

    }, [])

    
    const abouterWrapperRefs = [useRef(),useRef(),useRef(),useRef(),useRef(),useRef(),useRef(),useRef(),useRef(),useRef()];
    //hoooks cannot be used inside loops


    return (

        <div style = { sliderStyles }>
            
            { abouters.map(item => {

                return (

                <div ref = {  abouterWrapperRefs[item.id] }  key = { item.id } style = { abouterWrapperStyles } name = { item.name }>
                
                    <Abouter text = { item.text } />
                    
                    <div style = {{ ...arrowStyles, ...leftArrow }} onClick = { (e) => handleArrowClick(e) } name = 'left'></div>
                    <div style = {{ ...arrowStyles, ...rightArrow }}
                    onClick = { (e) => handleArrowClick(e) } name = 'right'></div>

                </div> )

            }) }
            
        </div>
        
    )
}

export default Slider
