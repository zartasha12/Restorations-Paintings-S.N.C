// Header.js

import React from "react";
import { Link } from "react-router-dom";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const HeaderLinks = () => {
  return (
    <header className="bg-[#1F2937] text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="contact-info">
          <span className="mr-4">restauritinteggi.snc@gmail.com</span>
          <span> (+39 ) 3288818283</span>
        </div>
        <div className="social-links flex ">
          <links className="mr-4 text-3xl cursor-pointer">
            <BiLogoFacebookSquare />
          </links>
          <links className="mr-4 text-3xl cursor-pointer">
            <AiOutlineInstagram />{" "}
          </links>
          <links className="mr-4 text-3xl cursor-pointer">
            <BsTwitter />{" "}
          </links>
        </div>
      </div>
    </header>
  );
};

export default HeaderLinks;
