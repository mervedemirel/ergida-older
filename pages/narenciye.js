import React from 'react';
import Layout from "../components/shared/Layout/Layout";
import CitrusPageIndex from "../components/pages/Citrus";
import Head from "next/head";


const Citrus = ({t}) => (
    <Layout>
        <Head>
            <title>Narenciye | Ergıda Tarım</title>
        </Head>
        <CitrusPageIndex/>
    </Layout>
);

Citrus.getInitialProps = async () => ({
    namespacesRequired: ['header', 'common', 'vegetable']
});

export default Citrus
