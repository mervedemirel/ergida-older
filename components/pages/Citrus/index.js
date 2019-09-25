import React from 'react';
import Hero from "../Homepage/Hero/Hero";
import {i18n} from "../../../i18n";
import CitContainer from "./CitContainer/CitContainer";

const CitrusPageIndex = () => {
    let hero;
    if (i18n.language !== 'en') {
        hero = <Hero bigImage="../../../../static/images/narenciye-hero.jpg"
                     mobImage="../../../../static/images/narenciye-hero-mob.jpg" />
    } else {
        hero = <Hero bigImage="../../../../static/images/narenciye-hero-en.jpg"
                     mobImage="../../../../static/images/narenciye-hero-mob-en.jpg" />
    }
    return (
        <>
            {hero}
            <CitContainer/>
        </>
    );
};

export default CitrusPageIndex;
