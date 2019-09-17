import React from 'react';
import Layout from "../components/shared/Layout/Layout";
import Head from "next/head";
import {withTranslation} from "../i18n";

import GalleryIndex from "../components/pages/Gallery";

const Gallery = ({t}) => (
    <Layout>
        <Head>
            <title>{t('headGalleryTitle')} | Ergıda Tarım</title>
        </Head>
        <GalleryIndex/>
    </Layout>
);

Gallery.getInitialProps = async () => ({
    namespacesRequired: ['header', 'common', 'gallery']
});

export default withTranslation('common')(Gallery);
