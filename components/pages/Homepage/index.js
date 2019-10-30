import React, {useEffect, useState, useRef} from "react";
import Hero from "./Hero/Hero";
import HomeBg from "./HomeBg/HomeBg";
import HomeCta from "./HomeCta/HomeCta";
import VegetableFruit from "./VegetableFruit/VegetableFruit";
import {i18n} from "../../../i18n";
import Leaves from "../../shared/Leaves/Leaves";
import Delayed from "../../shared/Delayed/Delayed"
import ReactSwipe from 'react-swipe';
import ReactDOM from "react-dom";

const HomePageIndex = () => {
    const [activeLng, setActiveLng] = useState(undefined)

    useEffect(() => {
        setActiveLng(localStorage.getItem('lng'));
    })

    const swipeOptions = {
        auto: 3000,
        speed: 3000,
        disableScroll: true,
        continuous: true
    }

    let reactSwipeEl;
    let hero;

    if (activeLng !== 'en') {
        hero = <ReactSwipe className="carousel" swipeOptions={swipeOptions} ref={el => (reactSwipeEl = el)}>
            <div>
                <picture>
                    <source srcSet="../../../static/images/slide-1.webp" type="image/webp"/>
                    <source srcSet="../../../static/images/slide-1.jpg" type="image/jpeg"/>
                    <img className="slider-pic" src="../../../static/images/slide-1.jpg" alt="" style={{height: '100%', objectFit: 'cover'}}/>
                </picture>
            </div>
            <div>
                <picture className="slider-pic">
                    <source srcSet="../../../static/images/slide-2.webp" type="image/webp"/>
                    <source srcSet="../../../static/images/slide-2.jpg" type="image/jpeg"/>
                    <img className="slider-pic" src="../../../static/images/slide-2.jpg" alt="" style={{height: '100%', objectFit: 'cover'}}/>
                </picture>
            </div>
            <div>
                <picture>
                    <source srcSet="../../../static/images/slide-3.webp" type="image/webp"/>
                    <source srcSet="../../../static/images/slide-3.jpg" type="image/jpeg"/>
                    <img className="slider-pic" src="../../../static/images/slide-3.jpg" alt="" style={{height: '100%', objectFit: 'cover'}}/>
                </picture>
            </div>
        </ReactSwipe>
    } else {
        hero = <ReactSwipe className="carousel" swipeOptions={swipeOptions} ref={el => (reactSwipeEl = el)}>
            <div>
                <picture>
                    <source srcSet="../../../static/images/slide-1-en.webp" type="image/webp" />
                    <source srcSet="../../../static/images/slide-1-en.jpg" type="image/jpeg" />
                    <img className="slider-pic" src="../../../static/images/slide-1-en.jpg" alt="" style={{height: '100%', objectFit: 'cover'}}/>
                </picture>
            </div>
            <div>
                <picture>
                    <source srcSet="../../../static/images/slide-2-en.webp" type="image/webp"/>
                    <source srcSet="../../../static/images/slide-2-en.jpg" type="image/jpeg"/>
                    <img className="slider-pic" src="../../../static/images/slide-2-en.jpg" alt="" style={{height: '100%', objectFit: 'cover'}}/>
                </picture>
            </div>
            <div>
                <picture>
                    <source srcSet="../../../static/images/slide-3-en.webp" type="image/webp"/>
                    <source srcSet="../../../static/images/slide-3-en.jpg" type="image/jpeg"/>
                    <img className="slider-pic" src="../../../static/images/slide-3-en.jpg" alt="" style={{height: '100%', objectFit: 'cover'}}/>
                </picture>
            </div>
        </ReactSwipe>
    }

    return (
        <>
            {hero}
            <HomeBg/>
            {/*<Delayed waitBeforeShow={1000}>*/}
            {/*    <Leaves top="50vh" left="20vw" />*/}
            {/*</Delayed>*/}
            {/*<Leaves ref={el => leafTwo = el} top="90vh" left="80vw"/>*/}
            {/*<Leaves top="140vh" left="10vw"/>*/}
            {/*<Leaves top="180vh" left="85vw"/>*/}
            {/*<Leaves top="230vh" left="75vw"/>*/}
            <Delayed waitBeforeShow={366}>
                <Leaves top="50vh" left="20vw" />
            </Delayed>
            <Delayed waitBeforeShow={658}>
                <Leaves top="90vh" left="80vw" />
            </Delayed>
            <Delayed waitBeforeShow={1023}>
                <Leaves top="140vh" left="10vw" />
            </Delayed>
            <Delayed waitBeforeShow={1316}>
                <Leaves top="180vh" left="85vw" />
            </Delayed>
            <Delayed waitBeforeShow={1681}>
                <Leaves top="230vh" left="75vw" />
            </Delayed>
            <VegetableFruit/>
            <HomeCta/>
            <style jsx>{`

            `}</style>
        </>
    )
};

export default HomePageIndex
