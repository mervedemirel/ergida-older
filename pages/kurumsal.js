import React from 'react';
import Layout from "../components/shared/Layout/Layout";
import AboutPageIndex from "../components/pages/About";
import Head from "next/head";
import {withTranslation} from "../i18n";


const About = ({t}) => (
    <Layout>
        <Head>
            <title>{t("headCompanyTitle")} | Ergıda Tarım</title>
        </Head>
        <AboutPageIndex />
    </Layout>
);

About.getInitialProps = async () => ({
    namespacesRequired: ['header', 'common', 'contact']
});

export default withTranslation("common")(About);
