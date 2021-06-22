import React, { useEffect, useRef } from 'react'
import Abouter from './Abouter';
import arrow from '../images/arrow.svg'
import { gsap } from 'gsap'


const abouters = [
    {
        id: 0,
        name: 'abouter1',
        text: '1',
        logoUrl: 1,
        bakcgUrl : 1, 
        title : 1, 
        location : 1, 
        dates : 1, 
        status : 1, 
    },
    {
        id: 1,
        name: 'abouter2',
        text: '2',
        logoUrl: 2,
        bakcgUrl : 2, 
        title : 2, 
        location : 2, 
        dates : 2, 
        status :2,
    },
    {
        id: 2,
        name: 'abouter3',
        text: '3',
        logoUrl: 3,
        bakcgUrl : 3, 
        title : 3, 
        location : 3, 
        dates : 3, 
        status : 3,
    },
    {
        id: 3,
        name: 'abouter4',
        text: '4',
        logoUrl: 4,
        bakcgUrl : 4, 
        title : 4, 
        location : 4, 
        dates : 4, 
        status : 4,
    },
    {
        id: 4,
        name: 'abouter5',
        text: '5',
        logoUrl: 5,
        bakcgUrl : 5, 
        title : 5, 
        location : 5, 
        dates : 5, 
        status :5,
    },
    {
        id: 5,
        name: 'abouter6',
        text: '6',
        logoUrl: 6,
        bakcgUrl : 6, 
        title : 6, 
        location : 6, 
        dates : 6, 
        status : 6,
    },
    {
        id: 6,
        name: 'abouter7',
        text: '7',
        logoUrl: 7,
        bakcgUrl : 7, 
        title : 7, 
        location : 7, 
        dates : 7, 
        status : 7,
    },
    {
        id: 7,
        name: 'abouter8',
        text: '8',
        logoUrl: 8,
        bakcgUrl : 8, 
        title : 8, 
        location : 8, 
        dates : 8, 
        status : 8,
    },
    {
        id: 8,
        name: 'abouter9',
        text: '9',
        logoUrl: 9,
        bakcgUrl : 9, 
        title : 9, 
        location : 9, 
        dates : 9, 
        status : 9,
    },
    {
        id: 9,
        name: 'abouter10',
        text: '10',
        logoUrl: 10,
        bakcgUrl : 10, 
        title : 10, 
        location : 10, 
        dates : 10, 
        status : 10,
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
    opacity: 0,
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
    cursor: 'pointer',
}


const leftArrow = {    
    left: '0',
    transform: 'scale(-1)',
}


const rightArrow = {    
    right: '0',
}





const Slider = () => {

    console.log('slider rendered');

    const enableAllArrowsExcept = (exceptWhich) => {

        console.log('enabling arrows except ', exceptWhich);
            
            leftArrowRef.current.classList.remove('disabledArrow');
            rightArrowRef.current.classList.remove('disabledArrow');

            exceptWhich === 'left' 
            ? leftArrowRef.current.classList.add('disabledArrow')
            : exceptWhich === 'right' 
            ? rightArrowRef.current.classList.add('disabledArrow')
            : console.log();
    }
    
    let tl;
    let slides = [];
    let currentSlide;
    let previousSlide = null;
    
    const handleArrowClick = (e) => slide(e.target.getAttribute('name'));


    const showRefs = (refArr) => {
        if (!refArr || !refArr.length) return
        for (const ref of refArr) {
            if (ref.current) console.log('ref ', ref.current);
        }
    }


    const showSlide = (ref, previousRef) => {

        tl.to(previousRef, {
            duration: 0.3,
            opacity: 0,
            onComplete: () => {
                //console.log(`screen hidden`, previousRef);
            },
        }).to(ref, {
            duration: 0.3,
            opacity: 1,
            onComplete: () => {
                //console.log(`screen shown`, currentSlide);
            },
        })
    }


    const slide = (direction) => {

        if (direction === 'left' && currentSlide === 0) return enableAllArrowsExcept('left')
        if (direction === 'right' && currentSlide === slides.length - 1) return enableAllArrowsExcept('right')
        
        const prev = currentSlide;

        direction === 'right' 
        ? currentSlide = Math.min(++currentSlide, (slides.length - 1)) 
        : currentSlide = Math.max(--currentSlide, 0);
        console.log('sliding ', direction, 'to slide ', currentSlide);

        currentSlide === 0 ? enableAllArrowsExcept('left') : currentSlide === slides.length - 1 ? enableAllArrowsExcept('right') : enableAllArrowsExcept('none');

        showSlide(abouterWrapperRefs[currentSlide].current, abouterWrapperRefs[prev].current);
        
}


    useEffect(() => {
        
        if (!abouterWrapperRefs) return 
        
        //console.log('collected refs ');
        //showRefs(abouterWrapperRefs);

        slides = abouterWrapperRefs.filter(ref => typeof ref.current !== 'undefined').map(ref => ref.current);

        tl = gsap.timeline();

        previousSlide = 0;      
        currentSlide = 0

        enableAllArrowsExcept('left');

        showSlide(abouterWrapperRefs[currentSlide].current, abouterWrapperRefs[previousSlide].current);

    }, [])

    
    const abouterWrapperRefs = [useRef(),useRef(),useRef(),useRef(),useRef(),useRef(),useRef(),useRef(),useRef(),useRef()];
    //hoooks cannot be used inside loops

    const leftArrowRef = useRef();
    const rightArrowRef = useRef();


    return (

        <div style = { sliderStyles }>
            
            { abouters.map(item => {

                return (

                <div ref = {  abouterWrapperRefs[item.id] }  key = { item.id } style = { abouterWrapperStyles } name = { item.name }>
                
                    <Abouter 
                    text = { item.text } 
                    logoUrl = { item.logoUrl } 
                    bakcgUrl = { item.bakcgUrl } 
                    title = { item.title } 
                    location = { item.location } 
                    dates = { item.dates } 
                    status = { item.status } 
                    />
                    
                    <div ref = { leftArrowRef } style = {{ ...arrowStyles, ...leftArrow }} onClick = { (e) => handleArrowClick(e) } name = 'left'></div>
                    <div ref = { rightArrowRef } style = {{ ...arrowStyles, ...rightArrow }}
                    onClick = { (e) => handleArrowClick(e) } name = 'right'></div>

                </div> )

            }) }
            
        </div>
        
    )
}

export default Slider
