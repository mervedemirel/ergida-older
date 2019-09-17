import React from "react";
import Hero from "./Hero/Hero";
import HomeBg from "./HomeBg/HomeBg";
import HomeCta from "./HomeCta/HomeCta";
import VegetableFruit from "./VegetableFruit/VegetableFruit";
import { i18n } from "../../../i18n";


const HomePageIndex = () => {
    let hero;
    if (i18n.language !== 'en') {
        hero = <Hero bigImage="../../../../static/images/home-hero.jpg"
              mobImage="../../../../static/images/home-hero-mob.jpg" />
    } else {
        hero = <Hero bigImage="../../../../static/images/home-hero-en.jpg"
              mobImage="../../../../static/images/home-hero-mob-en.jpg" />
    }

    return (
        <>
            {hero}
            <HomeBg />
            <VegetableFruit />
            <HomeCta />
        </>
    )
};

export default HomePageIndex
