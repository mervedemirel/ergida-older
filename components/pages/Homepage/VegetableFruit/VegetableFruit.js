import React from 'react';

import {withTranslation} from "../../../../i18n";
import Button from "../../../shared/Button/Button";


const VegetableFruit = ({t}) => {
    return (
        <div className="container-fluid p-0">
            <div className="container-fluid bg-white px-0">
                <div className="container position-relative">
                    <div className="row py-5 p-md-0  ep-col">
                        <div className="col-md-6 col-lg-7 d-flex flex-column justify-content-center pr-md-5 pr-lg-5">
                            <h2 className="font-weight-bold er-color-orange text-right pb-2">{t('homeBg', {returnObjects: true}).veg.title}</h2>
                            <p className="text-right pb-2">
                                {t('homeBg', {returnObjects: true}).veg.text}
                            </p>
                            <Button translateText="infoButtonText"/>
                        </div>
                        <div className="col-md-6 col-lg-5">
                            <img src="../../../../static/images/home-eggplant.png" alt=""/>
                        </div>
                    </div>
                    <div className="row px-0 py-5">
                        <div className="col-lg-5 col-md-6 mobile-flex-center">
                            <img src="../../../../static/images/home-apple.png" alt=""/>
                        </div>
                        <div className="col-lg-7 col-md-6 d-flex flex-column justify-content-center col-nar">
                            <h2 className="font-weight-bold er-color-orange pb-2">{t('homeBg', {returnObjects: true}).fru.title}</h2>
                            <p className="pb-2">
                                {t('homeBg', {returnObjects: true}).fru.text}
                            </p>
                            <Button translateText="infoButtonText" />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                img {
                    width:100%;
                }
                
                .col-nar {
                    padding-left: 5rem;
                }
                
                .ep-col {
                    margin-top -2rem;
                }
                
                @media (max-width: 991px) {
                    .col-nar {
                        padding: 1rem;
                    }
                    
                    .ep-col {
                        margin-top 0;
                    }
                }
                
                @media (max-width: 767px) {                    
                    .ep-col {
                        margin-top 0;
                        flex-direction: column-reverse
                    }
                }
            `}</style>
        </div>
    );
};

export default withTranslation('homepage')(VegetableFruit);
