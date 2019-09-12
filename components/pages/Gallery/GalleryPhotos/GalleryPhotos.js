import React from 'react';
import GalleryPhoto from "./GalleryPhoto/GalleryPhoto";

const GalleryPhotos = () => {
    return (
        <>
            <div className="container-fluid p-x-0 py-5 Gphoto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 p-3">
                            <GalleryPhoto imageName="avokadox.png" />
                        </div>
                        <div className="col-md-6 col-lg-3 p-3">
                            <GalleryPhoto imageName="avokadox.png" />
                        </div>
                        <div className="col-md-6 col-lg-3 p-3">
                            <GalleryPhoto imageName="avokadox.png" />
                        </div>
                        <div className="col-md-6 col-lg-3 p-3">
                            <GalleryPhoto imageName="avokadox.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-x-0 py-5 Gphoto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 p-3">
                            <GalleryPhoto imageName="avokadox.png" />
                        </div>
                        <div className="col-md-6 col-lg-3 p-3">
                            <GalleryPhoto imageName="avokadox.png" />
                        </div>
                        <div className="col-md-6 col-lg-3 p-3">
                            <GalleryPhoto imageName="avokadox.png" />
                        </div>
                        <div className="col-md-6 col-lg-3 p-3">
                            <GalleryPhoto imageName="avokadox.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-x-0 py-5 Gphoto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 p-3">
                            <GalleryPhoto imageName="avokadox.png" />
                        </div>
                        <div className="col-md-6 col-lg-3 p-3">
                            <GalleryPhoto imageName="avokadox.png" />
                        </div>
                        <div className="col-md-6 col-lg-3 p-3">
                            <GalleryPhoto imageName="avokadox.png" />
                        </div>
                        <div className="col-md-6 col-lg-3 p-3">
                            <GalleryPhoto imageName="avokadox.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-x-0 py-5 Gphoto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 p-3">
                            <GalleryPhoto imageName="avokadox.png" />
                        </div>
                        <div className="col-md-6 col-lg-3 p-3">
                            <GalleryPhoto imageName="avokadox.png" />
                        </div>
                        <div className="col-md-6 col-lg-3 p-3">
                            <GalleryPhoto imageName="avokadox.png" />
                        </div>
                        <div className="col-md-6 col-lg-3 p-3">
                            <GalleryPhoto imageName="avokadox.png" />
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .Gphoto:nth-child(even) {
                    background: #f8f8f8;
                }
            `}</style>
        </>
    );
};

export default GalleryPhotos;
