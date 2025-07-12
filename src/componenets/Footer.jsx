
// import React from 'react';
// import { assets } from '../assets/assets_frontend/assets';

// const Footer = () => {
//   return (
//     <div className="px-1 sm:px-10 py-10 mt-10">
//       {/* Grid layout for three sections */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
//         {/* Left Section */}
//         <div className='text-gray-600 text-justify leading-relaxed'>
//           <img src={assets.logo} alt="Logo" className="w-32 mb-4" />
//           <p className="text-sm text-gray-600 ">
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
//             industry's standard dummy text ever since the 1500s.
//           </p>
//         </div>

//         {/* Center Section */}
//         <div>
//           <h2 className="text-lg font-semibold mb-3">COMPANY</h2>
//           <ul className="space-y-2 text-gray-700">
//             <li className="hover:text-blue-600 cursor-pointer">Home</li>
//             <li className="hover:text-blue-600 cursor-pointer">About us</li>
//             <li className="hover:text-blue-600 cursor-pointer">Contact us</li>
//           </ul>
//         </div>

//         {/* Right Section */}
//         <div>
//           <h2 className="text-lg font-semibold mb-3">GET IN TOUCH</h2>
//           <ul className="space-y-2 text-gray-700">
//             <li>+92 324-3503403</li>
//             <li>msalmanamjad2@gmail.com</li>
//           </ul>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="mt-10 text-center border-t pt-5 text-sm text-gray-500">
//         <p>Copyright © 2024 GreatStack - All Rights Reserved.</p>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const Footer = () => {
  return (
    <div className="px-3 sm:px-10 py-10 mt-10">
      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
        {/* Left Section */}
        <div className="text-gray-600 leading-relaxed text-justify">
          <img src={assets.logo} alt="Logo" className="w-32 mb-4" />
          <p className="text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        {/* Center Section */}
        <div className="text-gray-700 md:ml-20 lg:ml-24">
          <h2 className="text-lg font-semibold mb-3">COMPANY</h2>
          <ul className="space-y-2">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">About us</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact us</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="text-gray-700">
          <h2 className="text-lg font-semibold mb-3">GET IN TOUCH</h2>
          <ul className="space-y-2">
            <li>+92 324-3503403</li>
            <li>msalmanamjad2@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center border-t pt-5 text-sm text-gray-500">
        <p>Copyright © 2024 GreatStack - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
