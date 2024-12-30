import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const LeaderShip = () => {

  const images = [
   'https://theinternationalglamourproject.com/wp-content/uploads/2022/10/Leadership-carausal3.jpg',
   'https://theinternationalglamourproject.com/wp-content/uploads/2022/10/Leadership-carausal4.jpg',
   'https://theinternationalglamourproject.com/wp-content/uploads/2022/10/Leadership-carausal1.jpg',
   'https://theinternationalglamourproject.com/wp-content/uploads/2022/10/Leadership-carausal2.jpg'
  ]

  return (
    <div className=" py-12 px-80" style={{background: '#f2f2f4'}}>
      {/* Title Section */}
      <div className="text-left">
        <h3 className="text-gray-500 uppercase tracking-wider text-sm">What We Offer</h3>
        <h1 className="text-4xl font-bold text-gray-900 mt-2 uppercase">
        TIGP®️ Leadership
        </h1>
      </div>

      {/* Content Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="p-4 flex items-center gap-1"> 
          <div className="show">
          <img
            src="http://theinternationalglamourproject.com/wp-content/uploads/2022/10/Leadership-cover2.jpg"
            alt="Group Photo"
            className="rounded-sm min-w-56 h-36 object-cover"
          />
          </div>
         <div className="w-80 hide">
         <img
            src="http://theinternationalglamourproject.com/wp-content/uploads/2022/10/Leadership-cover1.jpg"
            alt="Training Session"
            className="rounded-lg sm:w-80 h-56  object-cover"
          />
          <img
            src="http://theinternationalglamourproject.com/wp-content/uploads/2022/10/Leadership-cover3.jpg"
            alt="Pageant Participants"
            className="rounded-lg sm:w-72 h-auto object-cover"
          />
         </div>
          
        </div>

        {/* Right Column */}
       
        <div className="space-y-6 flex flex-col items-s">
          <div className="flex space-x-4 items-start">
            <span className="text-2xl">🎓</span>
            <div className="w-96">
              <h3 className="text-lg font-bold">Training</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
              TIGP®️ ensures overall growth of our participants.
               Our mentors individually understand all participants
                and make sure they excel not only in modelling
               and acting but also becoming social workers,
                activists and public speakers are trained by us as well.
              </p>
            </div>
          </div>
          <div className="flex space-x-4 items-start">
            <span className="text-2xl">🏆</span>
            <div className="w-96">
              <h3 className="text-lg font-bold">Opportunity</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
              We respect, encourage and promote all
               domains equally and help each and every woman become a better leader.
              </p>
            </div>
          </div>
          <div className="flex space-x-4 items-start">
          <div className="w-full flex items-center justify-center">
            <div className="w-44  text-center mx-auto flex items-center justify-center">
                <Carousel showArrows={true} infiniteLoop={true} autoPlay={true}>
                    {images.map((item, index) => (
                        <div
                            key={index}
                            className="flex w-full flex-col items-center justify-center border rounded-lg p-6 shadow-lg"
                        >
                            <img
                                src={item}
                                alt={`Slide ${index + 1}`}
                                className=" border-2 border-gray-300 mb-4"
                                style={{ width: "173px", height: "173px" }}
                            />
                            
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      

      {/* Register Button */}
      <div className="mt-8 text-center">
      <button
         className="uppercase px-8 z-30 py-4 bg-white rounded-md text-black relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-gray-950 hover:text-white after:left-0 overflow-hidden after:top-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700  text-2xl"
          >
              register now
             </button>
      </div>
    </div>
  );
};

export default LeaderShip;
