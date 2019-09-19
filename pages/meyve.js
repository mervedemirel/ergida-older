import React from 'react';
import Layout from "../components/shared/Layout/Layout";
import FruitPageIndex from "../components/pages/Fruit";
import Head from "next/head";
import {withTranslation} from "../i18n";


const Fruit = ({t}) => (
    <Layout>
        <Head>
            <title>{t('headFruTitle')} | Ergıda Tarım</title>
        </Head>
        <FruitPageIndex/>
    </Layout>
);

Fruit.getInitialProps = async () => ({
    namespacesRequired: ['header', 'common', 'vegetable']
});

export default withTranslation('common')(Fruit);
