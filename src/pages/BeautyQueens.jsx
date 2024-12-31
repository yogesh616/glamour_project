import React, { useState } from "react";

const BeautyQueens = () => {
  const [sliderPositions, setSliderPositions] = useState({}); // Track slider positions individually

  const handleSliderChange = (e, id) => {
    setSliderPositions((prev) => ({
      ...prev,
      [id]: e.target.value,
    }));
  };

  const queens = [
    {
      id: 1,
      before: "https://theinternationalglamourproject.com/wp-content/uploads/2022/11/Juie-Pagnis-1.jpg",
      after: "https://theinternationalglamourproject.com/wp-content/uploads/2022/11/Juie-Pagnis-2.jpg",
    },
    {
      id: 2,
      before: "https://theinternationalglamourproject.com/wp-content/uploads/2022/11/Rhia-Merchant1.jpg",
      after: "https://theinternationalglamourproject.com/wp-content/uploads/2022/11/Rhia-Merchant2.jpg",
    },
    {
      id: 3,
      before: "https://theinternationalglamourproject.com/wp-content/uploads/2022/11/Shilpa-Adam1.jpg",
      after: "https://theinternationalglamourproject.com/wp-content/uploads/2022/11/Shilpa-Adam2.jpg",
    },
    {
      id: 4,
      before: "https://theinternationalglamourproject.com/wp-content/uploads/2022/11/Uttara-Iyer1.jpg",
      after: "https://theinternationalglamourproject.com/wp-content/uploads/2022/11/Uttara-Iyer2.jpg",
    },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 w-full">
      <h3 className="text-center text-gray-500 font-medium uppercase">
        Success Story
      </h3>
      <h1 className="text-center text-4xl font-extrabold text-gray-900 mt-2 uppercase">
        Of Our Beauty Queens
      </h1>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {queens.map((queen) => (
          <div key={queen.id} className="relative group">
            <div className="relative w-full h-80 sm:h-96 overflow-hidden rounded-lg">
              {/* Before Image */}
              <img
                src={queen.before}
                alt="Before"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              {/* After Image */}
              <div
                className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"
                style={{
                  clipPath: `inset(0 ${100 - (sliderPositions[queen.id] || 50)}% 0 0)`,
                }}
              >
                <img
                  src={queen.after}
                  alt="After"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              {/* Slider */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPositions[queen.id] || 50} // Default to 50 if no value exists
                onChange={(e) => handleSliderChange(e, queen.id)}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 appearance-none cursor-pointer h-1 bg-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeautyQueens;
