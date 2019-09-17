import React from 'react';
import Hero from "../Homepage/Hero/Hero";
import AboutPrinciple from "./AboutPrinciple/AboutPrinciple";
import AboutParallax from "./AboutParallax/AboutParallax";
import AboutNature from "./AboutNature/AboutNature";
import { i18n } from "../../../i18n";

const AboutPageIndex = () => {
    let hero;
    if (i18n.language !== 'en') {
        hero = <Hero bigImage="../../../../static/images/about-hero.jpg"
                     mobImage="../../../../static/images/about-hero-mob.jpg" />
    } else {
        hero = <Hero bigImage="../../../../static/images/about-hero-en.jpg"
                     mobImage="../../../../static/images/about-hero-mob-en.jpg" />
    }

    return (
        <>
            {hero}
            <AboutPrinciple />
            <AboutParallax />
            <AboutNature />
        </>
    );
};

export default AboutPageIndex;
