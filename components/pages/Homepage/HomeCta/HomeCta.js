import React from 'react';
import { FaPhone } from 'react-icons/fa';

import {withTranslation} from "../../../../i18n";

const HomeCTA = ({t}) => {
    return (
        <div className="container">
            <p className="text-center HomeCta">
                {t('cta')} <br/> <span><FaPhone style={{transform: 'rotate(-270deg)'}} /></span> &nbsp;
                <a href="tel://+902428870222">0 242 887 02 22</a>
            </p>

            <style jsx>{`
                .HomeCta {
                    font-size: 1.5rem
                }
            `}</style>
        </div>
    );
};

export default withTranslation('homepage')(HomeCTA);
