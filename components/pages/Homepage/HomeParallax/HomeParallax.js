import React from 'react';
import {withTranslation} from "../../../../i18n";


const HomeParallax = ({t}) => {
    return (
        <div className="About-parallax d-flex align-items-center justify-content-center">
            <div className="container-fluid HomeBg-mid px-0 py-5">
                    <div className="container">
                        <div className="row p-0">
                            {t('icons', {returnObjects: true}).map((icon, i) => {
                                return (
                                    <div
                                        className=" col-12 col-sm-6 col-md-4 col-lg-4 d-flex flex-column justify-content-center align-items-center py-5"
                                        key={i}>
                                        {iconMap[icon.icon]}
                                        <p className="text-center icon-text">{icon.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            <style jsx>{`
                .About-parallax {
                    height: 300px;
                    background: url('../../../../static/images/about-parallax.jpg');
                    background-attachment: fixed;
                      background-position: center;
                      background-repeat: no-repeat;
                      background-size: cover;
                }
                
                .Parallax-text {
                    color: white;
                    font-size: 2rem;
                }
                
                @media (max-width: 991px) {
                    .Parallax-text {
                        font-size: 1.5rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default withTranslation('homepage')(HomeParallax);
