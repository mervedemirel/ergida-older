import React from 'react';
import Layout from "../components/shared/Layout/Layout";
import VegetablePageIndex from "../components/pages/Vegetable";
import Head from "next/head";


const Vegetable = ({t}) => (
    <Layout>
        <Head>
            <title>Sebze | Ergıda Tarım</title>
        </Head>
        <VegetablePageIndex/>
    </Layout>
);

Vegetable.getInitialProps = async () => ({
    namespacesRequired: ['header', 'common', 'vegetable']
});

export default Vegetable
