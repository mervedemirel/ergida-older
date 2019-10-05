import React from 'react'
import App from 'next/app'
import {appWithTranslation} from '../i18n'


class MyApp extends App {

    componentDidMount() {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker
                .register("/service-worker.js")
                .then(registration => {
                    console.log("service worker registration successful: ", registration);
                })
                .catch(err => {
                    console.warn("service worker registration failed", err.message);
                });
        }
    }

    render() {
        const {Component, pageProps} = this.props;
        return (
            <>
                <Component {...pageProps} />
            </>
        )
    }
}

export default appWithTranslation(MyApp)
