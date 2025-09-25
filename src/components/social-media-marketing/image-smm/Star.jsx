import * as React from "react";

const Star = (props) => {
  return (
    <svg viewBox="0 0 102 102" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"{...props}>
    <g>
    <title>Layer 1</title>
    <path strokeWidth={0.1} stroke="#000000" className={props.starSmm} d="m49.9913,75.07566l-30.90624,22.4526l11.81423,-36.31936l-30.89929,-22.4526l38.19447,0.00696l10.15133,-31.22978l1.65594,-5.07219l11.79336,36.29501l38.2049,0l-30.9132,22.4526l11.81771,36.3298l-30.9132,-22.46304l0,0z" strokeOpacity="null"/>
    </g>
    </svg>
  );
};

export default Star;
