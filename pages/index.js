import React, {useState, useEffect} from 'react';
import Layout from "../components/shared/Layout/Layout";
import HomePageIndex from "../components/pages/Homepage"
import Head from "next/head";
import {i18n} from "../i18n";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


const Home = ({t}) => {
    const [activeLng, setActiveLng] = useState({lng: undefined, loading: true})

    useEffect(() => {
        setActiveLng({lng: localStorage.getItem('lng'), loading: false})
    })

    return (
        <>
            {activeLng.loading ? (
                <img src="../static/images/logo.png" alt="" className="animLogo"/>
            ) : (
                <Layout>
                    <Head>
                        <title>Ergıda Tarım</title>
                        {activeLng.lng === 'tr' ? <meta name="description"
                                                        content="ERDIGA, tarım sektöründe geniş niteliklere sahip, özgün, genç, kurumsal bir yaş sebze ve meyve şirketidir."/>
                            :
                            <meta name="description"
                                  content="Ergıda is a young and dynamic fresh fruit and vegetable company in the agricultural sector."/>

                        }                    </Head>
                    <HomePageIndex/>
                </Layout>
            )}
            <style jsx>{`
                .animLogo {
                    position: absolute;
                    width: 100px;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    animation: crescendo 1s alternate infinite ease-in                    
                }
                
                @keyframes crescendo {
                    0% {transform: scale(.8);}
                    100% {transform: scale(1.2);}
                }
            `}</style>
        </>
    )
};

Home.getInitialProps = async () => ({
    namespacesRequired: ['header', 'common', 'homepage']
});

export default Home
