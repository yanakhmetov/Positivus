import * as React from "react";

const Smile = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 420 420" preserveAspectRatio="xMidYMid meet">
    <g>
    <title>Layer 1</title>
    <ellipse className='smile-seo-settings' stroke="#000" ry={197} rx={197} cy={200} cx={200} strokeWidth={6} />
    <ellipse className="eyes-smile" ry={72.5} rx={31.5} cy={128.95313} cx={138} strokeOpacity="null" strokeWidth={1.5} stroke="#000" fill="#000000"/>
    <ellipse className="eyes-smile" ry={72.5} rx={31.5} cy={130.95313} cx={265} strokeOpacity="null" strokeWidth={1.5} stroke="#000" fill="#000000"/>
    <path stroke="#000" fillOpacity="null" strokeOpacity="null" strokeWidth={15} fill="none" transform="rotate(134 199.9982147216797,265.10858154296875)" d="m98.29772,161.65419c242.08452,-16.78887 201.11572,208.62914 200.30477,207.79989"/>
    </g>
    </svg>
  );
};

export default Smile;
