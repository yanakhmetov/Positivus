import React from 'react';
import whiteStar from './image-cca/white_star.svg'
import blackStar from './image-cca/black-star.svg'
import whiteBall from './image-cca/white-ball.svg'
import gear from './image-cca/gear.svg'
import './ContentCreationAnimation.css'

const ContentCreationAnimation = () => {
  return (
    <div className='ContentCreationAnimation-container-1'>
      <div className='ContentCreationAnimation-container-2'>
        <div className='kirpichi'>

          <div className="kirpich-one kp_1">
            <div className="kirpich-balls">
              <div className='kb'></div>
              <div className='kb'></div>
              <div className='kb'></div>
            </div>
            <div className="kirpich-squire"></div>
          </div>

          <div className="kirpich-one kp_2">
            <div className="kirpich-balls">
              <div className='kb kb-1'></div>
              <div className='kb kb-1'></div>
              <div className='kb kb-1'></div>
            </div>
            <div className="kirpich-squire ks-1"></div>
          </div>

          <div className="kirpich-two an-name">
            <div className="kirpich-balls kb-2">
              <div className='kb'></div>
              <div className='kb'></div>
              <div className='kb'></div>
            </div>
            <div className="kirpich-block">
              <div className="kirpich-block-one"></div>
              <div className="kirpich-block-two"></div>
            </div>
          </div>

          <div className="kirpich-two kp-t-2">
            <div className="kirpich-balls kb-2">
              <div className='kb kb-1'></div>
              <div className='kb kb-1'></div>
              <div className='kb kb-1'></div>
            </div>
            <div className="kirpich-block kp-b-t-2">
              <div className="kirpich-block-two kpbt"></div>
            </div>
          </div>

          <div className="kirpich-one kp_3">
            <div className="kirpich-balls">
              <div className='kb'></div>
              <div className='kb'></div>
              <div className='kb'></div>
            </div>
            <div className="kirpich-squire"></div>
          </div>

          <div className="kirpich-one kp_4">
            <div className="kirpich-balls">
              <div className='kb kb-1'></div>
              <div className='kb kb-1'></div>
              <div className='kb kb-1'></div>
            </div>
            <div className="kirpich-squire ks-1"></div>
          </div>

          <img src={whiteStar} className='white-star-cca' />

          <img src={blackStar} className='black-star-cca' />

          <img src={whiteBall} className='white-ball-cca' />
          <img src={gear} className='gear-cca' />
        </div>
      </div>
    </div >
  );
};

export default ContentCreationAnimation;
