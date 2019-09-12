import React from 'react';
import Hero from "../Homepage/Hero/Hero";
import ServiceContent from "./ServiceContent/ServiceContent";
import ServiceExport from "./ServiceExport/ServiceExport";

const ServicesPageIndex = () => {
    return (
        <>
            <Hero bigImage="../../../../static/images/services-hero.jpg"
                  mobImage="../../../../static/images/services-hero-mob.jpg"/>
            <ServiceContent/>
            <ServiceExport/>
        </>
    );
};

export default ServicesPageIndex;
