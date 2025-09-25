import React from 'react'
import './Sun.css'

import SunSvg from './image-sun/Sun-svg'

import SunElement1 from './image-sun/s-el-1'
import SunElement2 from './image-sun/s-el-2'

function Sun() {
  return (
    <div className="Sun-container-1">
        <div className="Sun-container-2">
            <div className="sun-block">
                    <SunSvg className='sun-svg' />
                    <SunElement1 className='sun-element-1' />
                    <SunElement2 className='sun-element-2' />
            </div>
        </div>
    </div>
  )
}

export default Sun
