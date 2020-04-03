import React, {useState, useEffect} from 'react';
import Layout from "../components/shared/Layout/Layout";
import HomePageIndex from "../components/pages/Homepage"
import Head from "next/head";
import {i18n} from "../i18n";


const Home = ({t}) => {
    const [activeLng, setActiveLng] = useState(undefined)

    useEffect(() => {
        setActiveLng(localStorage.getItem('lng'))
    })
    return (
        <>
            <Layout>
                <Head>
                    <title>Ergıda Tarım</title>
                    {activeLng === 'tr' ? <meta name="description"
                                                content="ERGIDA, tarım sektöründe geniş niteliklere sahip, özgün, genç, kurumsal bir yaş sebze ve meyve şirketidir."/>
                        :
                        <meta name="description"
                              content="Ergıda is a young and dynamic fresh fruit and vegetable company in the agricultural sector."/>

                    }
                </Head>
                <HomePageIndex/>
            </Layout>
        </>
    )
};

Home.getInitialProps = async () => ({
    namespacesRequired: ['header', 'common', 'homepage']
});

export default Home
