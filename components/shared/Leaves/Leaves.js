import React from 'react';

const Leaves = () => {
    return (
        <div className="containerx">

            <div className="bird-container">
                <div className="bird"></div>
            </div>

            <style jsx>{`
                .containerx {
                    z-index: 1;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    // min-height: 100vh;
                    min-height: 35rem;
                    background-image: linear-gradient(to bottom,  rgba(255,168,76,0.6) 0%,rgba(255,123,13,0.6) 100%), url('https://images.unsplash.com/photo-1446824505046-e43605ffb17f');
                    background-blend-mode: soft-light;
                    background-size: cover;
                    background-position: center center;
                    padding: 2rem;
                }
                
                .bird {
                    background-image: url(../../../static/images/leaves.svg);
                    background-size: auto 100%;
                    width: 352px;
                    height: 500px;
                    will-change: background-position;
                    
                    animation-name: fly-cycle;
                    animation-duration: 1s;
                    animation-delay: -0.5s;
                    animation-timing-function: steps(10);
                    animation-iteration-count: infinite;
                }

                .bird-container {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    will-change: transform;
                    }

                @keyframes fly-cycle {
                    
                    100% {
                    background-position: -3600px 0;
                    }
                    
                }
            `}</style>
        </div>
    );
};

export default Leaves;
