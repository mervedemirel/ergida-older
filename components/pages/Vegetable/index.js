import React from 'react';
import Hero from "../Homepage/Hero/Hero";
import VegContainer from "./VegContainer/VegContainer";
import { i18n } from "../../../i18n";


const VegetablePageIndex = () => {
    return (
        <>
        {i18n.language === 'tr' ? <Hero bigImage="../../../../static/images/sebze-hero.jpg"
                mobImage="../../../../static/images/sebze-hero-mob.png" /> :
                <Hero bigImage="../../../../static/images/sebze-hero-en.jpg"
                    mobImage="../../../../static/images/sebze-hero-mob.png" />}
            <VegContainer/>
        </>
    );
};

export default VegetablePageIndex;
