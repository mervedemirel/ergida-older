import React from 'react';

const GalleryPhoto = (props) => {
    return (
        <div className="Gallery-card relative">
            <img className="Gallery-image" src={'../../../../static/images/' + props.imageName} alt=""/>
            <style jsx>{`
                .Gallery-image {
                    width: 100%;
                    transform: translate(1.5rem, 1.5rem);
                    transition: transform .5s;
                }
                
                @media (max-width: 767px) {
                    .Gallery-image {
                        transform: none;
                    }
                }
                
                .Gallery-image:hover {
                    transform: translate(0, 0);
                    transition: transform .5s;
                }
                
                .Gallery-card {
                    border: 4px solid #669915;
                }
            `}</style>
        </div>
    );
};

export default GalleryPhoto;
