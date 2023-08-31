import React from "react";
import Button from "../../constants/button/Button";
import { articl1, articl2 } from "../../assets";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
const Articles = () => {
  let date = new Date();

  const [text] = useTypewriter({
    words: ["cleaners to clean any ", "mess for your home in 2022"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  const [rightText] = useTypewriter({
    words: ["properly disinfect your phone", "and other electronics "],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <section className="py-24 my-24 pb-52" id="articles">
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 250, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="flex justify-between articles-top"
        >
          <h3 className="title">Articles & resources</h3>
          <div className="flex gap-6">
            <Button />
            <button className="button">Browse articles</button>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-24"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="relative">
              <div className="">
                <img
                  src={articl1}
                  alt=""
                  className="duration-150 hover:hue-rotate-90"
                />
              </div>
              <div className="articl-card group">
                <h1 className="mb-4 text-base font-bold duration-100 text-titleColor md:text-2xl group-hover:text-red-500">
                  8 best vacuum {text}
                  <Cursor cursorColor="blue" />
                </h1>
                <p className="mb-4 text-xs font-normal duration-100 text-textColor md:text-base group-hover:text-red-500 ">
                  Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                  quis odio sit sit ac port titor sit males.
                </p>
                <div className="flex justify-between">
                  <div className="">
                    <p className="flex italic font-bold duration-100 group-hover:text-red-500 ">
                      {date.getDate()}/<span>{date.getMonth() + 1}/</span>
                      <span>{date.getFullYear()}</span>
                    </p>
                    <p className="flex mt-3 italic font-bold duration-100 group-hover:text-red-500 ">
                      {date.getHours()}:<span>{date.getMinutes()}</span>:
                      <span>{date.getSeconds()}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-[220px] lg:mt-0">
              <div className="">
                <img
                  src={articl2}
                  alt=""
                  className="duration-150 hover:hue-rotate-90"
                />
              </div>
              <div className="articl-card group">
                <h1 className="mb-4 text-base font-bold duration-100 text-titleColor md:text-2xl group-hover:text-red-500 ">
                  How to {rightText}
                  <Cursor cursorColor="red" />
                </h1>
                <p className="mb-4 text-xs font-normal duration-100 text-textColor md:text-base group-hover:text-red-500 ">
                  Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                  quis odio sit sit ac port titor sit males.
                </p>
                <div className="flex justify-between">
                  <div className="">
                    <p className="flex italic font-bold duration-100 group-hover:text-red-500 ">
                      {date.getDate()}/<span>{date.getMonth() + 1}/</span>
                      <span>{date.getFullYear()}</span>
                    </p>
                    <p className="flex mt-3 italic font-bold duration-100 group-hover:text-red-500 ">
                      {date.getHours()}:<span>{date.getMinutes()}</span>:
                      <span>{date.getSeconds()}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;
