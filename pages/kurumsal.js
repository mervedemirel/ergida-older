import React from 'react';
import Layout from "../components/shared/Layout/Layout";
import AboutPageIndex from "../components/pages/About";
import Head from "next/head";


const About = ({t}) => (
    <Layout>
        <Head>
            <title>Kurumsal | Ergıda Tarım</title>
        </Head>
        <AboutPageIndex />
    </Layout>
);

About.getInitialProps = async () => ({
    namespacesRequired: ['header', 'common', 'contact']
});

export default About
