import Banner1 from "../../assets/banner.png";
import { motion } from "framer-motion";
import { SlideUp } from "../animation/animation";

const Banner = () => {
  return (
    <div>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* image section */}
          <div className="flex flex-col justify-center">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={Banner1}
              alt=""
              className="w-[95%] md:w-full mx-auto"
            />
          </div>
          {/* text section */}
          <div className="space-y-5 flex flex-col justify-center xl:max-w-[500px]">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl font-bold font-serif"
            >
              We Blieve thet a team makes any project better
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-500 text-sm"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi ut
              doloremque tempore sed dolores, impedit magni.{" "}
            </motion.p>
            <div className="text-center md:text-left">
              <motion.button
                variants={SlideUp(0.6)}
                initial="initial"
                whileInView={"animate"}
                className="primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
              >
                Discover Now
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
