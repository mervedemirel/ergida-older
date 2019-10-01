import React from 'react';

const GalleryPhoto = (props) => {
    return (
        <div className="Gallery-card relative">
            <img className="Gallery-image" src={`https://admin.ergidatarim.com.tr${props.imageName}`}
                 alt={props.altTag} onClick={props.handler}/>
            <style jsx>{`
                .Gallery-image {
                    width: 100%;
                    transform: translate(1.5rem, 1.5rem);
                    transition: transform .5s;
                    box-shadow: 0 0 10px;
                    width: 236px;
                    height: 333px;
                    object-fit: cover;
                }
                
                @media (max-width: 767px) {
                    .Gallery-image {
                        width: 100%;
                        height: auto;
                        transform: none;
                    }
                }
                
                @media (min-width:768px) and (max-width: 992px) {
                    .Gallery-image {
                        width: 306px;
                        height: 340px;
                    }
                }
                
                @media (min-width:992px) and (max-width: 1199px) {
                    .Gallery-image {
                        width: 192px;
                        height: 340px;
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
