import React from 'react'
import './Clever.css'
import FirstGif from './image-clever/FirstGif.gif'

function Clever(props) {
  return (
    <div className='clever-image' style={{backgroundImage: `url(${props.gif})`}}>
        {/* <img className='clever-image' src={FirstGif} alt="clever" /> */}
    </div>
  )
}

export default Clever
