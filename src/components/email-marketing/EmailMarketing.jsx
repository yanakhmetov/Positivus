import React from 'react'
import './EmailMarketing.css'

import PathForLetersAndStar from './image-em/PathForLetersAndStar'
import Star from './image-em/Star'
import Letter from './image-em/Letter'

function EmailMarketing() {
  return (
    <div className='EmailMarketing-container-1'>
      <div className='EmailMarketing-container-2'>
        <div className='email-marketing'>
          <PathForLetersAndStar className='path-em' />
          <Star className='star-em s-em-1' />
          <Star className='star-em s-em-2' />
          <Star className='star-em s-em-3' />
          <Star className='star-em s-em-4' />
          <Star className='star-em s-em-5' />
          <Star className='star-em s-em-6' />

          <Letter className='letter-em l-em-1' />
          <Letter className='letter-em l-em-2' />
          <Letter className='letter-em l-em-3' />
        </div>
      </div>
    </div>
  )
}

export default EmailMarketing
