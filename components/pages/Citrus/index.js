import React, {useEffect, useState} from 'react';
import Hero from "../Homepage/Hero/Hero";
import {i18n} from "../../../i18n";
import CitContainer from "./CitContainer/CitContainer";

const CitrusPageIndex = () => {
    const [activeLng, setActiveLng] = useState(undefined)

    useEffect(() => {
        setActiveLng(localStorage.getItem('lng'))
    })

    return (
        <>
            {activeLng === 'tr' ? <Hero bigImage="/images/narenciye-hero.jpg"
                                        mobImage="/images/narenciye-hero-mob.jpg" /> :
                <Hero bigImage="/images/narenciye-hero-en.jpg"
                      mobImage="/images/narenciye-hero-mob-en.jpg" />}
            <CitContainer/>
        </>
    );
};

export default CitrusPageIndex;
