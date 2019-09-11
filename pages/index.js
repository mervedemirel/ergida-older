import React from 'react';
import Layout from "../components/shared/Layout/Layout";
import { i18n } from '../i18n';
import HomePageIndex from "../components/pages/Homepage"
import Head from "next/head";


const Home = ({t}) => (
    <Layout>
        <Head>
            <title>Ergıda Tarım</title>
        </Head>
        <HomePageIndex />
        <div className="container">
            <button
                type='button'
                onClick={() => i18n.changeLanguage(i18n.language === 'tr' ? 'en' : 'tr')}
            />
        </div>
    </Layout>
);

Home.getInitialProps = async () => ({
    namespacesRequired: ['header', 'common', 'homepage']
});

export default Home
