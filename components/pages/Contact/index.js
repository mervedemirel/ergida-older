import React, {useState, useEffect} from 'react';
import Hero from "../Homepage/Hero/Hero";
import Map from "./Map/Map";
import ContactForm from "./ContactForm/ContactForm";
import {i18n} from "../../../i18n";
import Delayed from "../../shared/Delayed/Delayed";
import Leaves from "../../shared/Leaves/Leaves";


const ContactPageIndex = () => {
    const [activeLng, setActiveLng] = useState(undefined)

    useEffect(() => {
        setActiveLng(localStorage.getItem('lng'))
    })

    return (
        <>
            {activeLng === 'tr' ? <Hero bigImage="../../../../static/images/iletisim-hero.jpg"
                                        mobImage="../../../../static/images/iletisim-hero-mob.jpg"/> :
                <Hero bigImage="../../../../static/images/iletisim-hero-en.jpg"
                      mobImage="../../../../static/images/iletisim-hero-mob-en.jpg"/>}


            <Delayed waitBeforeShow={366}>
                <Leaves top="50vh" left="20vw"/>
            </Delayed>
            <Delayed waitBeforeShow={658}>
                <Leaves top="90vh" left="80vw"/>
            </Delayed>
            <Delayed waitBeforeShow={1023}>
                <Leaves top="140vh" left="10vw"/>
            </Delayed>
            <div className="row justify-content-between">
                <div class="leaf col-xs-auto container-fluid">
                    <img src="../../../static/images/leaf.png" className="animation mx-auto d-block"/>
                </div>
                <div class="leaf col-xs-auto container-fluid">
                    <img src="../../../static/images/leaf.png" className="animation mx-auto d-block"/>
                </div>
            </div>
            <Map/>
            <ContactForm/>
            <style jsx>{`
                .animation{
                  animation: animate 10s;
                  animation-iteration-count: infinite;
                }

                .leaf{
                    height:120px;
                }

                .container-fluid{
                    width: 100%;
                }

                .leaf img{
                    position: absolute;
                    z-index: -1;
                }

                @keyframes animate {
                  0% { transform: translate(1px, 1px) rotate(-10deg); }
                  10% { transform: translate(-1px, -2px) rotate(-10deg); }
                  20% { transform: translate(-3px, 0px) rotate(0deg); }
                  30% { transform: translate(3px, 2px) rotate(0deg); }
                  40% { transform: translate(1px, -1px) rotate(10deg); }
                  50% { transform: translate(-1px, 2px) rotate(0deg); }
                  60% { transform: translate(-3px, 1px) rotate(0deg); }
                  70% { transform: translate(3px, 1px) rotate(-10deg); }
                  80% { transform: translate(-1px, -1px) rotate(0deg); }
                  90% { transform: translate(1px, 2px) rotate(0deg); }
                  100% { transform: translate(1px, -2px) rotate(-10deg); }
                }
            `}</style>
        </>
    );
};

export default ContactPageIndex;
