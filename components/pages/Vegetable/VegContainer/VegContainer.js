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
        axios.get("http://172.105.89.112:8600/products", {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTY4MTQyNjQzLCJleHAiOjE1NzA3MzQ2NDN9.tqzTZksZT1lCQ38OSPVZd-VRIuja6VXrGahasTQUI7c`,
            }
        }).then(res => {
            const products = res.data;
            this.setState({products})
        })
    }

    // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTY4MTQyNjQzLCJleHAiOjE1NzA3MzQ2NDN9.tqzTZksZT1lCQ38OSPVZd-VRIuja6VXrGahasTQUI7c";
    //
    // static async getInitialProps() {
    //     const res = await axios.get("http://172.105.89.112:8600/products", {
    //         headers: {
    //             Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTY4MTQyNjQzLCJleHAiOjE1NzA3MzQ2NDN9.tqzTZksZT1lCQ38OSPVZd-VRIuja6VXrGahasTQUI7c`,
    //         }
    //     });
    //     return {data: res.data};
    // }
//http://172.105.89.112:8600

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.products.map((product, i) => {
                        return (
                            <div className="col-3 pr-3 pb-3 pl-3">
                                <Product key={i}
                                         name={product.name}
                                         nameEn={product.name_en}
                                         photo={`http://172.105.89.112:8600${product.photo.url}`}/>
                            </div>
                        )
                    })}

                </div>
            </div>
        );
    }
}

export default VegContainer;
