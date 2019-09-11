import React from 'react';
import Hero from "../Homepage/Hero/Hero";
import VegContainer from "./VegContainer/VegContainer";

const VegetablePageIndex = () => {
    return (
        <>
            <Hero translateKey="vegTitle"
                  top="4rem"
                  bigImage="../../../../static/images/sebze-hero.jpg"
                  mobImage="../../../../static/images/sebze-hero-mob.jpg"
                  color="#669915"/>
            <VegContainer/>
        </>
    );
};

export default VegetablePageIndex;
