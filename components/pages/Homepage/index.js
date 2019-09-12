import React from "react";
import Hero from "./Hero/Hero";
import HomeBg from "./HomeBg/HomeBg";
import HomeCta from "./HomeCta/HomeCta";
import VegetableFruit from "./VegetableFruit/VegetableFruit";
import { i18n } from "../../../i18n";


const HomePageIndex = () => {
    return (
        <>
            {i18n.language === 'tr' ? <Hero bigImage="../../../../static/images/home-hero.jpg"
                mobImage="../../../../static/images/home-hero-mob.jpg" /> :
                <Hero bigImage="../../../../static/images/home-hero-en.jpg"
                    mobImage="../../../../static/images/home-hero-mob-en.jpg" />}

            <HomeBg />
            <VegetableFruit />
            <HomeCta />
        </>
    )
};

export default HomePageIndex
