import React from 'react'
import './PayPerClickAdvertising.css'

import Google from './image-ppca/Google.jsx'
import Yandex from './image-ppca/Yandex.jsx'
import Safari from './image-ppca/Safari.jsx'

import Mouse from './image-ppca/Mouse.jsx'
import Refresh from './image-ppca/Refresh.jsx'
import Elipses from './image-ppca/Elipses.jsx'

import Gear from './image-ppca/gear.jsx'


function PayPerClickAdvertising() {
  return (
    <div className='PayPerClickAdvertising-container-1'>
      <div className='PayPerClickAdvertising-container-2'>
        <div className='PayPerClickAdvertising'>

          <div className="sait-ppca">
            <div className="sait-ppca-block-1">
              <div className="sait-ppca-block-1-circle bg-color-circle-ppca-1"></div>
              <div className="sait-ppca-block-1-circle bg-color-circle-ppca-2"></div>
              <div className="sait-ppca-block-1-circle bg-color-circle-ppca-3"></div>
            </div>
            <div className="sait-ppca-block-2">
              <Google className='google-ppca' />
              <Yandex className='yandex-ppca' />
              <Safari className='safari-ppca' />
            </div>
          </div>
          <Mouse className='mouse-ppca' />
          <Refresh className='refresh-ppca-1' />
          <Refresh className='refresh-ppca-2' />
          <Refresh className='refresh-ppca-3' />

          <Elipses className='elipses-ppca' />
          <div className='elipses-star-ppca e-s-ppca-1'></div>
          <div className='elipses-star-ppca e-s-ppca-2'></div>
          <div className='elipses-star-ppca e-s-ppca-3'></div>
          <div className='elipses-star-ppca e-s-ppca-4'></div>
          <div className='elipses-star-ppca e-s-ppca-5'></div>
          <div className='elipses-star-ppca e-s-ppca-6'></div>
          <div className='elipses-star-ppca e-s-ppca-7'></div>
          <div className='elipses-star-ppca e-s-ppca-8'></div>
          <div className='elipses-star-ppca e-s-ppca-9'></div>

          <Gear className='gear-ppca' />
        </div>
      </div>
    </div>
  )
}

export default PayPerClickAdvertising


