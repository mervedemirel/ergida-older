import React from 'react';
import Hero from "../Homepage/Hero/Hero";
import ServiceContent from "./ServiceContent/ServiceContent";
import ServiceExport from "./ServiceExport/ServiceExport";
import { i18n } from "../../../i18n";


const ServicesPageIndex = () => {
    return (
        <>
        {i18n.language === 'tr' ? <Hero bigImage="../../../../static/images/services-hero.jpg"
                mobImage="../../../../static/images/services-hero-mob.jpg" /> :
                <Hero bigImage="../../../../static/images/services-hero-en.jpg"
                    mobImage="../../../../static/images/services-hero-mob-en.jpg" />}
            <ServiceContent/>
            <ServiceExport/>
        </>
    );
};

export default ServicesPageIndex;
