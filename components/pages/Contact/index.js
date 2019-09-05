import React from 'react';
import Hero from "../Homepage/Hero/Hero";
import Map from "./Map/Map";
import ContactForm from "./ContactForm/ContactForm";

const ContactPageIndex = () => {
    return (
        <>
            <Hero translateKey="contactTitle"
                  top="4rem"
                  bigImage="../../../../static/images/iletisim-hero.jpg"
                  mobImage="../../../../static/images/iletisim-hero-mob.jpg"
                  color="#275b2f"/>
            <Map/>
            <ContactForm/>
        </>
    );
};

export default ContactPageIndex;
