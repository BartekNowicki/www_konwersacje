import React, { useEffect, useRef } from 'react'
import Abouter from './Abouter';
import arrow from '../images/arrow.svg'
import { gsap } from 'gsap'
import primarySchoolLogo from '../images/primarySchoolLogo_minified.svg'
import highschoolLogo from '../images/highschoolLogo.jpg'
import westValleyCollegeLogo from '../images/westValleyCollegeLogo.jpg'
import deAnzaCollegeLogo from '../images/deAnzaCollegeLogo.jpg'
import uniwersytetWarszawskiLogo from '../images/uniwersytetWarszawskiLogo.jpg'
import bardoLogo from '../images/bardoLogo.jpg'



const abouters = [
    {
        id: 0,
        name: 'abouter1',
        text: 'Polish primary school',
        logoUrl: primarySchoolLogo,        
        country : 'pl', 
        location : 'Warsaw, Poland', 
        dates : '1983 - 1989', 
        status : 'completed grades 1 - 6', 
    },
    {
        id: 1,
        name: 'abouter2',
        text: 'Prospect High School',
        logoUrl: highschoolLogo,
        country : 'usa', 
        location : 'Saratoga, CA, USA', 
        dates : '1990 - 1994', 
        status :'graduated',
    },
    {
        id: 2,
        name: 'abouter3',
        text: 'West Valley College',
        logoUrl: westValleyCollegeLogo,
        country : 'usa', 
        location : 'Saratoga, CA, USA', 
        dates : '1993', 
        status :'completed a philosophy class',
    },
    {
        id: 3,
        name: 'abouter4',
        text: 'De Anza College',
        logoUrl: deAnzaCollegeLogo,
        country : 'usa', 
        location : 'Cupertino, CA, USA', 
        dates : '1993 - 1994', 
        status : 'completed a two-semester physics course',
    },
    {
        id: 4,
        name: 'abouter5',
        text: 'Uniwersytet Warszawski',
        logoUrl: uniwersytetWarszawskiLogo,        
        country : 'pl', 
        location : 'Warsaw, Poland', 
        dates : '1995 - 1996', 
        status :'completed two semesters at the Physics Department',
    },
    {
        id: 5,
        name: 'abouter6',
        text: 'Uniwersytet Warszawski',
        logoUrl: uniwersytetWarszawskiLogo,
        country : 'pl', 
        location : 'Warsaw, Poland', 
        dates : '1996 - 2001', 
        status :'MA in psychology',
    },
    {
        id: 6,
        name: 'abouter7',
        text: 'Centrum Konwersacji School For Conversational Language Development',
        logoUrl: bardoLogo,
        country : 'pl', 
        location : 'Warsaw, Poland', 
        dates : '2001 - 2011', 
        status : 'owner, CEO and English as a Second Language teacher',
    },
    {
        id: 7,
        name: 'abouter8',
        text: 'Bardo Biuro Tłumaczeń Konferencyjnych',
        logoUrl: bardoLogo,
        country : 'pl', 
        location : 'Warsaw, Poland', 
        dates : '2011 - present', 
        status : 'owner, CEO and Polish-English interpreter',
    },
    {
        id: 8,
        name: 'abouter9',
        text: 'Bardo School For Conversational Language Development',
        logoUrl: bardoLogo,
        country : 'pl', 
        location : 'Warsaw, Poland', 
        dates : '2021 - present', 
        status : 'owner, CEO and English as a Second Language teacher',
    },
    // {
    //     id: 9,
    //     name: 'abouter10',
    //     text: 'interests and hobbies',
    //     logoUrl: '10',
    //     country : 'pl', 
    //     location : 'Warsaw, Poland', 
    //     dates : '10', 
    //     status : '10',
    // }    
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
    //border: '2px solid red',
    width: '95%', 
    height: '95%',
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
    bottom: '20%',
    backgroundImage: `url('${arrow}')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '60%',
    cursor: 'pointer',
    zIndex: '3', //wave wrapper has 2
    
}


const leftArrow = {    
    left: '20%',
    transform: 'scale(-1)',
}


const rightArrow = {    
    right: '20%',
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
                    country = { item.country } 
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
