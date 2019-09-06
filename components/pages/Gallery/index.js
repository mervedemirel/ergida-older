import React from 'react';
import Hero from "../Homepage/Hero/Hero";
import GalleryPhotos from "./GalleryPhotos/GalleryPhotos";
import HomeCta from "../Homepage/HomeCta/HomeCta";

const GalleryIndex = () => {
    return (
        <>
            <Hero translateKey="galeryTitle"
                  top="4rem"
                  bigImage="../../../../static/images/galeri-hero.jpg"
                  mobImage="../../../../static/images/galeri-hero-mob.jpg"
                  color="#FFFFFF"/>
            <GalleryPhotos/>
            <HomeCta className="mt-5"/>
        </>
    );
};

export default GalleryIndex;
