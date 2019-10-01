import React, {Component} from 'react';
import GalleryPhoto from "./GalleryPhoto/GalleryPhoto";
import axios from "axios";

class GalleryPhotos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            isVisible: false,
            slide: 0
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
        axios.get("https://admin.ergidatarim.com.tr/galleries", {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTY4MTQyNjQzLCJleHAiOjE1NzA3MzQ2NDN9.tqzTZksZT1lCQ38OSPVZd-VRIuja6VXrGahasTQUI7c`,
            }
        }).then(res => {
            const photos = res.data
            this.setState({photos})
        })
    }

    render() {
        return (
            <>
                <div className="container-fluid p-x-0 py-5 Gphoto">
                    <div className="container">
                        <div className="row">
                            {this.state.photos.slice(0,4).map((photo, i) => {
                                return (
                                    <div className="col-md-6 col-lg-3 p-3" key={photo.id}>
                                        <GalleryPhoto imageName={photo.photo.url} altTag={photo.alt_tag} handler={this.showSlide} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-x-0 py-5 Gphoto">
                    <div className="container">
                        <div className="row">
                            {this.state.photos.slice(4,8).map((photo, i) => {
                                return (
                                    <div className="col-md-6 col-lg-3 p-3" key={i}>
                                        <GalleryPhoto imageName={photo.photo.url} altTag={photo.alt_tag} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-x-0 py-5 Gphoto">
                    <div className="container">
                        <div className="row">
                            {this.state.photos.slice(8,12).map((photo, i) => {
                                return (
                                    <div className="col-md-6 col-lg-3 p-3" key={i}>
                                        <GalleryPhoto imageName={photo.photo.url} altTag={photo.alt_tag} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-x-0 py-5 Gphoto">
                    <div className="container">
                        <div className="row">
                            {this.state.photos.slice(12,16).map((photo, i) => {
                                return (
                                    <div className="col-md-6 col-lg-3 p-3" key={i}>
                                        <GalleryPhoto imageName={photo.photo.url} altTag={photo.alt_tag} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-x-0 py-5 Gphoto">
                    <div className="container">
                        <div className="row">
                            {this.state.photos.slice(16,20).map((photo, i) => {
                                return (
                                    <div className="col-md-6 col-lg-3 p-3" key={i}>
                                        <GalleryPhoto imageName={photo.photo.url} altTag={photo.alt_tag} />
                                    </div>
                                )
                            })}
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
    }
}

export default GalleryPhotos;
