import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import {SlideUp } from "../animation/animation";
const Footer = () => {
  return (
    <motion.footer
      variants={SlideUp(0.2)}
      initial="initial"
      whileInView="animate"
    >
      <div className="container py-11">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Comany info section */}
          <div className="space-y-4 font-semibold">
            <div className="flex items-center space-x-3">
              <img src={Logo} alt="" className="w-6" />
              <p className="text-xl font-semibold">Interion</p>
            </div>
            <p>Jebreel, Herat Afghanestan</p>
            <p>@ 2025 HN All rights reserved</p>
          </div>
          {/* Footer Liink */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">About us</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Designer</a>
                </li>
                <li>
                  <a href="#">Craftmaship</a>
                </li>
                <li>
                  <a href="#">Sustainability</a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">Support</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#">FAQ's</a>
                </li>
                <li>
                  <a href="#">Shipping & Returns</a>
                </li>
                <li>
                  <a href="#">Care Guide</a>
                </li>
                <li>
                  <a href="#">Guaranty</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact section */}
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Contact us</h1>
            <ul className="text-base font-semibold space-y-4">
              <li className="flex items-center space-x-3">
                <FaPhone />
                <a href="#">+ 98 786223451</a>
              </li>
              <li className="flex items-center space-x-3">
                <MdEmail />
                <a href="hakima.noori.1379@gmail.com">Email</a>
              </li>
            </ul>
          </div>
        </div>
        {/* bottom section */}
        <p className="text-center text-sm font-semibold border-t-2 pt-5 mt-5">
          &Copy; 2025 HN. All rightss reserved
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
