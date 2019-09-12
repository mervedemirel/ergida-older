import React from 'react';
import Hero from "../Homepage/Hero/Hero";
import GalleryPhotos from "./GalleryPhotos/GalleryPhotos";
import HomeCta from "../Homepage/HomeCta/HomeCta";
import { i18n } from "../../../i18n";


const GalleryIndex = () => {
    return (
        <>
            {i18n.language === 'tr' ? <Hero bigImage="../../../../static/images/galeri-hero.jpg"
                mobImage="../../../../static/images/galeri-hero-mob.png" /> :
                <Hero bigImage="../../../../static/images/galeri-hero-en.jpg"
                    mobImage="../../../../static/images/galeri-hero-mob.png" />}
            <GalleryPhotos/>
            <HomeCta className="mt-5"/>
        </>
    );
};

export default GalleryIndex;
