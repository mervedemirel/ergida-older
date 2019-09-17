import React from 'react';
import Layout from "../components/shared/Layout/Layout";
import ServicesPageIndex from "../components/pages/Services";
import Head from "next/head";
import {withTranslation} from "../i18n";

const Services = ({t}) => (
    <Layout>
        <Head>
            <title>{t('headServicesTitle')} | Ergıda Tarım</title>
        </Head>
        <ServicesPageIndex/>
    </Layout>
);

Services.getInitialProps = async () => ({
    namespacesRequired: ['header', 'common', 'services']
});

export default withTranslation('common')(Services)
