import React from 'react';
import Layout from "../components/shared/Layout/Layout";
import HomePageIndex from "../components/pages/Homepage"
import Head from "next/head";


const Home = ({t}) => (
    <Layout>
        <Head>
            <title>Ergıda Tarım</title>
        </Head>
        <HomePageIndex />
    </Layout>
);

Home.getInitialProps = async () => ({
    namespacesRequired: ['header', 'common', 'homepage']
});

export default Home
