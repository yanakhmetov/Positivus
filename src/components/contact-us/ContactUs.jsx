import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import './ContactUs.css'

import Sun from '../sun/Sun';

const ContactUs = () => {
  return (
    <section id='contacts-us' className="container contact-us-block">

      <div className="contact-us-section">
        <SectionHeading
          heading="Contact Us"
          text="Connect with Us: Let's Discuss Your Digital Marketing Needs"
        />
      </div>

      <div className="bg-[#F3F3F3] rounded-3xl flex flex-col lg:flex-row justify-between items-center px-10 lg:pe-0 gap-12 contact-us-form">
        {/* Left: Form */}
        <div className="w-full lg:w-1/2">
          <form className="space-y-8 px-0 py-10 md:px-8">
            {/* Custom Radio Buttons */}
            <div className="flex gap-10 justify-center md:justify-start mb-6">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="contactType"
                  id="say-hi"
                  className="appearance-none w-5 h-5 border-2 border-black rounded-full checked:bg-[#B9FF66] checked:border-black"
                  defaultChecked
                />
                <label htmlFor="say-hi" className="text-black cursor-pointer">
                  Say Hi
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="contactType"
                  id="quote"
                  className="appearance-none w-5 h-5 border-2 border-black rounded-full checked:bg-[#B9FF66] checked:border-black"
                />
                <label htmlFor="quote" className="text-black cursor-pointer">
                  Get a Quote
                </label>
              </div>
            </div>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block mb-1 text-black" style={{ display: 'none' }}>
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full border border-black rounded-xl px-4 py-2 bg-white placeholder-gray-400"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-1 text-black" style={{ display: 'none' }}>
                Email*
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full border border-black rounded-xl px-4 py-2 bg-white placeholder-gray-400"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block mb-1 text-black" style={{ display: 'none' }}>
                Message*
              </label>
              <textarea
                id="message"
                placeholder="Message"
                rows="5"
                className="w-full border resize-none border-black rounded-xl px-4 py-2 bg-white placeholder-gray-400"
                required
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#191A23] text-white py-3 rounded-xl hover:bg-black transition-all button-contact-us"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-1/2 flex justify-end items-center pr-0 sun-contact">
          <Sun/>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
