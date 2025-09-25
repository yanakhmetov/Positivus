import React from 'react';

const SectionHeading = ({ heading, text }) => {
  return (
    <div>
      <div className="section-heading-service">
        <h1 className="section-heading-animation">
          {heading}
        </h1>
        <p className="max-w-2xl lg:max-w-xl mx-auto lg:mx-0">{text}</p>
      </div>
    </div>
  );
};

export default SectionHeading;
