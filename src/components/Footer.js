import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import icon from "../images/logo.png";
const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-12 mx-auto mt-16">
      <div className="text-center font-bold">
        <h2 className="text-2xl text-secondary">We On Social Media</h2>
        <h2 className="text-3xl mt-4">FOLLOW US</h2>
        <div className="flex justify-around items-center mt-6">
          <FaFacebook className="me-3 text-secondary" size={30} />
          <FaInstagram className="me-3 text-primary" size={30} />
          <FaTwitter className="me-3 text-green-600" size={30} />
          <FaLinkedin className="me-3 text-blue-700" size={30} />
          <FaYoutube className="me-3 text-red-500" size={30} />
        </div>
        <div className="flex justify-center items-center mt-4">
          <img src={icon} className="w-24" alt="" />
        </div>
      </div>
      <div className="text-center font-bold">
        <h2 className="text-2xl text-secondary">Links</h2>
        <h2 className="text-3xl mt-6">ADVERTISERS</h2>
        <h2 className="text-3xl mt-6">PUBLISHERS</h2>
        <h2 className="text-3xl mt-6">INFLUENCERS</h2>
        <h2 className="text-3xl mt-6">AD FORMATS</h2>
      </div>
      <div className="text-center font-bold">
        <h2 className="text-2xl text-secondary">Documentations</h2>
        <h2 className="text-3xl mt-6">TERMS & CONDITION</h2>
        <h2 className="text-3xl mt-6">PRIVACY POLICY</h2>
        <h2 className="text-3xl mt-6">CANCELLATION POLICY</h2>
        <h2 className="text-3xl mt-6">BLOG</h2>
      </div>
      <div className="text-center font-bold">
        <h2 className="text-2xl text-secondary">Supports</h2>
        <h2 className="text-3xl mt-6">FAQ</h2>
        <h2 className="text-3xl mt-6">MEDIA KIT</h2>
        <h2 className="text-3xl mt-6">CONTACT US</h2>
      </div>
    </div>
  );
};

export default Footer;
