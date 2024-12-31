import React, { useState } from "react";
import BeforeAfter from "./BeforeAfter";


const BeautyQueens = () => {
 
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
      <h3 className="text-center text-gray-500 font-medium uppercase barlow">
        Success Story
      </h3>
      <h1 className="text-center text-4xl font-extrabold text-gray-900 mt-2 uppercase barlow">
        Of Our Beauty Queens
      </h1>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {queens.map((queen) => (
         <BeforeAfter key={queen.id} beforeImage={queen.before} afterImage={queen.after} />
        ))}
      </div>
    </div>
  );
};

export default BeautyQueens;
