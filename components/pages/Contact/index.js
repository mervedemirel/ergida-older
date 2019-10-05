import React, {useState, useEffect} from 'react';
import Hero from "../Homepage/Hero/Hero";
import Map from "./Map/Map";
import ContactForm from "./ContactForm/ContactForm";
import {i18n} from "../../../i18n";
import Delayed from "../../shared/Delayed/Delayed";
import Leaves from "../../shared/Leaves/Leaves";


const ContactPageIndex = () => {
    const [activeLng, setActiveLng] = useState(undefined)

    useEffect(() => {
        setActiveLng(localStorage.getItem('lng'))
    })

    return (
        <>
            {activeLng === 'tr' ? <Hero bigImage="../../../../static/images/iletisim-hero.jpg"
                                        mobImage="../../../../static/images/iletisim-hero-mob.jpg"/> :
                <Hero bigImage="../../../../static/images/iletisim-hero-en.jpg"
                      mobImage="../../../../static/images/iletisim-hero-mob-en.jpg"/>}


            <Delayed waitBeforeShow={3000}>
                <Leaves top="50vh" left="20vw"/>
            </Delayed>
            <Delayed waitBeforeShow={4000}>
                <Leaves top="90vh" left="80vw"/>
            </Delayed>
            <Delayed waitBeforeShow={6000}>
                <Leaves top="140vh" left="10vw"/>
            </Delayed>
            <Map/>
            <ContactForm/>
        </>
    );
};

export default ContactPageIndex;
