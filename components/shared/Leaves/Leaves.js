import React, {useRef, useEffect, useState} from 'react';
import {TweenMax, TwenLite} from 'gsap';


const Leaves = () => {
    let animElement = useRef(null)
    const [leaves, setLeaves] = useState([])

    const funcR = (min,max) => min+Math.random()*(max-min);

    useEffect(() => {
        TweenLite.set(animElement, {perspective: 600})

        let total = 30;
        const leavesArr = [];
        for (i=0; i<total; i++){
            var Div = document.createElement('div');
            TweenLite.set(Div,{attr:{class:'dot'},x: funcR(0,w),y: funcR(-200,-150),z: funcR(-200,200)});
            leavesArr.push(Div);
            // animm(Div);
        }
        setLeaves(leavesArr);
    })

    return (
        <div ref={element => {animElement = element}} >
            {leavesArr.map((item, i) => {
                return item
            })}
        </div>
    );
};

export default Leaves;

