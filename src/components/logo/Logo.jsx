import * as React from "react";
import './Logo.css'

const Logo = (props) => {
  return (
    <svg viewBox='0 0 660 100' preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g>
    <title>Layer 1</title>
    <path stroke={props.colorImg} d="m3.25001,3.33334c0,0 13.5,46.66666 13.41667,46.5c0.08333,0.16667 -13.25,46.83333 -13.33333,46.66666c0.08333,0.16666 46.74999,-13.16667 46.66666,-13.33333c0.08333,0.16666 46.74999,13.5 46.74999,13.5c0,0 -13.5,-46.66666 -13.58332,-46.83333c0.08333,0.16667 13.58332,-46.5 13.58332,-46.5c0,0 -46.66666,13.33333 -46.74999,13.16667c0.08333,0.16667 -46.75,-13.16667 -46.75,-13.16667z" strokeOpacity="null" fill={props.colorImg}/>
    <text fontWeight="bold" stroke={props.colorImg} transform="matrix(1.2439787219974896,0,0,1.2434585471156225,-69.93682715134847,-11.573217067057122) " xmlSpace="preserve" textAnchor="start" fontFamily="Helvetica, Arial, sans-serif" fontSize={100} y={84.15087} x={143.49595} fillOpacity="null" strokeOpacity="null" strokeWidth={0} fill={props.colorImg}>Positivus</text>
    </g>
    </svg>
  );
};

export default Logo;
