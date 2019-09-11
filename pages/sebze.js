import React from 'react';
import Layout from "../components/shared/Layout/Layout";
import { i18n } from '../i18n';
import VegetablePageIndex from "../components/pages/Vegetable";
import Head from "next/head";


const Vegetable = ({t}) => (
    <Layout>
        <Head>
            <title>Sebze | Ergıda Tarım</title>
        </Head>
        <VegetablePageIndex/>
        <div className="container">
            <button
                type='button'
                onClick={() => i18n.changeLanguage(i18n.language === 'tr' ? 'en' : 'tr')}
            />
        </div>
    </Layout>
);

Vegetable.getInitialProps = async () => ({
    namespacesRequired: ['header', 'common', 'vegetable']
});

export default Vegetable
