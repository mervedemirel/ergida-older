import React, {useEffect, useState} from "react";
import Hero from "./Hero/Hero";
import HomeBg from "./HomeBg/HomeBg";
import HomeCta from "./HomeCta/HomeCta";
import VegetableFruit from "./VegetableFruit/VegetableFruit";
import { i18n } from "../../../i18n";
import Leaves from "../../shared/Leaves/Leaves";
import Delayed from "../../shared/Delayed/Delayed"
import ReactSwipe from 'react-swipe';

const HomePageIndex = () => {
    const [activeLng, setActiveLng] = useState(undefined)

    useEffect(() => {
        setActiveLng(localStorage.getItem('lng'))
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
        hero = <ReactSwipe className="carousel" swipeOptions={swipeOptions} ref = {el => (reactSwipeEl = el)} >
            <div>
                <img src="../../../static/images/slide-1.jpg" alt="" style={{height: 'calc(100vh - 240px)', width: '100%', objectFit: 'cover'}}/>
            </div>
            <div>
                <img src="../../../static/images/slide-2.jpg" alt="" style={{height: 'calc(100vh - 240px)', width: '100%', objectFit: 'cover'}}/>
            </div>
            <div>
                <img src="../../../static/images/slide-3.jpg" alt="" style={{height: 'calc(100vh - 240px)', width: '100%', objectFit: 'cover'}}/>
            </div>
        </ReactSwipe>
    } else {
        hero = <ReactSwipe className="carousel" swipeOptions={swipeOptions} ref = {el => (reactSwipeEl = el)} >
            <div>
                <img src="../../../static/images/slide-1-en.jpg" alt="" style={{height: 'calc(100vh - 240px)', width: '100%', objectFit: 'cover'}}/>
            </div>
            <div>
                <img src="../../../static/images/slide-2-en.jpg" alt="" style={{height: 'calc(100vh - 240px)', width: '100%', objectFit: 'cover'}}/>
            </div>
            <div>
                <img src="../../../static/images/slide-3-en.jpg" alt="" style={{height: 'calc(100vh - 240px)', width: '100%', objectFit: 'cover'}}/>
            </div>
        </ReactSwipe>
    }

    return (
        <>
            {hero}
             <HomeBg />
             <Delayed waitBeforeShow={3000}>
                 <Leaves top="50vh" left="20vw" />
             </Delayed>
             <Delayed waitBeforeShow={4000}>
                 <Leaves top="90vh" left="80vw" />
             </Delayed>
             <Delayed waitBeforeShow={6000}>
                 <Leaves top="140vh" left="10vw" />
             </Delayed>
             <Delayed waitBeforeShow={9000}>
                 <Leaves top="180vh" left="85vw" />
             </Delayed>
             <Delayed waitBeforeShow={10000}>
                 <Leaves top="230vh" left="75vw" />
             </Delayed>
             <VegetableFruit />
             <HomeCta />
            <style jsx>{`
                .carousel > div > img {
                    max-height: calc(100vh - 80px) !important;
                }
            `}</style>
        </>
    )
};

export default HomePageIndex
