import React from 'react';
import Layout from "../components/shared/Layout/Layout";
import { i18n } from '../i18n';
import ServicesPageIndex from "../components/pages/Services";


const Services = ({t}) => (
    <Layout>
        <ServicesPageIndex/>
        <div className="container">
            <button
                type='button'
                onClick={() => i18n.changeLanguage(i18n.language === 'tr' ? 'en' : 'tr')}
            />
        </div>
    </Layout>
);

Services.getInitialProps = async () => ({
    namespacesRequired: ['header', 'common', 'services']
});

export default Services
