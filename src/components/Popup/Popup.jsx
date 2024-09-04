// import React from 'react';

import awsCertified from "../../assets/awsCertified.png";
import { IoCloseSharp } from "react-icons/io5";
const Popup = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex  items-center justify-center z-50">
      <div className="flex flex-col items-center justify-center bg-white w-full sm:w-10/12  shadow-lg     relative">
       
        <div className="">
        <div className="absolute -top-10 sm:top-4 -right-10 text-4xl  text-white cursor-pointer w-20  ">
            <IoCloseSharp onClick={onClose} />
        </div>
          <div className=" text-center space-y-3  pb-1 bg-[#5147AC]">
            <h1 className="text-2xl sm:text-3xl font-semibold  text-white ">Great news</h1>
            <p className="text-white text-1xl sm ">
              Foundationat Technical Review : Stigmata Techno Solutions
              [Clousec]
            </p>
          </div>

          <img src={awsCertified} className="w-full  " alt="" />
        </div>
      </div>
    </div>
  );
};

export default Popup;
