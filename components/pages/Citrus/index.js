import React from 'react';
import Hero from "../Homepage/Hero/Hero";
import {i18n} from "../../../i18n";

const CitrusPageIndex = () => {
    let hero;
    if (i18n.language !== 'en') {
        hero = <Hero bigImage="../../../../static/images/sebze-hero.jpg"
                     mobImage="../../../../static/images/sebze-hero-mob.jpg" />
    } else {
        hero = <Hero bigImage="../../../../static/images/sebze-hero-en.jpg"
                     mobImage="../../../../static/images/sebze-hero-mob-en.jpg" />
    }
    return (
        <>
            {hero}
        </>
    );
};

export default CitrusPageIndex;
