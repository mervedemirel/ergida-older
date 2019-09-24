import React from 'react';
import Hero from "../Homepage/Hero/Hero";
import {i18n} from "../../../i18n";
import FruContainer from "./FruContainer/FruContainer";

const FruitPageIndex = () => {
    let hero;
    if (i18n.language !== 'en') {
        hero = <Hero bigImage="../../../../static/images/meyve-hero.jpg"
                     mobImage="../../../../static/images/meyve-hero-mob.jpg" />
    } else {
        hero = <Hero bigImage="../../../../static/images/meyve-hero.jpg"
                     mobImage="../../../../static/images/meyve-hero-mob.jpg" />
    }
    return (
        <>
            {hero}
            <FruContainer/>
        </>
    );
};

export default FruitPageIndex;
