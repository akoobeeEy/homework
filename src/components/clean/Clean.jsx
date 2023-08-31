import { useTypewriter, Cursor } from "react-simple-typewriter";
import Button from "../../constants/button/Button";
import { phone } from "../../assets";
import { motion } from "framer-motion";

const Clean = () => {
  const [text] = useTypewriter({
    words: [
      "senectus dapibus nibh.",
      "ultrices eget suscipit aliquet et nulla magna lacus penatibus.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <section id="home">
      <div className="container mx-auto">
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="clean-left"
          >
            <h1 className="flex flex-col mb-5 text-xl font-bold md:text-6xl">
              Quality cleaning <span></span>
            </h1>
            <p className="mb-7 text-textColor text-xs md:text-[21px] font-normal md:leading-7">
              Condimentum mauris sit cursus amet id non neque pharetra nulla
              ornare sed facilisis,{" "}
              <span>
                {text}
                <Cursor cursorColor="red" />
              </span>
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
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 250, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="duration-150 clean-right hover:-hue-rotate-90"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clean;
