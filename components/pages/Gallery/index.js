import React, {useState, useEffect} from 'react';
import Hero from "../Homepage/Hero/Hero";
import GalleryPhotos from "./GalleryPhotos/GalleryPhotos";
import HomeCta from "../Homepage/HomeCta/HomeCta";
import { i18n } from "../../../i18n";


const GalleryIndex = () => {
    const [activeLng, setActiveLng] = useState(undefined)

    useEffect(() => {
        setActiveLng(localStorage.getItem('lng'))
    })

    return (
        <>
            {activeLng === 'tr' ? <Hero bigImage="../../../../static/images/galeri-hero.jpg"
                mobImage="../../../../static/images/galeri-hero-mob.jpg" /> :
                <Hero bigImage="../../../../static/images/galeri-hero-en.jpg"
                    mobImage="../../../../static/images/galeri-hero-mob-en.jpg" />}
            <GalleryPhotos/>
            <HomeCta className="mt-5"/>
        </>
    );
};

export default GalleryIndex;
