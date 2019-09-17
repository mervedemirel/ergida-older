import React from 'react';
import Hero from "../Homepage/Hero/Hero";
import Map from "./Map/Map";
import ContactForm from "./ContactForm/ContactForm";
import { i18n } from "../../../i18n";


const ContactPageIndex = () => {
    let hero;
    if (i18n.language !== 'en') {
        hero = <Hero bigImage="../../../../static/images/iletisim-hero.jpg"
                     mobImage="../../../../static/images/iletisim-hero-mob.jpg" />
    } else {
        hero = <Hero bigImage="../../../../static/images/iletisim-hero-en.jpg"
                     mobImage="../../../../static/images/iletisim-hero-mob-en.jpg" />
    }

    return (
        <>
            {hero}

            <Map />
            <ContactForm />
        </>
    );
};

export default ContactPageIndex;
