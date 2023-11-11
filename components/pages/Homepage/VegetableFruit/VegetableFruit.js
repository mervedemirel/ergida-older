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
                            <Button translateText="infoButtonText" goTo="/sebze"/>
                        </div>
                        <div className="col-md-6 col-lg-5">
                            <picture>
                                <source srcSet="/images/home-eggplant.webp" type="image/webp"/>
                                <source srcSet="/images/home-eggplant.png" type="image/png"/>
                                <img src="/images/home-eggplant.png" alt=""/>
                            </picture>
                        </div>
                    </div>
                    <div className="row px-0 py-5">
                        <div className="col-lg-5 col-md-6 mobile-flex-center">
                            <picture>
                                <source srcSet="/images/home-apple.webp" type="image/webp"/>
                                <source srcSet="/images/home-apple.png" type="image/png"/>
                                <img src="/images/home-apple.png" alt=""/>
                            </picture>
                        </div>
                        <div className="col-lg-7 col-md-6 d-flex flex-column justify-content-center col-nar">
                            <h2 className="font-weight-bold er-color-orange pb-2">{t('homeBg', {returnObjects: true}).fru.title}</h2>
                            <p className="pb-2">
                                {t('homeBg', {returnObjects: true}).fru.text}
                            </p>
                            <Button translateText="infoButtonText" goTo="/meyve"/>
                            <div className="row flex-row-reverse float-right px-0 py-0">
                                <div class="leaf col-xs-auto container-fluid">
                                    <img src="/images/leaf.png" className="animation w-auto float-right d-block"/>
                                </div>
                            </div>
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

                .animation{
                  animation: animate 10s;
                  animation-iteration-count: infinite;
                }

                .leaf{
                    height:120px;
                }

                .container-fluid{
                    max-width: none;
                }

                .leaf img{
                    position: absolute;
                    display: block;
                    max-width: none;
                    height: auto;
                    z-index: -1;
                }

                @keyframes animate {
                  0% { transform: translate(1px, 1px) rotate(-10deg); }
                  10% { transform: translate(-1px, -2px) rotate(-10deg); }
                  20% { transform: translate(-3px, 0px) rotate(0deg); }
                  30% { transform: translate(3px, 2px) rotate(0deg); }
                  40% { transform: translate(1px, -1px) rotate(10deg); }
                  50% { transform: translate(-1px, 2px) rotate(0deg); }
                  60% { transform: translate(-3px, 1px) rotate(0deg); }
                  70% { transform: translate(3px, 1px) rotate(-10deg); }
                  80% { transform: translate(-1px, -1px) rotate(0deg); }
                  90% { transform: translate(1px, 2px) rotate(0deg); }
                  100% { transform: translate(1px, -2px) rotate(-10deg); }
                }
            `}</style>
        </div>
    );
};

export default withTranslation('homepage')(VegetableFruit);
