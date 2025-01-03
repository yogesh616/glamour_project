import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const BrandEndorsements = () => {

  const images = [
    'https://theinternationalglamourproject.com/wp-content/uploads/2022/10/BRAND-ENDORSEMENT-carausalClovia1-1.jpg',
    'https://theinternationalglamourproject.com/wp-content/uploads/2022/10/BRAND-ENDORSEMENT-carausalClovia2.jpg',
    'https://theinternationalglamourproject.com/wp-content/uploads/2022/10/BRAND-ENDORSEMENT-carausalClovia3.jpg',
    'https://theinternationalglamourproject.com/wp-content/uploads/2022/10/BRAND-ENDORSEMENT-carausalMax-Protein1.jpg',
    'https://theinternationalglamourproject.com/wp-content/uploads/2022/10/BRAND-ENDORSEMENT-carausalMax-Protein2.jpg',
    'https://theinternationalglamourproject.com/wp-content/uploads/2022/10/BRAND-ENDORSEMENT-carausalMax-Protein3.jpg',
    'https://theinternationalglamourproject.com/wp-content/uploads/2022/10/BRAND-ENDORSEMENT-carausalTrove-labe2.jpg',
    'https://theinternationalglamourproject.com/wp-content/uploads/2022/10/BRAND-ENDORSEMENT-carausalTrove-label1.jpg',
    'https://theinternationalglamourproject.com/wp-content/uploads/2022/10/BRAND-ENDORSEMENT-carausalTrove-labe3.jpg',
    'https://theinternationalglamourproject.com/wp-content/uploads/2022/10/BRAND-ENDORSEMENT-carausal-AARI1-1.jpg',
    'https://theinternationalglamourproject.com/wp-content/uploads/2022/10/BRAND-ENDORSEMENT-carausalAARI2-1.jpg',
    'https://theinternationalglamourproject.com/wp-content/uploads/2022/10/BRAND-ENDORSEMENT-carausalAARI3-1.jpg',
    'https://theinternationalglamourproject.com/wp-content/uploads/2022/10/BRAND-ENDORSEMENT-carausalBaggit1-1.jpg',
    'https://theinternationalglamourproject.com/wp-content/uploads/2022/10/BRAND-ENDORSEMENT-carausalBaggit2-1.jpg',
    'https://theinternationalglamourproject.com/wp-content/uploads/2022/10/BRAND-ENDORSEMENT-carausalBaggit3-1.jpg',
     


  ]

  return (
    <div className="w-screen py-12 px-4 md:px-16 max-w-full" style={{background: '#f2f2f4'}}>
      {/* Title Section */}
      <div className="text-left">
        <h3 className="text-gray-500 uppercase tracking-wider text-sm">What We Offer</h3>
        <h1 className="text-4xl font-bold text-gray-900 mt-2 uppercase">
        Brand Endorsements

        </h1>
      </div>

      {/* Content Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="p-4 flex items-center gap-1"> 
          <div className="show">
          <img
            src="http://theinternationalglamourproject.com/wp-content/uploads/2022/10/BRAND-ENDORSEMENT-cover3.jpg"
            alt="Group Photo"
            className="rounded-sm min-w-56 h-36 object-cover"
          />
          </div>
         <div className="w-80 hide">
         <img
            src="http://theinternationalglamourproject.com/wp-content/uploads/2022/10/BRAND-ENDORSEMENT-cover1.jpg"
            alt="Training Session"
            className="rounded-lg sm:w-80 h-56  object-cover"
          />
          <img
            src="http://theinternationalglamourproject.com/wp-content/uploads/2022/10/BRAND-ENDORSEMENT-cover2.jpg"
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
              We at The Glam Talent Teen I Miss I Mrs India offer multiple opportunities to our participants.
               In the world of glamour, influence carries great weightage.
              </p>
            </div>
          </div>
          <div className="flex space-x-4 items-start">
            <span className="text-2xl">🏆</span>
            <div className="w-96">
              <h3 className="text-lg font-bold">Opportunity</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
              Our participants get a chance to collaborate and do endorsement deals with various brands
               including L’Oréal , Baggit , Trove Label and many more.
              </p>
            </div>
          </div>
          <div className="flex space-x-4 items-start">
          <div className="w-1/2 flex items-center justify-center">
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
      <a href="http://theinternationalglamourproject.com/press-media/" className="button style-1 btn-lit mode-1" data-wow-delay=".5s"><span>Know more</span></a>
      </div>
    </div>
  );
};

export default BrandEndorsements;
