import React from 'react';
import { FaPhone, FaEnvelope, FaUser } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="contact-page m-auto">
      <div className="mt-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-center font-normal uppercase text-black">
          Get in <span className="font-semibold">touch</span> with us
        </h1>
        <p className="text-sm md:text-base text-center -mb-12">
          We'd love to connect with you to learn more about what you have to say.
        </p>
      </div>
      <div className="contact-container flex flex-col md:flex-row justify-center m-24 p-9 gap-10 bg-blue-300 hover:bg-blue-900 hover:text-white rounded-sm">
        <div className="map-container flex-grow w-full md:w-1/2 mb-10 md:mb-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.197072884662!2d3.356257074185503!3d6.580315093413179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9212d5bf9a33%3A0xc2187ade5bb7d451!2sIsaac%20John%20St%2C%20Ikeja%20GRA%2C%20Ikeja%20101233%2C%20Lagos%2C%20Nigeria!5e1!3m2!1sen!2sus!4v1727512474300!5m2!1sen!2sus"
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-lg"
          />
        </div>
        <div className="form-container flex-grow w-full md:w-1/2">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold mb-2">
                Name
              </label>
              <div className="flex items-center">
                <FaUser className="text-blue-500 mr-2" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold mb-2">
                Email
              </label>
              <div className="flex items-center">
                <FaEnvelope className="text-blue-500 mr-2" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block font-semibold mb-2">
                Phone Number
              </label>
              <div className="flex items-center">
                <FaPhone className="text-blue-500 mr-2" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+234-802-081-7992"
                  required
                  className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div> 
            <div className="mt-6">
              <button type="submit" className="submit-button w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


    // <div className='h-screen w-full bg-blue-400 text-center flex flex-col justify-evenly px-16 py-16'>
    {/* <div className={smart.luap}>
        <h1 className={`${smart.smart} bg-gradient-to-br from via-red-700 to-green-600`}>Get in touch with us</h1>
    </div> */}
