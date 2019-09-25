import React, {useState, useEffect} from 'react';
import Hero from "../Homepage/Hero/Hero";
import Map from "./Map/Map";
import ContactForm from "./ContactForm/ContactForm";
import { i18n } from "../../../i18n";


const ContactPageIndex = () => {
    const [activeLng, setActiveLng] = useState(undefined)

    useEffect(() => {
        setActiveLng(localStorage.getItem('lng'))
    })

    return (
        <>
            {activeLng === 'tr' ? <Hero bigImage="../../../../static/images/iletisim-hero.jpg"
                                        mobImage="../../../../static/images/iletisim-hero-mob.jpg" /> :
                <Hero bigImage="../../../../static/images/iletisim-hero-en.jpg"
                      mobImage="../../../../static/images/iletisim-hero-mob-en.jpg" />}

            <Map />
            <ContactForm />
        </>
    );
};

export default ContactPageIndex;
