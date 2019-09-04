import React from 'react';
import Layout from "../components/shared/Layout/Layout";
import { i18n } from '../i18n';
import HomePageIndex from "../components/pages/Homepage"

const Home = ({t}) => (
    <Layout>
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
