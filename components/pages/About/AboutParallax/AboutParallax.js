import React from 'react';
import {withTranslation} from "../../../../i18n";


const AboutParallax = ({t}) => {
    return (
        <div className="About-parallax d-flex align-items-center justify-content-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <p className="text-center Parallax-text">{t('parallaxText')}</p>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .About-parallax {
                    height: 300px;
                    background: url('../../../../static/images/parallax.jpg');
                    background-attachment: fixed;
                      background-position: center;
                      background-repeat: no-repeat;
                      background-size: cover;
                }

                @media (max-width: 767px) {
                    .About-parallax {
                        height: auto;
                        background: url('../../../../static/images/parallax-mob.jpg');
                        background-attachment: initial;
                          background-position: center;
                          background-repeat: no-repeat;
                          background-size: cover;
                    }
    
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

export default withTranslation('about')(AboutParallax);
