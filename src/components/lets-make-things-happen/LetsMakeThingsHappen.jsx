import React from 'react'
import './LetsMakeThingsHappen.css'

import PathLmth from './image-lmth/PathLmth.jsx'
import Human from './image-lmth/Human.jsx'
import Icon1 from './image-lmth/Icon-1.jsx'
import Icon2 from './image-lmth/Icon-2.jsx'
import Icon3 from './image-lmth/Icon-3.jsx'
import StarLmth from './image-lmth/Star-lmth.jsx'


function LetsMakeThingsHappen() {
  return (
    <div className='LetsMakeThingsHappen-container-1'>
      <div className="LetsMakeThingsHappen-container-2">
            <div className="lets-make-things-happen">
                <PathLmth className='path-lmth' />
                <Human className='human-lmth' />
                <Icon1 className='icon-1' />
                <Icon2 className='icon-2' />
                <Icon3 className='icon-3' />
                <StarLmth className='star-lmth-1' />
                <StarLmth className='star-lmth-2' />
                <StarLmth className='star-lmth-3' />
            </div>
      </div>
    </div>
  )
}

export default LetsMakeThingsHappen
