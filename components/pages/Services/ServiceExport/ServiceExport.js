import React, {useState, useEffect} from 'react';
import {i18n, withTranslation} from "../../../../i18n";

const ServiceExport = ({t}) => {
    const [activeLng, setActiveLng] = useState(undefined);

    useEffect(() => {
        setActiveLng(localStorage.getItem('lng'))
    });

    return (
        <div className="container-fluid p-0 mt-5 ServiceExport">

            {activeLng === 'tr' ?
                <img src="/images/service-export.jpg" className="full-width" alt=""/> :
                <img src="/images/service-export-en.jpg" className="full-width" alt=""/>

            }


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
