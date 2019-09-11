import React from 'react';
import Layout from "../components/shared/Layout/Layout";
import { i18n } from '../i18n';
import Head from "next/head";

import GalleryIndex from "../components/pages/Gallery";

const Gallery = ({t}) => (
    <Layout>
        <Head>
            <title>Galeri | Ergıda Tarım</title>
        </Head>
        <GalleryIndex/>
        <div className="container">
            <button
                type='button'
                onClick={() => i18n.changeLanguage(i18n.language === 'tr' ? 'en' : 'tr')}
            />
        </div>
    </Layout>
);

Gallery.getInitialProps = async () => ({
    namespacesRequired: ['header', 'common', 'gallery']
});

export default Gallery
