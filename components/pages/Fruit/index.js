import React, {useState, useEffect} from 'react';
import Hero from "../Homepage/Hero/Hero";
import {i18n} from "../../../i18n";
import FruContainer from "./FruContainer/FruContainer";

const FruitPageIndex = () => {
    const [activeLng, setActiveLng] = useState(undefined);

    useEffect(() => {
        setActiveLng(localStorage.getItem('lng'))
    });

    return (
        <>
            {activeLng === 'tr' ? <Hero bigImage="../../../../static/images/meyve-hero.jpg"
                                        mobImage="../../../../static/images/meyve-hero-mob.jpg"/> :
                <Hero bigImage="../../../../static/images/meyve-hero-en.jpg"
                      mobImage="../../../../static/images/meyve-hero-mob-en.jpg"/>}
            <FruContainer/>
        </>
    );
};

export default FruitPageIndex;
