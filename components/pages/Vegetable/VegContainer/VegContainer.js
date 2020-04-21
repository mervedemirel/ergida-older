import React, {Component} from 'react';
import axios from "axios";

import Product from "../Product/Product";

class VegContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get("https://admin.ergidatarim.com.tr/products?category=vegetable").then(res => {
            const products = res.data;
            this.setState({products})
        })
    }

    render() {
        return (
            <>
                <div className="container-fluid px-0 py-3 m-0">
                    <div className="container p-0">
                        <div className="row ProductRow">
                            {this.state.products.map((product, i) => {
                                return product.color === 'red' ? (
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 pr-3 pb-3 pl-3">
                                        <Product key={i}
                                                 name={product.name}
                                                 nameEn={product.name_en}
                                                 photo={`https://admin.ergidatarim.com.tr/${product.photo[0].url}`}
                                                 bgColor="rgba(255, 144, 158, 1)"
                                                 titleColor="rgba(174, 75, 70, 1)"/>
                                    </div>) : null
                            })}
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-0 py-3 m-0" style={{background: 'rgb(253,245,230)'}}>
                    <div className="container p-0">
                        <div className="row ProductRow">
                            {this.state.products.map((product, i) => {
                                return product.color === 'yellow' ? (
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 pr-3 pb-3 pl-3">
                                        <Product key={i}
                                                 name={product.name}
                                                 nameEn={product.name_en}
                                                 photo={`https://admin.ergidatarim.com.tr/${product.photo[0].url}`}
                                                 bgColor="rgba(204,204,0, .4)"
                                                 titleColor="rgba(153, 153, 0)"/>
                                    </div>) : null
                            })}
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-0 py-3 m-0">
                    <div className="container p-0">
                        <div className="row ProductRow">
                            {this.state.products.map((product, i) => {
                                return product.color === 'white' ? (
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 pr-3 pb-3 pl-3">
                                        <Product key={i}
                                                 name={product.name}
                                                 nameEn={product.name_en}
                                                 photo={`https://admin.ergidatarim.com.tr/${product.photo[0].url}`}
                                                 bgColor="rgba(50,130,170, .4)" titleColor="rgba(225,222,173)"/>
                                    </div>) : null
                            })}
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-0 py-3 m-0" style={{background: 'rgb(253,245,230)'}}>
                    <div className="container p-0">
                        <div className="row ProductRow">
                            {this.state.products.map((product, i) => {
                                return product.color === 'green' ? (
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 pr-3 pb-3 pl-3">
                                        <Product key={i}
                                                 name={product.name}
                                                 nameEn={product.name_en}
                                                 photo={`https://admin.ergidatarim.com.tr/${product.photo[0].url}`}
                                                 bgColor="rgba(50,205,50, .4)" titleColor="rgba(0,100,0)"/>
                                    </div>) : null
                            })}
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-0 py-3 m-0">
                    <div className="container p-0">
                        <div className="row ProductRow">
                            {this.state.products.map((product, i) => {
                                return product.color === 'tomato' ? (
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 pr-3 pb-3 pl-3">
                                        <Product key={i}
                                                 name={product.name}
                                                 nameEn={product.name_en}
                                                 photo={`https://admin.ergidatarim.com.tr/${product.photo[0].url}`}
                                                 bgColor="rgba(255, 144, 158, 1)"
                                                 titleColor="rgba(174, 75, 70, 1)"/>
                                    </div>) : null
                            })}
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-0 py-3 m-0">
                    <div className="container p-0">
                        <div className="row ProductRow">
                            {this.state.products.map((product, i) => {
                                return product.color === 'tomato1' ? (
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 pr-3 pb-3 pl-3">
                                        <Product key={i}
                                                 name={product.name}
                                                 nameEn={product.name_en}
                                                 photo={`https://admin.ergidatarim.com.tr/${product.photo[0].url}`}
                                                 bgColor="rgba(254, 169, 140, 1)"
                                                 titleColor="rgba(141, 42, 21, 1)"/>
                                    </div>) : null
                            })}
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-0 py-3 m-0">
                    <div className="container p-0">
                        <div className="row ProductRow">
                            {this.state.products.map((product, i) => {
                                return product.color === 'pepper' ? (
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 pr-3 pb-3 pl-3">
                                        <Product key={i}
                                                 name={product.name}
                                                 nameEn={product.name_en}
                                                 photo={`https://admin.ergidatarim.com.tr/${product.photo[0].url}`}
                                                 bgColor="rgba(167, 217, 102, 1)"
                                                 titleColor="rgba(57, 143, 43, 1)"/>
                                    </div>) : null
                            })}
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-0 py-3 m-0">
                    <div className="container p-0">
                        <div className="row ProductRow">
                            {this.state.products.map((product, i) => {
                                return product.color === 'pepper1' ? (
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 pr-3 pb-3 pl-3">
                                        <Product key={i}
                                                 name={product.name}
                                                 nameEn={product.name_en}
                                                 photo={`https://admin.ergidatarim.com.tr/${product.photo[0].url}`}
                                                 bgColor="rgba(197, 211, 80, 1)"
                                                 titleColor="rgba(70, 151, 50, 1)"/>
                                    </div>) : null
                            })}
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-0 py-3 m-0">
                    <div className="container p-0">
                        <div className="row ProductRow">
                            {this.state.products.map((product, i) => {
                                return product.color === 'cucumber' ? (
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 pr-3 pb-3 pl-3">
                                        <Product key={i}
                                                 name={product.name}
                                                 nameEn={product.name_en}
                                                 photo={`https://admin.ergidatarim.com.tr/${product.photo[0].url}`}
                                                 bgColor="rgba(192, 181, 255, 1)"
                                                 titleColor="rgba(170, 160, 231, 1)"/>
                                    </div>) : null
                            })}
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-0 py-3 m-0">
                    <div className="container p-0">
                        <div className="row ProductRow">
                            {this.state.products.map((product, i) => {
                                return product.color === 'cucumber1' ? (
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 pr-3 pb-3 pl-3">
                                        <Product key={i}
                                                 name={product.name}
                                                 nameEn={product.name_en}
                                                 photo={`https://admin.ergidatarim.com.tr/${product.photo[0].url}`}
                                                 bgColor="rgba(221, 199, 255, 1)"
                                                 titleColor="rgba(103, 92, 154, 1)"/>
                                    </div>) : null
                            })}
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-0 py-3 m-0">
                    <div className="container p-0">
                        <div className="row ProductRow">
                            {this.state.products.map((product, i) => {
                                return product.color === 'beans' ? (
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 pr-3 pb-3 pl-3">
                                        <Product key={i}
                                                 name={product.name}
                                                 nameEn={product.name_en}
                                                 photo={`https://admin.ergidatarim.com.tr/${product.photo[0].url}`}
                                                 bgColor="rgba(255, 168, 141, 1)"
                                                 titleColor="rgba(151, 67, 67, 1)"/>
                                    </div>) : null
                            })}
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-0 py-3 m-0">
                    <div className="container p-0">
                        <div className="row ProductRow">
                            {this.state.products.map((product, i) => {
                                return product.color === 'eggplant' ? (
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 pr-3 pb-3 pl-3">
                                        <Product key={i}
                                                 name={product.name}
                                                 nameEn={product.name_en}
                                                 photo={`https://admin.ergidatarim.com.tr/${product.photo[0].url}`}
                                                 bgColor="rgba(255, 144, 158, 1)"
                                                 titleColor="rgba(206, 104, 101, 1)"/>
                                    </div>) : null
                            })}
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-0 py-3 m-0">
                    <div className="container p-0">
                        <div className="row ProductRow">
                            {this.state.products.map((product, i) => {
                                return product.color === 'zucchini' ? (
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 pr-3 pb-3 pl-3">
                                        <Product key={i}
                                                 name={product.name}
                                                 nameEn={product.name_en}
                                                 photo={`https://admin.ergidatarim.com.tr/${product.photo[0].url}`}
                                                 bgColor="rgba(233, 227, 128, 1)"
                                                 titleColor="rgba(66, 148, 48, 1)"/>
                                    </div>) : null
                            })}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default VegContainer;
