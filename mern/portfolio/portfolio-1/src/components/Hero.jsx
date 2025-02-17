import React from "react";
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import { motion } from "framer-motion";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineX,
} from "react-icons/ai";

const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative text-white">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              1000,
              "Web Designer",
              1000,
              "FrontEnd Developer",
              1000,
              "BackEnd Developer",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-300 text-xl md:text-5xl italic mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="md:text-7xl text-5xl font-extrabold tracking-tight mb-4"
          >
            HEY, I AM <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Syed Omer Ali
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            I am a passionate Full Stack Developer with over 1.5 years of
            experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            {/* Fixed Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="z-10 cursor-pointer font-bold text-white px-6 py-3 
                bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl 
                transition-all duration-300 hover:from-blue-500 hover:to-purple-500 
                hover:shadow-lg"
              onClick={() => window.open("https://todo.syedomer.xyz", "_blank")}
            >
               Task Manager 
            </motion.button>

            {/* Social Media Links */}
            <div className="flex gap-6 flex-row text-4xl md:text-6xl z-20">
              <motion.a
                whileHover={{ scale: 1.2, color: "#8257e5" }}
                href="https://github.com/syedomer17"
                className="transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineGithub />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: "#0077b5" }}
                href="https://www.linkedin.com/in/syed-omer-ali-b73501324"
                className="transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: "#E1306C" }}
                href="https://www.instagram.com/syedomer934"
                className="transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineInstagram />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: "#1877F2" }}
                href="https://www.facebook.com/share/15dm4xpa4T/"
                className="transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineFacebook />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: "#1DA1F2" }}
                href="https://x.com/SyedOmerAl20006"
                className="transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineX />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Profile Picture */}
        <motion.img
          src={profilepic}
          className="w-[300px] md:w-[450px] rounded-full shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Background Effect */}
      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
