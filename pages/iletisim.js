import React from 'react';
import Layout from "../components/shared/Layout/Layout";
import ContactPageIndex from "../components/pages/Contact";
import Head from "next/head";
import {withTranslation} from "../i18n";

const Contact = ({t}) => (
    <Layout>
        <Head>
            <title>{t('headContactTitle')} | Ergıda Tarım</title>
        </Head>
        <ContactPageIndex />
    </Layout>
);

Contact.getInitialProps = async () => ({
    namespacesRequired: ['header', 'common', 'contact']
});

export default withTranslation('common')(Contact)
