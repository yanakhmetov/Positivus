import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import './Services.css'

import { MdOutlineArrowOutward } from 'react-icons/md';



import ContentCreationAnimation from '../content-creation/ContentCreationAnimation'
import SearchEngineOptimization from '../search-engine-optimization/SearchEngineOptimization';
import PayPerClickAdvertising from '../pay-per-click-advertising/PayPerClickAdvertising';
import EmailMarketing from '../email-marketing/EmailMarketing';
import SocialMediaMarketing from '../social-media-marketing/SocialMediaMarketing';
import AnalyticsAndTracking from '../analytics-and-tracking/AnalyticsAndTracking';
import LetsMakeThingsHappen from '../lets-make-things-happen/LetsMakeThingsHappen';

const Services = () => {
  

  return (
    <section id="services" className="container services-block">

      <SectionHeading
        classNames="section-heading-service"
        heading="Services"
        text="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />

        <div className='cards-services-block'>

          <div className="card-services bg-card-1">
            <div className="card-text-block">
              <div className="card-text-h2 bg-h2-1">
                <div><h2>Search engine</h2></div>
                <div><h2>optimization</h2></div>
              </div>
              <div className="card-learn-more">
                <MdOutlineArrowOutward className='molao-1' />
                <p>Learn more</p>
              </div>
            </div>
            <SearchEngineOptimization />
          </div>

          <div className="card-services bg-card-2">
            <div className="card-text-block">
              <div className="card-text-h2 bg-h2-2">
                <div><h2>Pay-per-click</h2></div>
                <div><h2>advertising</h2></div>
              </div>
              <div className="card-learn-more">
                <MdOutlineArrowOutward className='molao-1' />
                <p>Learn more</p>
              </div>
            </div>
            <PayPerClickAdvertising />
          </div>

          <div className="card-services bg-card-3 ">
            <div className="card-text-block">
              <div className="card-text-h2 bg-h2-1">
                <div><h2>Social Media</h2></div>
                <div><h2>Marketing</h2></div>
              </div>
              <div className="card-learn-more">
                <MdOutlineArrowOutward className='molao-2' />
                <p className='card-color-text'>Learn more</p>
              </div>
            </div>
            <SocialMediaMarketing />
          </div>

          <div className="card-services bg-card-1">
            <div className="card-text-block">
              <div className="card-text-h2 bg-h2-1">
                <div><h2>Email</h2></div>
                <div><h2>Marketing</h2></div>
              </div>
              <div className="card-learn-more">
                <MdOutlineArrowOutward className='molao-1' />
                <p>Learn more</p>
              </div>
            </div>
            <EmailMarketing />
          </div>

          <div className="card-services bg-card-2">
            <div className="card-text-block">
              <div className="card-text-h2 bg-h2-2">
                <div><h2>Content</h2></div>
                <div><h2>Creation</h2></div>
              </div>
              <div className="card-learn-more">
                <MdOutlineArrowOutward className='molao-1' />
                <p>Learn more</p>
              </div>
            </div>
            <ContentCreationAnimation />
          </div>

          <div className="card-services bg-card-3 ">
            <div className="card-text-block">
              <div className="card-text-h2 bg-h2-1">
                <div><h2>Analytics and</h2></div>
                <div><h2>Tracking</h2></div>
              </div>
              <div className="card-learn-more">
                <MdOutlineArrowOutward className='molao-2' />
                <p className='card-color-text'>Learn more</p>
              </div>
            </div>
            <AnalyticsAndTracking />
          </div>
        </div>

      
      

      <div className="services-bottom-blocks">
          <div className="services-bottom-block-1">
            <h3>Let’s make things happen</h3>
            <p>
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <Button
              text="Get your free proposal"
            />
          </div>
            <LetsMakeThingsHappen />
        </div>
    </section>
  );
};

export default Services;
