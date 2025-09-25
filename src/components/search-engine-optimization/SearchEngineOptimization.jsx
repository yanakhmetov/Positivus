import React from 'react'
import './SearchEngineOptimization.css'

import Path1 from './image-seo/path-1.jsx'
import Path2 from './image-seo/path-2.jsx'
import Path3 from './image-seo/path-3.jsx'

import Ball1 from './image-seo/ball-1.jsx'
import Ball2 from './image-seo/ball-2.jsx'
import Ball3 from './image-seo/ball-3.jsx'

import Spark from './image-seo/spark.jsx'
import Search from './image-seo/search.jsx'

import WhiteStar from './image-seo/white_star.jsx'
import BlackStar from './image-seo/black-star.jsx'

import ShiningStar from './image-seo/shining-star.jsx'
import Gear from './image-seo/gear.jsx'

import Smile from './image-seo/smile.jsx'

export default function SearchEngineOptimization() {

    return (
        <div className='SearchEngineOptimization-container-1'>
            <div className='SearchEngineOptimization-container-2'>
                <div className='search-engine-optimization'>

                    <Path1 className='paths-seo' />
                    <Path2 className='paths-seo' />
                    <Path3 className='paths-seo' />

                    <Ball1 className='balls-seo ball-seo-settings' />
                    <Ball2 className='balls-seo ball-seo-settings' />
                    <Ball3 className='balls-seo ball-seo-settings' />


                    <Spark className='spark-seo spark-seo-1' />
                    <Spark className='spark-seo spark-seo-2' />
                    <Spark className='spark-seo spark-seo-3' />

                    <Search className='search-seo' />

                    <BlackStar className='black-star-seo' />
                    <WhiteStar className='white-star-seo' />

                    <ShiningStar className='shining-star-seo-one shining-star-seo' />
                    <ShiningStar className='shining-star-seo-two shining-star-seo' />
                    <ShiningStar className='shining-star-seo-three shining-star-seo' />

                    <Gear className='gear-seo' />

                    <Smile className='smile-seo' />
                </div>
            </div>
        </div>
    )
}
