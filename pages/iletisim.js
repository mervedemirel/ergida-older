import React from 'react';
import Layout from "../components/shared/Layout/Layout";
import ContactPageIndex from "../components/pages/Contact";
import Head from "next/head";

const Contact = ({t}) => (
    <Layout>
        <Head>
            <title>İletişim | Ergıda Tarım</title>
        </Head>
        <ContactPageIndex />
    </Layout>
);

Contact.getInitialProps = async () => ({
    namespacesRequired: ['header', 'common', 'contact']
});

export default Contact
