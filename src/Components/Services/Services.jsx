import { FaVectorSquare } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { BiSolidDollarCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import { SlideUp } from "../animation/animation";

const ServiceCard = [
  {
    id: 1,
    title: "Luxury Facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda nulla. In ullam incidunt rem deleniti quia quasi animi atque suscipit maxime!",
    icon: <FaVectorSquare />,
    link: "#",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Quality Products",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda nulla. In ullam incidunt rem deleniti quia quasi animi atque suscipit maxime!",
    icon: <FaPenToSquare />,
    link: "#",
    delay: 0.4,
  },
  {
    id: 3,
    title: "Affordable Price",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda nulla. In ullam incidunt rem deleniti quia quasi animi atque suscipit maxime!",
    icon: <BiSolidDollarCircle />,
    link: "#",
    delay: 0.6,
  },
];

const Services = () => {
  return (
    <div>
      <div className="container py-20">
        {/* heading section */}
        <div className="space-y-2 text-center max-w-[350px] mx-auto mb-8 ">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            className="text-3xl font-bold font-serif"
          >
            What we provide
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView={"animate"}
            className="text-gray-500 text-sm"
          >
            Bring your dream to life with one-on-one design help & hand picked
            products.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* card section */}
          {ServiceCard.map((card) => {
            return (
              <motion.div
                variants={SlideUp(card.delay)}
                initial="initial"
                whileInView={"animate"}
                key={card.id}
                className="space-y-4 border-[1px] border-black/30 p-6 hover:bg-black hover:text-white hover:shadow-[7px_7px_0px_0px_#6c6c6c] duration-300"
              >
                <span className="inline-block text-xl border-[1px] border-black rounded-full p-3">
                  {card.icon}
                </span>
                <p className="text-2xl font-bold font-serif">{card.title}</p>
                <p className="text-gray-400 text-xs">{card.description}</p>
                <a
                  className="inline-block border-b border-black"
                  href={card.link}
                >
                  Learn More
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
