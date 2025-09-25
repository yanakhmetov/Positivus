import p1 from './Rupor_images/1.png'
import p2 from './Rupor_images/2.png'
import p3 from './Rupor_images/3.png'
import p4 from './Rupor_images/4.png'
import elipc from './Rupor_images/svg (3).svg'
import rupor from './Rupor_images/5.png'
import greenBoll from './Rupor_images/8.png'
import blackStar from './Rupor_images/6.png'
import './Rupor.css'


function Rupor() {
  return (
    <div className="Rupor-container-1">
      <div className="Rupor-container-2">
        <div className='rupor-block'>

          <div className='elipc'>
            <img className='el1 el-ob' src={elipc} />
            <img className='el2 el-ob' src={elipc} />
            <img className='el3 el-ob' src={elipc} />
          </div>

          <img className='rupor' src={rupor} />

          <div className='block'>
            <img className='motion-object p1' src={p1} />
            <img className='motion-object p2' src={p2} />
            <img className='motion-object p3' src={p3} />
            <img className='motion-object p4' src={p4} />
          </div>

          <div className='greenBall1'>
            <img className='greenBallBottom' src={greenBoll} />
            <img className='greenBallTop' src={greenBoll} />
          </div>

          <div className='blackStar'>
            <img className='blackStarBottom' src={blackStar} />
            <img className='blackStarTop' src={blackStar} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rupor
