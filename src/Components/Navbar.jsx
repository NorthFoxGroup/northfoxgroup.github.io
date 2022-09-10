import React from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { BsFillEnvelopeFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="main py-2 bg-accent">
      <div className="flex justify-between">
        <div className="flex gap-10">
          <p className="text-xs font-medium text-accentGray flex items-center">
            <BiCurrentLocation className="mr-2 text-accentBlue" />
            Ahmedabad'05 , Gujarat , India.
          </p>
          <p className="text-xs font-medium text-accentGray flex items-center">
            <BsFillEnvelopeFill className="mr-2 text-accentBlue" />
            Ahmedabad'05 , Gujarat , India.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
