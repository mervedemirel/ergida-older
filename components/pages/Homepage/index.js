import React from "react";
import Hero from "./Hero/Hero";
import HomeBg from "./HomeBg/HomeBg";
import HomeCta from "./HomeCta/HomeCta";
import VegetableFruit from "./VegetableFruit/VegetableFruit";

const HomePageIndex = () => {
    return (
        <>
            <Hero translateKey="homeHeroTitle-1"
                  otherTranslateKey="homeHeroTitle-2"
                  top="1rem"
                  bigImage="../../../../static/images/home-hero.png"
                  mobImage="../../../../static/images/home-hero-mob.png" color="#669915"/>
            <HomeBg/>
            <VegetableFruit/>
            <HomeCta/>
        </>
    )
};

export default HomePageIndex
