import React from 'react'
import './Clever.css'

function Clever(props) {
  return (
    <div className='clever-image' style={{backgroundImage: `url(${props.gif})`}}>
        
    </div>
  )
}

export default Clever
