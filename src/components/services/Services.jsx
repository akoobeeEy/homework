import React from "react";
import { motion } from "framer-motion";
import { phone, servic1, servic2, servic3 } from "../../assets";
import Button from "../../constants/button/Button";
const Services = () => {
  return (
    <section className="py-10 mt-[120px]" id="services">
      <div className="container mx-auto ">
        <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="flex justify-between servis-top">
          <h3 className="title">Our Services</h3>
          <button className="button">Explore services</button>
        </motion.div>

        <motion.div
          initial={{ y: 400, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 gap-10 mt-14 md:grid-cols-2 lg:grid-cols-3"
        >
          <div className=" card">
            <div className="flex justify-center mb-10">
              <img
                src={servic1}
                alt="calendar"
                className="duration-300 hover:scale-105"
              />
            </div>
            <h2 className="card-title">House cleaning</h2>
            <p className="card-text">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
          <div className=" card">
            <div className="flex justify-center mb-10">
              <img
                src={servic2}
                alt="calendar"
                className="duration-300 hover:scale-105"
              />
            </div>
            <h2 className="card-title">Office cleaning</h2>
            <p className="card-text">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
          <div className=" card">
            <div className="flex justify-center mb-10">
              <img
                src={servic3}
                alt="calendar"
                className="duration-300 hover:scale-105"
              />
            </div>
            <h2 className="card-title">Industrial cleaning</h2>
            <p className="card-text">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
        </motion.div>

        <motion.div 
        initial={{ y: 280, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-20">
          <div className="w-full overflow-hidden rounded-lg bg-titleColor">
            <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2">
              <div className="servic-left hover:hue-rotate-90"></div>
              <div className="px-4">
                <h4 className="mb-4 text-xs font-bold text-white md-text-base">
                  Covid-19 sanitization
                </h4>
                <h1 className="mb-3 text-xl font-bold text-white md:text-5xl">
                  We follow guidelines to keep you safe from the COVID-19 virus
                </h1>
                <p className="mb-5 text-xs font-normal text-white md:text-xl">
                  Lobortis mattis odio leo eget mauris met aliquet semper
                  molestie sollicitudin congue massa mauris lectus.
                </p>
                <div className="flex items-center gap-10">
                  <div className="">
                    <Button />
                  </div>
                  <div className="flex items-center gap-2">
                    <a href="tel:(414) 567 - 2109">
                      <img src={phone} alt="phone" />
                    </a>
                    <div className="flex flex-col">
                      <p className="text-xs leading-4 text-white uppercase md:text-base">
                        Call us now
                      </p>
                      <a
                        href="tel:(414) 567 - 2109"
                        className="text-xs font-bold text-white md:text-2xl"
                      >
                        (414) 567 - 2109
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className=" border-b-2 rounded-md border-[#DCDDEB] w-full mt-40"></div>
      </div>
    </section>
  );
};

export default Services;
