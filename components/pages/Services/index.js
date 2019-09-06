import React from 'react';
import Hero from "../Homepage/Hero/Hero";
import ServiceContent from "./ServiceContent/ServiceContent";
import ServiceExport from "./ServiceExport/ServiceExport";

const ServicesPageIndex = () => {
    return (
        <>
            <Hero translateKey="servicesTitle"
                  top="4rem"
                  bigImage="../../../../static/images/services-hero.jpg"
                  mobImage="../../../../static/images/services-hero-mob.jpg"
                  color="#669915"/>
            <ServiceContent/>
            <ServiceExport/>
        </>
    );
};

export default ServicesPageIndex;
