import React from 'react';
import {withTranslation} from "../../../../i18n";

const ServiceExport = ({t}) => {
    return (
        <div className="container-fluid p-0 mt-5 ServiceExport">
            <div className="container ServiceExport-text">
                <div className="row">
                    <div className="col -12 col-md-6 d-flex align-items-center">
                        <span className="ServiceExport-title-number mr-2">{t('exportTitleOne')}</span>
                        <span className="er-color-orange mt-3">{t('exportTitleTwo')}
                            <br/> {t('exportTitleThree')}</span>
                    </div>
                    <div className="col-12">
                        <div className="col-md-6 p-0">
                            <p>{t('exportCountries')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src="../../../../static/images/service-export.jpg" className="full-width" alt=""/>

            <style jsx>{`
                .ServiceExport {
                    position: relative;
                }
                
                .ServiceExport-text {
                    // position: absolute;
                    // left: 50%;
                    // transform: translateX(-50%);
                }
                
                @media (min-width: 768px) {
                    .ServiceExport-text {
                        position: absolute;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                }
                
                .ServiceExport-title-number {
                    font-weight: bold;
                    font-size: 5rem;
                    color: #e85d24;
                }
            `}</style>
        </div>
    );
};

export default withTranslation('services')(ServiceExport);
