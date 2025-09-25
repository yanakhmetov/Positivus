import React from 'react'
import './SocialMediaMarketing.css'

import PhotoOne from './image-smm/PhotoOne.jsx'
import PhotoTwo from './image-smm/PhotoTwo.jsx'
import PhotoThree from './image-smm/PhotoThree.jsx'
import PhotoFour from './image-smm/PhotoFour.jsx'

import Star from './image-smm/Star.jsx'
import Heart from './image-smm/Heart.jsx'

function SocialMediaMarketing() {
    return (
        <div className='SocialMediaMarketing-container-1'>
            <div className='SocialMediaMarketing-container-2'>
                <div className='social-media-marketing'>
                    <div className="photos-block p-b-1">
                        <PhotoOne />
                    </div>
                    <div className="photos-block p-b-2">
                        <PhotoTwo />
                    </div>
                    <div className="photos-block p-b-3">
                        <PhotoThree />
                    </div>
                    <div className="photos-block p-b-4">
                        <PhotoFour />
                    </div>

                    <div className='heart-smm-container h-ssm-c-1'>
                        <Heart className='heart-smm' />
                        <div className='squire-heart-smm'></div>
                    </div>

                    <div className='heart-smm-container h-ssm-c-2'>
                        <Heart className='heart-smm' />
                        <div className='squire-heart-smm'></div>
                    </div>
                    <div className='heart-smm-container h-ssm-c-3'>
                        <Heart className='heart-smm' />
                        <div className='squire-heart-smm'></div>
                    </div>

                    <div className="star-smm-container">
                        <Star className='star-smm' starSmm='star-smm-1' />
                        <Star className='star-smm' starSmm='star-smm-2' />
                        <Star className='star-smm' starSmm='star-smm-3' />
                        <Star className='star-smm' starSmm='star-smm-4' />
                        <Star className='star-smm' starSmm='star-smm-5' />
                        <div className='star-squire-smm-block'></div>
                    </div>

                    <div className="three-balls-smm-block">
                        <div className="ball-smm-block b-smm-b-1"></div>
                        <div className="ball-smm-block b-smm-b-2"></div>
                        <div className="ball-smm-block b-smm-b-3"></div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SocialMediaMarketing
