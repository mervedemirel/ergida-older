import React from 'react';
import Layout from "../components/shared/Layout/Layout";
import { i18n } from '../i18n';

const Vegetable = ({t}) => (
    <Layout>
        <div className="container">
            <button
                type='button'
                onClick={() => i18n.changeLanguage(i18n.language === 'tr' ? 'en' : 'tr')}
            />
        </div>
    </Layout>
);

Gallery.getInitialProps = async () => ({
    namespacesRequired: ['header', 'common', 'vegetable']
});

export default Vegetable
