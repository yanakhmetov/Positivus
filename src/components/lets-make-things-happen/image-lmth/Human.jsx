import * as React from "react";

const Human = (props) => {
  return (
    <svg width={400} height={400} viewBox="0 0 402 402" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g>
    <title>Layer 1</title>
    <ellipse ry={46.53846} rx={46.53846} cy={154.57933} cx={170} strokeWidth={1.5} stroke="#000" fill="#000000"/>
    <ellipse className="human-eyes-lmth" ry={16.92308} rx={9.23077} cy={141.11779} cx={155} strokeOpacity="null" strokeWidth={1.5} stroke="#000" fill="#ffffff"/>
    <ellipse className="human-eyes-lmth" ry={16.92308} rx={9.23077} cy={141.11779} cx={183.46154} strokeOpacity="null" strokeWidth={1.5} stroke="#000" fill="#ffffff"/>
    </g>
    </svg>
  );
};

export default Human;
