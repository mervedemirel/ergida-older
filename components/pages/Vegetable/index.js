import React from 'react';
import Hero from "../Homepage/Hero/Hero";
import VegContainer from "./VegContainer/VegContainer";

const VegetablePageIndex = () => {
    return (
        <>
            <Hero bigImage="../../../../static/images/sebze-hero.jpg"
                  mobImage="../../../../static/images/sebze-hero-mob.jpg"/>
            <VegContainer/>
        </>
    );
};

export default VegetablePageIndex;
