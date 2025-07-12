import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-xl text-center gap-2 text-gray-600 pt-10">
        CONTACT <span className="text-gray-800 font-medium">US</span>{" "}
      </div>
      <div className="flex flex-col md:flex-row gap-10 mt-20">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />

        <div className="flex flex-col gap-5 text-gray-600">
          <b className="text-gray-800 font-medium">Our OFFICE</b>
          <div>
            <p className="text-sm">54709 Willms Station</p>
            <p className="text-sm">Suite 350, Washington, USA</p>
          </div>
          <div>
            <p className="text-sm">Tel: (92) 3242502403</p>
            <p className="text-sm">Email: salmanamjad2@gmail.com</p>
          </div>

          <b className="text-gray-800 font-medium">Careers at PRESCRIPTO</b>
          <p className="text-sm">earn more about our teams and job openings.</p>

          <div>
            <button className="border border-gray-200 py-3 px-7 cursor-pointer hover:bg-primary hover:text-white transition-all duration-700">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
