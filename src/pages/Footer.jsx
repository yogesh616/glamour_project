import React from "react";

function Footer() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-900 text-white py-8">
      {/* Main Footer Content */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center lg:items-start justify-between px-4 lg:px-8">
        {/* Left Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          <img
            className="w-40 md:w-48"
            src="https://theinternationalglamourproject.com/wp-content/uploads/2020/08/TIGP_logo_footer.png"
            alt="TIGP Logo"
          />
          <div className="text-sm space-y-1">
            <p>The International Glamour Project®️ is an Indo-US alliance that</p>
            <p>believes in creating an ‘Ecosystem for Women Empowerment’</p>
            <p>through Pageantry.</p>
          </div>
          <button className="uppercase w-40 h-10 border-2 border-white bg-transparent hover:bg-white hover:text-black transition-all duration-500">
            Contact Us
          </button>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center lg:items-end mt-8 lg:mt-0 space-y-6">
          {/* Logo Row */}
          <div className="flex items-center justify-center lg:justify-end gap-6 flex-wrap">
            <img
              className="w-20 lg:w-28 xl:w-32"
              src="https://theinternationalglamourproject.com/wp-content/uploads/2020/08/TIGP_footware-1170x739-2.png"
              alt="Footer Logo 1"
            />
            <img
              className="w-20 lg:w-28 xl:w-32"
              src="https://theinternationalglamourproject.com/wp-content/uploads/2020/08/TIGP_international-magazine-1170x739-2.png"
              alt="Footer Logo 2"
            />
            <img
              className="w-20 lg:w-28 xl:w-32"
              src="https://theinternationalglamourproject.com/wp-content/uploads/2020/08/Tigp-r-Couture-white-1170x698-2.png"
              alt="Footer Logo 3"
            />
            <img
              className="w-20 lg:w-28 xl:w-32"
              src="https://theinternationalglamourproject.com/wp-content/uploads/2020/08/logo_dreamandbelievefoundation-1.png"
              alt="Footer Logo 4"
            />
          </div>

          {/* App Buttons */}
          <div className="flex items-center justify-center lg:justify-end gap-4">
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-md text-base">
              iOS
            </button>
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-md text-base">
              Android
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-700 mt-6"></div>

      {/* Footer Bottom */}
      <div className="w-full max-w-6xl text-center text-sm mt-4 px-4">
        <p>
          Copyright © 2023 All Rights Reserved – The International Glamour
          Project® | <a href="#" className="underline">Terms and Conditions</a> |{" "}
          <a href="#" className="underline">Privacy Policy</a> | (A Subsidiary of
          Dynamic Sports and Event Management LLP)
        </p>
      </div>
    </div>
  );
}

export default Footer;
