import React from "react";
import { logo } from "../../assets";

const Footer = () => {
  return (
    <footer className="pt-32 pb-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-10 mb-28 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="grid-item-1">
            <h1 className="mb-7 footer-title">
              Quality cleaning for your home
            </h1>
            <p className="footer-text">
              Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
              eiusmo.
            </p>
            <div className="flex gap-4 mt-8 box">
              <div className="box-item"></div>
              <div className="box-item"></div>
              <div className="box-item"></div>
              <div className="box-item"></div>
              <div className="box-item"></div>
            </div>
          </div>
          <div className="grid-item-2">
            <h1 className="mb-7 footer-title">Contact us</h1>
            <p className="mb-2 footer-text">
              1827 Nickel Road, Los Angeles, CA, 90017, United States
            </p>

            <a href="tel:(414) 567 - 2109" className="footer-text">
              (414) 567 - 2109
            </a>

            <div className="mt-4">
              <a href="email:contact@cleaning.com" className="footer-text">
                contact@cleaning.com
              </a>
            </div>
          </div>
          <div className="grid-item-3">
            <h1 className="mb-7 footer-title">Hours</h1>
            <div className="">
              <h2 className="text-sm md:text-[18px] font-bold text-titleColor mb-2">
                Monday to Friday
              </h2>
              <p className="footer-text">6:00 AM - 9:00 PM</p>
            </div>
            <div className="mt-4">
              <h2 className="text-sm md:text-[18px] font-bold text-titleColor mb-2">
                Saturday & Sunday
              </h2>
              <p className="footer-text">8:00 AM - 8:00 PM</p>
            </div>
          </div>
          <div className="grid-item-4">
            <h1 className="footer-title mb-7">Get a free estimate</h1>
            <a
              href="tel:(414) 567 - 2109"
              className="text-[#0075FF] text-sm md:text-xl font-bold mb-2"
            >
              (414) 567 - 2109
            </a>
              <p className="mt-2 footer-text">
              Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod. 
              </p>
              <div className="mt-5">
                <button className="button">Request a free quote</button>
              </div>
          </div>
        </div>
        <div className="footer-bottom">
        <div className=" border-b-2 mb-5 rounded-md border-[#DCDDEB] w-full my-10"></div>
        <div className="flex flex-wrap justify-between py-2">
          <div className="">
            <img src={logo} alt="" />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <p className="footer-text">
            Copyright © Cleaning X | Designed by
            </p>
            <a href="#templates" className="text-[#0075FF] text-xs md:text-sm font-normal">
            
            BRIX Templates
            </a>
            <p className="footer-text">
              - Powered by
              </p>
              <a href="#templates" className="text-[#0075FF] text-xs md:text-sm font-normal">
            
              Webflow
            </a>
              <a href="#templates" className="text-[#0075FF] text-xs md:text-sm font-normal">
            
              Licenses
            </a>
            
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
