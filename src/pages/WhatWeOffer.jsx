import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const WhatWeOffer = () => {
  const images = [
    "https://theinternationalglamourproject.com/wp-content/uploads/2022/10/Pageant-carausal1.jpg",
    "https://theinternationalglamourproject.com/wp-content/uploads/2022/10/Pageant-carausal2.jpg",
    "https://theinternationalglamourproject.com/wp-content/uploads/2022/10/Pageant-carausal3.jpg",
    "https://theinternationalglamourproject.com/wp-content/uploads/2022/10/Pageant-carausal4.jpg",
    "https://theinternationalglamourproject.com/wp-content/uploads/2022/10/Pageant-carausal5.jpg",
  ];

  return (
    <div className="w-screen py-12 px-4 md:px-16 max-w-full" style={{ background: "#f2f2f4" }}>
      {/* Title Section */}
      <div className="text-center">
        <h3 className="text-gray-500 uppercase tracking-wider text-sm barlow">What We Offer</h3>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mt-2 barlow">
          TIGP<sup>®️</sup> <span className="uppercase">The International Pageant</span>
        </h1>
      </div>

      {/* Content Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <img
            src="https://theinternationalglamourproject.com/wp-content/uploads/2022/10/Pageant-cove2.jpg"
            alt="Group Photo"
            className="rounded-lg w-full max-w-md h-48 object-cover"
          />
          <div className="grid grid-cols-2 gap-4">
            <img
              src="http://theinternationalglamourproject.com/wp-content/uploads/2022/10/Pageant-cover3.jpg"
              alt="Training Session"
              className="rounded-lg w-full max-w-xs h-40 object-cover"
            />
            <img
              src="http://theinternationalglamourproject.com/wp-content/uploads/2022/10/Pageant-cover1.jpg"
              alt="Pageant Participants"
              className="rounded-lg w-full max-w-xs h-40 object-cover"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="flex space-x-4 items-start">
            <span className="text-2xl">🎓</span>
            <div className="">
              <h3 className="text-lg font-bold">Training</h3>
              <p className="text-gray-700 text-sm leading-relaxed poppins">
                The International Glamour Project® Teen I Miss I Mrs India offers
                Professional training, Model Photoshoots, Brand Endorsements to the
                participants which includes in-depth learning and hands-on experience for
                all 3 categories – Teen, Miss & Mrs.
              </p>
            </div>
          </div>
          <div className="flex space-x-4 items-start">
            <span className="text-2xl">🏆</span>
            <div className="">
              <h3 className="text-lg font-bold">Opportunity</h3>
              <p className="text-gray-700 text-sm leading-relaxed poppins">
                TIGP® Teen I Miss I Mrs India provides a prestigious opportunity to win
                the crown and represent India or your country (for International
                Delegates) on the International Platform in USA.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              autoPlay={true}
              showThumbs={false}
              className="w-full max-w-sm"
            >
              {images.map((item, index) => (
                <div key={index}>
                  <img
                    src={item}
                    alt={`Slide ${index + 1}`}
                    className="rounded-lg border-2 border-gray-300"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      {/* Register Button */}
      <div className="mt-8 text-center">
      <a href="http://theinternationalglamourproject.com/press-media/" className="button style-1 btn-lit mode-1" data-wow-delay=".5s"><span>REGISTER NOW</span></a>
      </div>
    </div>
  );
};

export default WhatWeOffer;
