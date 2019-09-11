import React from 'react';
import Layout from "../components/shared/Layout/Layout";
import ServicesPageIndex from "../components/pages/Services";
import Head from "next/head";

const Services = ({t}) => (
    <Layout>
        <Head>
            <title>Hizmetlerimiz | Ergıda Tarım</title>
        </Head>
        <ServicesPageIndex/>
    </Layout>
);

Services.getInitialProps = async () => ({
    namespacesRequired: ['header', 'common', 'services']
});

export default Services
