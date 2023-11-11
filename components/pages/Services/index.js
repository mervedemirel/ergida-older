import React, {useEffect, useState} from 'react';
import Hero from "../Homepage/Hero/Hero";
import ServiceContent from "./ServiceContent/ServiceContent";
import ServiceExport from "./ServiceExport/ServiceExport";
import { i18n } from "../../../i18n";


const ServicesPageIndex = () => {
    const [activeLng, setActiveLng] = useState(undefined)

    useEffect(() => {
        setActiveLng(localStorage.getItem('lng'))
    })
    return (
        <>
        {activeLng === 'tr' ? <Hero bigImage="/images/services-hero.jpg"
                mobImage="/images/services-hero-mob.jpg" /> :
                <Hero bigImage="/images/services-hero-en.jpg"
                    mobImage="/images/services-hero-mob-en.jpg" />}
            <ServiceContent/>
            <ServiceExport/>
        </>
    );
};

export default ServicesPageIndex;
