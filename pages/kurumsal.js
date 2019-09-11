import React from 'react';
import Layout from "../components/shared/Layout/Layout";
import { i18n } from '../i18n';
import AboutPageIndex from "../components/pages/About";
import Head from "next/head";


const About = ({t}) => (
    <Layout>
        <Head>
            <title>Kurumsal | Ergıda Tarım</title>
        </Head>
        <AboutPageIndex />
        <div className="container">
            <button
                type='button'
                onClick={() => i18n.changeLanguage(i18n.language === 'tr' ? 'en' : 'tr')}
            />
        </div>
    </Layout>
);

About.getInitialProps = async () => ({
    namespacesRequired: ['header', 'common', 'contact']
});

export default About
