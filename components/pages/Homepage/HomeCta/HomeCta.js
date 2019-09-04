import React from 'react';
import { FaPhone } from 'react-icons/fa';

const HomeCTA = () => {
    return (
        <div className="container">
            <p className="text-center HomeCta">
                Hizmetlerimiz hakkında detaylı bilgi için bize ulaşın &nbsp; <span><FaPhone style={{transform: 'rotate(-270deg)'}} /></span> &nbsp;
                <a href="tel://+902623355606">0 262 335 56 06</a>
            </p>

            <style jsx>{`
                .HomeCta {
                    font-size: 1.5rem
                }
            `}</style>
        </div>
    );
};

export default HomeCTA;
