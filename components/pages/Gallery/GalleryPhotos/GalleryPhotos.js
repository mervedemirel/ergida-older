import React, {Component} from 'react';
import GalleryPhoto from "./GalleryPhoto/GalleryPhoto";
import axios from "axios";
import FsLightbox from 'fslightbox-react';

class GalleryPhotos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            isVisible: false,
            slide: 0,
            photoUrls: []
        }

        this.showSlide = this.showSlide.bind(this);
    }

    showSlide = (slide) => {
        this.setState({
            isVisible: !this.state.isVisible,
            slide: slide
        });
    }

    componentDidMount() {
        axios.get("https://admin.ergidatarim.com.tr/galleries").then(res => {
            const photos = res.data
            const photoUrls = []
            photos.forEach((photo) => {
                photoUrls.push(`https://admin.ergidatarim.com.tr${photo.photo.url}`);
            })
            this.setState({photos, photoUrls})
            console.log(this.state.photoUrls)
        })
    }

    render() {
        return (
            <>
                <div className="container-fluid p-x-0 py-5 Gphoto">
                    <div className="container">
                        <div className="row">
                            {this.state.photos.slice(0, 4).map((photo) => {
                                return (
                                    <div className="col-md-6 col-lg-3 p-3" key={photo.id}>
                                        <GalleryPhoto imageName={photo.photo.url} altTag={photo.alt_tag}
                                                      handler={() => this.showSlide(this.state.photoUrls.indexOf("https://admin.ergidatarim.com.tr" + photo.photo.url) + 1)}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-x-0 py-5 Gphoto">
                    <div className="container">
                        <div className="row">
                            {this.state.photos.slice(4, 8).map((photo, i) => {
                                return (
                                    <div className="col-md-6 col-lg-3 p-3" key={i}>
                                        <GalleryPhoto imageName={photo.photo.url} altTag={photo.alt_tag}
                                                      handler={() => this.showSlide(this.state.photoUrls.indexOf("https://admin.ergidatarim.com.tr" + photo.photo.url) + 1)}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-x-0 py-5 Gphoto">
                    <div className="container">
                        <div className="row">
                            {this.state.photos.slice(8, 12).map((photo, i) => {
                                return (
                                    <div className="col-md-6 col-lg-3 p-3" key={i}>
                                        <GalleryPhoto imageName={photo.photo.url} altTag={photo.alt_tag}
                                                      handler={() => this.showSlide(this.state.photoUrls.indexOf("https://admin.ergidatarim.com.tr" + photo.photo.url) + 1)}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-x-0 py-5 Gphoto">
                    <div className="container">
                        <div className="row">
                            {this.state.photos.slice(12, 16).map((photo, i) => {
                                return (
                                    <div className="col-md-6 col-lg-3 p-3" key={i}>
                                        <GalleryPhoto imageName={photo.photo.url} altTag={photo.alt_tag}
                                                      handler={() => this.showSlide(this.state.photoUrls.indexOf("https://admin.ergidatarim.com.tr" + photo.photo.url) + 1)}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-x-0 py-5 Gphoto">
                    <div className="container">
                        <div className="row">
                            {this.state.photos.slice(16, 20).map((photo, i) => {
                                return (
                                    <div className="col-md-6 col-lg-3 p-3" key={i}>
                                        <GalleryPhoto imageName={photo.photo.url} altTag={photo.alt_tag}
                                                      handler={() => this.showSlide(this.state.photoUrls.indexOf("https://admin.ergidatarim.com.tr" + photo.photo.url) + 1)}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                {this.state.photoUrls.length >= 1 ? <FsLightbox toggler={this.state.isVisible}
                                                                sources={this.state.photoUrls}
                                                                slide={this.state.slide}/> :
                    <div style={{display: 'none'}}>lightbox-holder</div>}
                <style jsx>{`
                .Gphoto:nth-child(even) {
                    background: #f8f8f8;
                }
            `}</style>
            </>
        );
    }
}

export default GalleryPhotos;
