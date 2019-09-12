import React from 'react';
import Hero from "../Homepage/Hero/Hero";
import AboutPrinciple from "./AboutPrinciple/AboutPrinciple";
import AboutParallax from "./AboutParallax/AboutParallax";
import AboutNature from "./AboutNature/AboutNature";

const AboutPageIndex = () => {
    return (
        <>
            <Hero bigImage="../../../../static/images/about-hero.jpg"
                  mobImage="../../../../static/images/about-hero-mob.jpg"/>
            <AboutPrinciple/>
            <AboutParallax/>
            <AboutNature/>
            </>
    );
};

export default AboutPageIndex;
