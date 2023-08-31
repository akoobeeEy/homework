import React from "react";
import { ab1, ab2, ab3 } from "../../assets";
import { motion } from "framer-motion";
import Button from "../../constants/button/Button";

const About = () => {
  return (
    <section className="mt-[200px] py-10" id="about">
      <div className="container mx-auto">
        <motion.div
         initial={{ y: 160, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         transition={{ delay: 0.1, duration: 0.3 }}
        className="flex flex-col items-center">
          <h1 className="mb-5 title">About Us</h1>
          <p className="flex flex-col text-xs text-center text-textColor md:text-xl">
            Sagittis nibh scelerisque vitae eget vulputate sem elementum sed{" "}
            <span>
              neque nisi felis non ultrices massa id egestas quam velit pretium
              nu.
            </span>
          </p>
        </motion.div>
        <motion.div
        initial={{ x: -400, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        
        className="grid grid-cols-1 gap-10 mt-14 md:grid-cols-2 lg:grid-cols-3">
            <div className=" card">
               <div className="flex justify-center mb-10">
               <img src={ab1} alt="calendar" className="duration-300 hover:scale-105" />
               </div>
               <h2 className="card-title">
               1. Schedule online
               </h2>
               <p className="card-text">
               Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.
               </p>
            </div>
            <div className=" card">
               <div className="flex justify-center mb-10">
               <img src={ab2} alt="calendar" className="duration-300 hover:scale-105" />
               </div>
               <h2 className="card-title">
               2. Pay online easily
               </h2>
               <p className="card-text">
               Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.
               </p>
            </div>
            <div className=" card">
               <div className="flex justify-center mb-10">
               <img src={ab3} alt="calendar" className="duration-300 hover:scale-105" />
               </div>
               <h2 className="card-title">
               3. Get your house cleaned
               </h2>
               <p className="card-text">
               Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.
               </p>
            </div>
        </motion.div>
        <div className="flex justify-center gap-4 mt-10">
            <Button/>
            <button className="button">
            Explore services
            </button>
        </div>
      </div>
    </section>
  );
};

export default About;
