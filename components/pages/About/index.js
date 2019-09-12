import React from 'react';
import Hero from "../Homepage/Hero/Hero";
import AboutPrinciple from "./AboutPrinciple/AboutPrinciple";
import AboutParallax from "./AboutParallax/AboutParallax";
import AboutNature from "./AboutNature/AboutNature";
import { i18n } from "../../../i18n";

const AboutPageIndex = () => {
    return (
        <>
            {i18n.language === 'tr' ? (<Hero bigImage="../../../../static/images/about-hero.jpg"
                mobImage="../../../../static/images/about-hero-mob.jpg" />) : (
                    <Hero bigImage="../../../../static/images/about-hero-en.jpg"
                        mobImage="../../../../static/images/about-hero-mob-en.jpg" />
                )}

            <AboutPrinciple />
            <AboutParallax />
            <AboutNature />
        </>
    );
};

export default AboutPageIndex;
