import React, {useRef, useEffect, useState} from 'react';

const Leaves = (props) => {
    const [displayState, setDisplayState] = useState('block');

    let elemRef = React.createRef();

    useEffect(() => {
        setTimeout(() => {
            setDisplayState('none')
        }, 4500)

        console.log(elemRef.current.offsetTopwebp)
    })


    return (
        <div className="set" id="leaf" ref={elemRef}>
            <div>
                <img
                    src="/images/leaf.png"
                    height="120px" width="120px"/>
            </div>

            <style jsx>{`
                .set {
                    position: absolute;
                    height: 50vh;
                    top: ${props.top};
                    left: ${props.left};
                    display: ${displayState}
                }
                
                .set div {
                    position: absolute;
                    display: block;
                }
                
                .set div:nth-child(1) {
                    left: 60%;
                    animation: animate 5s linear; 
                }
                
                @keyframes animate {
                    0%
                    {
                        top: -10%;
                        opacity: 0;
                        transform: translateX(30px) rotate(0deg)
                    }
                    10%
                    {
                        opacity: 1;
                    }
                    20%
                    {
                        transform: translateX(-20px) rotate(45deg)
                    }
                    40%
                    {
                        transform: translateX(-30px) rotate(90deg)
                    }
                    60%
                    {
                        transform: translateX(20px) rotate(135deg)
                    }
                    80%
                    {
                        transform: translateX(-30px) rotate(180deg)
                    }
                    100%
                    {
                        top: 110%;
                        transform: translateX(-20px) rotate(225deg)
                    }
                }
            `}</style>
        </div>
    )
}

export default Leaves;

