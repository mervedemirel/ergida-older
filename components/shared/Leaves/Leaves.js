import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { TweenLite, TweenMax } from "gsap";

class Leaves extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        TweenLite.set('#container', { perspective: 600 });
        let container = document.getElementById("container");
        let w = window.innerWidth;
        let h = window.innerHeight;
        let total = 5;

        for (let i = 0; i < total; i++) {
            var Div = document.createElement('div');
            TweenLite.set(Div, { attr: { class: 'dot' }, x: this.rFunc(0, w), y: this.rFunc(-200, -150), z: this.rFunc(-200, 200) });
            container.appendChild(Div);
            this.animm(Div);
        }
    }

    animm = (elm) => {
        TweenMax.to(elm, this.rFunc(6, 15), { y: window.innerWidth + 100, ease: Linear.easeNone, repeat: -1, delay: -15 });
        TweenMax.to(elm, this.rFunc(4, 8), { x: '+=100', rotationZ: this.rFunc(0, 180), repeat: -1, yoyo: true, ease: Sine.easeInOut });
        TweenMax.to(elm, this.rFunc(2, 8), { rotationX: this.rFunc(0, 360), rotationY: this.rFunc(0, 360), repeat: -1, yoyo: true, ease: Sine.easeInOut, delay: -5 });
    }

    rFunc = (min, max) => {
        return min+Math.random()*(max-min)
    }

    render() {
        return (
            <div ref={div => this.myElement = div} id="container" className="containerx">

                <style jsx>{`
                    .dot {
                        width:35px;
                        height:35px;
                        position:absolute;
                        background: url('http://www.clipartqueen.com/image-files/red-lobed-fall-clipart-leaf.png');
                        background-size: 100% 100%;
                    }
                    .containerx {width:100%; height:100%; }
                `}</style>
            </div>
        );
    }
}

export default Leaves;
