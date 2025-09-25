import * as React from "react";

const Heart = (props) => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" {...props}>
    <g>
    <title>background</title>
    <rect fill="none" height={102} width={102} y={-1} x={-1}/>
    <g display="none" overflow="visible" y={0} x={0} height="100%" width="100%">
    <rect fill="url(#gridpattern)" strokeWidth={0} y={0} x={0} height="100%" width="100%"/>
    </g>
    </g>
    <g>
    <title>Layer 1</title>
    <path stroke="#000000" d="m36.21062,80.30706c-24.77903,-18.42268 -33.63852,-30.07653 -33.71032,-44.34296c-0.06548,-13.0056 10.87111,-25.55791 22.20495,-25.48553c5.65961,0.03622 17.79985,4.82299 22.09875,8.71344c2.16604,1.96023 3.19198,1.76693 8.01443,-1.51001c13.12468,-8.91843 25.94107,-9.10563 34.24152,-0.50009c13.26589,13.75346 10.85069,30.17761 -6.94288,47.21389c-9.46009,9.05747 -30.11884,25.12594 -32.30366,25.12594c-0.66481,0 -6.78606,-4.14662 -13.60278,-9.21468l0,0z" fillOpacity="null" strokeOpacity="null" strokeWidth={1.5} fill="#000000"/>
    </g>
    </svg>
  );
};

export default Heart;
