import React from 'react';
import {withTranslation} from "../../../../i18n";

import SecondText from './SecondText/SecondText';

const HomeHero = (props) => {
    let secondText;
    props.otherTranslateKey ? secondText = true : secondText = false;

    return (
        <div className="container-fluid p-0 position-relative">
            <img src={props.bigImage} className="w-100 hero-big" alt="" />
            <img src={props.mobImage} className="w-100 hero-small" alt=""/>
            <h1 className="hero-title"><span
                className="font-size-3" style={{color: props.color}}>{props.t(props.translateKey)}</span>
                {secondText ? (
                    <SecondText text={props.t(props.otherTranslateKey)}/>
                ) : (
                    ''
                )
                }

            </h1>
            <style jsx>{`
                @media (max-width:767px) {
                    .hero-big {
                        display: none;
                    }
                } 
                
                @media (min-width:768px) {
                    .hero-small {
                        display: none;
                    }
                } 
                
                .hero-title {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    top: ${props.top};
                }
            `}</style>
        </div>
    );
};

export default withTranslation('common')(HomeHero);
