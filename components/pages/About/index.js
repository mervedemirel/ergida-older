import React from 'react';
import Hero from "../Homepage/Hero/Hero";
import AboutPrinciple from "./AboutPrinciple/AboutPrinciple";
import AboutParallax from "./AboutParallax/AboutParallax";
import AboutNature from "./AboutNature/AboutNature";

const AboutPageIndex = () => {
    return (
        <>
            <Hero translateKey="aboutTitle"
                  top="4rem"
                  bigImage="../../../../static/images/about-hero.jpg"
                  mobImage="../../../../static/images/about-hero-mob.jpg"
                  color="#275b2f"/>
            <AboutPrinciple/>
            <AboutParallax/>
            <AboutNature/>
            </>
    );
};

export default AboutPageIndex;
