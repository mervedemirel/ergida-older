import React, {useEffect, useState} from 'react';
import Hero from "../Homepage/Hero/Hero";
import AboutPrinciple from "./AboutPrinciple/AboutPrinciple";
import AboutParallax from "./AboutParallax/AboutParallax";
import AboutNature from "./AboutNature/AboutNature";
import { i18n } from "../../../i18n";
import Leaves from "../../shared/Leaves/Leaves";

const AboutPageIndex = () => {
    const [activeLng, setActiveLng] = useState(undefined)

    useEffect(() => {
        setActiveLng(localStorage.getItem('lng'))
    })

    return (
        <>
            {activeLng === 'tr' ? <Hero bigImage="../../../../static/images/about-hero.jpg"
                                        mobImage="../../../../static/images/about-hero-mob.jpg" /> :
                <Hero bigImage="../../../../static/images/about-hero-en.jpg"
                      mobImage="../../../../static/images/about-hero-mob-en.jpg" />}
            <AboutPrinciple />
            <AboutParallax />
            <AboutNature />
        </>
    );
};

export default AboutPageIndex;
