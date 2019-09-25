import React, {useState, useEffect} from 'react';
import Hero from "../Homepage/Hero/Hero";
import VegContainer from "./VegContainer/VegContainer";
import { i18n } from "../../../i18n";


const VegetablePageIndex = () => {
    const [activeLng, setActiveLng] = useState(undefined)

    useEffect(() => {
        setActiveLng(localStorage.getItem('lng'))
    })

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
            {activeLng === 'tr' ? <Hero bigImage="../../../../static/images/sebze-hero.jpg"
                                        mobImage="../../../../static/images/sebze-hero-mob.jpg" /> :
                <Hero bigImage="../../../../static/images/sebze-hero-en.jpg"
                      mobImage="../../../../static/images/sebze-hero-mob-en.jpg" />}
            <VegContainer/>
        </>
    );
};

export default VegetablePageIndex;
