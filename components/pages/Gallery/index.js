import React, {Component} from 'react';
import Hero from "../Homepage/Hero/Hero";
import GalleryPhotos from "./GalleryPhotos/GalleryPhotos";
import HomeCta from "../Homepage/HomeCta/HomeCta";
import { i18n } from "../../../i18n";
import Lightbox from "fslightbox-react";

class GalleryIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLanguage: undefined
        };
    }

    render() {
        return (
            <>
                {this.state.activeLanguage === 'tr' ? <Hero bigImage="/images/galeri-hero.jpg"
                                            mobImage="/images/galeri-hero-mob.jpg" /> :
                    <Hero bigImage="/images/galeri-hero-en.jpg"
                          mobImage="/images/galeri-hero-mob-en.jpg" />}
                <GalleryPhotos/>
                <HomeCta className="mt-5"/>
            </>
        );
    }
}

export default GalleryIndex;

