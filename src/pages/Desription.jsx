import React from "react";
import "./desc.css";

function Description() {
  return (
    <div className=" h-auto flex flex-col items-center justify-center bg-gray-100 py-16" >
      <div className="text-center px-4">
        <h3 className="text-sm font-medium text-gray-500 tracking-wide uppercase">
          Guts | Glamour | Glory
        </h3>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-black mt-4 uppercase">
          The International Glamour Project®
          <br />
          <span className="block">Teen | Miss | Mrs India</span>
        </h1>
        <p className="text-gray-600 mt-6 mx-auto max-w-2xl text-sm sm:text-base leading-relaxed">
          The International Glamour Project® Teen | Miss | Mrs is India’s
          biggest platform that works towards creating an ‘Ecosystem for Women
          Empowerment’ through Pageantry. This journey of Guts, Glamour & Glory
          will entitle you to represent your country in the categories of Teen,
          Miss & Mrs India in the 3 most prestigious International Pageants,
          based in the United States of America.
        </p>
        <div className="mt-8">
        <a href="http://theinternationalglamourproject.com/press-media/" className="button style-1 btn-lit mode-1" data-wow-delay=".5s">

		<span>Know more</span>
	</a>

        </div>
        <div className="mt-8 flex justify-center gap-4">
          <button className="flex items-center px-6 py-3 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md transition duration-300">
            <i className="fab fa-apple mr-2"></i>
            iOS App
          </button>
          <button className="flex items-center px-6 py-3 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md transition duration-300">
            <i className="fab fa-android mr-2"></i>
            Android App
          </button>
        </div>
      </div>
    </div>
  );
}

export default Description;
