import React, {useRef, useEffect, useState} from 'react';
import {TweenMax, TwenLite} from 'gsap';
import ReactDOMServer from 'react-dom/server';

const Leaves = () => {
    return (
        <div className="set">
            <div>
                <img
                    src="http://www.clipartqueen.com/image-files/red-lobed-fall-clipart-leaf.png"
                    height="120px" width="120px"/>
            </div>

            <style jsx>{`
                .set {
                    position: absolute;
                }
                
                .set div {
                    position: absolute;
                    display: block;
                }
                
                .set div:nth-child(1) {
                    left: 60%;
                    animation: animate 10s linear infinite; 
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


// const Leaves = () => {
//     let animElement = useRef(null)
//     const [leaves, setLeaves] = useState([])
//
//
//     const funcR = (min,max) => min+Math.random()*(max-min);
//
//     const animm = (elm) => {
//         TweenMax.to(elm,funcR(6,15),{y:window.innerHeight+100,ease:Linear.easeNone,repeat:-1,delay:-15});
//         TweenMax.to(elm,funcR(4,8),{x:'+=100',rotationZ:funcR(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
//         TweenMax.to(elm,funcR(2,8),{rotationX:funcR(0,360),rotationY:funcR(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
//     };
//
//     useEffect(() => {
//         TweenLite.set(animElement, {perspective: 600})
//
//         let total = 30;
//         const leavesArr = [];
//
//         for (let i=0; i<total; i++){
//             var Div = ReactDOMServer.renderToStaticMarkup(<div />)
//             TweenLite.set(Div,{attr:{class:'dot'},x: funcR(0,window.innerWidth),y: funcR(-200,-150),z: funcR(-200,200)});
//             animm(Div);
//             leavesArr.push(Div);
//         }
//
//         setLeaves(leavesArr);
//     })
//
//     return (
//         <div ref={element => {animElement = element}} >
//             {leaves.map((item, i) => {
//                 return item
//             })}
//         </div>
//     );
// };

export default Leaves;

