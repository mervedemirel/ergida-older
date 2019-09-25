import React from 'react';
import {i18n} from '../../../../i18n';

const Product = (props) => {
    return (
        <div className="Product mt-4 position-relative pt-3 pl-3">
            {i18n.language === 'tr' ? (<div>
                <p className="Product-title mb-0">{props.name}</p>
                <p className="Product-subtitle mb-1">{props.nameEn}</p>
            </div>) : <div>
                <p className="Product-title mb-0">{props.nameEn}</p>
                <p className="Product-subtitle mb-1">{props.name}</p>
            </div>}


            <img className="Product-image position-absolute" src={props.photo} alt={props.name}/>

            <style jsx>{`
                .Product {
                    height: 275px;
                    background: ${props.bgColor}
                }
            
                .Product:hover > .Product-image {
                    transform: translate(0, 0);
                    transition: transform ease .5s;
                }
            
                .Product-title {
                    font-weight: 700;
                    letter-spacing: 0.03rem;
                    color: ${props.titleColor};
                }
                
                .Product-subtitle {
                    font-weight: 600;
                    letter-spacing: -0.01rem;
                    color: white;
                }
                
                .Product-image {
                    width: 250px;
                    transform: translate(2rem, 1rem);
                    transition: transform ease .5s;
                    z-index: 1
                }
            `}</style>
        </div>
    );
};

export default Product;
