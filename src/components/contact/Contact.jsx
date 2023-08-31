import React from "react";
import { phone } from "../../assets";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <section className="py-32 mt-[220px] bg-[#F7F9FC]" id="contact">
      <div className="container mx-auto">
        <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ y: 250, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="contact-left"
          >
            <h1 className="mb-5 title">Contact Us</h1>
            <p className="mb-5">
              In dignissim euismod pretium amet enim a eu nam ut urna accumsan
              pellentesque lacus duis pharetra eutortor.
            </p>

            <div className="flex items-center gap-2">
              <a href="tel:(414) 567 - 2109">
                <img src={phone} alt="phone" />
              </a>
              <div className="flex flex-col">
                <p className="text-xs leading-4 uppercase text-textColor md:text-base">
                  Call us now
                </p>
                <a
                  href="tel:(414) 567 - 2109"
                  className="text-[#211F54] font-bold md:text-2xl text-xs"
                >
                  (414) 567 - 2109
                </a>
              </div>
            </div>
            <div className=" border-b-2 mb-5 rounded-md border-[#DCDDEB] w-full mt-10"></div>
            <h2 className="mb-2 text-sm font-bold md:text-xl text-titleColor">
              Not convinced yet?
            </h2>
            <p className="mb-5 text-xs font-normal md:text-base text-textColor">
              Massa bibendum consectetur maurisid gravida purus, dolor dui amet
              morbi non nunc urna purus diam.
            </p>
            <div className="">
              <button className="button">Browse our packages</button>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 350, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-full px-14 py-16 bg-white rounded-lg border-[1px] border-[#EFF0F6] shadow-xl group hover:bg-black duration-150 hover:shadow-blue-600 hover:border-blue-600"
          >
            <div className="flex flex-wrap gap-8 mb-8">
              <div className="flex flex-col">
                <label htmlFor="fullName" className="mb-2 duration-100 group-hover:text-blue-600">
                  Full name
                </label>
                <input type="text" className="contact-input" id="fullName" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phoneNumber" className="mb-2 duration-100 group-hover:text-blue-600">
                  Phone number
                </label>
                <input type="tel" className="contact-input" id="phoneNumber" />
              </div>
            </div>
            <div className="flex flex-wrap gap-8 mb-8">
              <div className="flex flex-col">
                <label htmlFor="adress" className="mb-2 duration-100 group-hover:text-blue-600">
                  Adress
                </label>
                <input type="text" className="contact-input" id="adress" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 duration-100 group-hover:text-blue-600">
                  Email
                </label>
                <input type="email" className="contact-input" id="email" />
              </div>
            </div>
            <div className="flex flex-wrap gap-8 mb-8">
              <div className="flex flex-col">
                <label htmlFor="service" className="mb-2 duration-100 group-hover:text-blue-600">
                  Requested service
                </label>
                <input type="text" className="contact-input" id="service" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="dayOfService" className="mb-2 duration-100 group-hover:text-blue-600">
                  Day of service
                </label>
                <input
                  type="text"
                  className="contact-input"
                  id="dayOfService"
                />
              </div>
            </div>
            <div className="flex flex-col flex-wrap mb-8">
              <label htmlFor="note" className="duration-100 group-hover:text-blue-600">Add a note</label>
              <textarea name="note" id="note" cols="30" rows="10" className="mt-4 resize-none contact-input h-[144px]">
                
              </textarea>
            </div>
            <button className="button">Submit message</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
