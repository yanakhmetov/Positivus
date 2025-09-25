import React from 'react';
import Button from '../ui/Button';
import Rupor from '../rupor/Rupor';
import './Header.css'

const Header = () => {
  return (
    <header id='about-us' className="container header-block">
      {/* Left Section */}
      
        <div className="block-navigate-digital-book">
          <h1 className="block-navigate">
            Navigating the digital landscape for success
          </h1>
          <p className="block-our-digital">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <Button
            text="Book a consultation"
            className="button-book-header"
          />   
        </div>
  

        <Rupor className='rupor-header'/>
      
    </header>
  );
};

export default Header;
