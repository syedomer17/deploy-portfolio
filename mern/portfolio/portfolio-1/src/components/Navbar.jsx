import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <>
      {/* Navbar Container */}
      <div className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md shadow-lg z-50">
        <div className="max-w-[1300px] mx-auto flex justify-between items-center px-8 md:px-12 h-20 text-white">
          {/* Logo */}
          <a
            href="#"
            className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 
              hover:from-purple-500 hover:to-blue-400 transition-all duration-500 drop-shadow-lg"
          >
            Syed Omer Ali
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 text-lg font-semibold">
            {["About", "Portfolio", "Contact"].map((item, index) => (
              <li key={index} className="relative group cursor-pointer">
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="text-white transition-all duration-300 group-hover:text-blue-400"
                >
                  {item}
                </Link>
                {/* Animated Underline */}
                <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleNav}
            aria-label="Toggle Navigation"
            className="md:hidden z-50 text-white transition-all duration-300 hover:scale-110 hover:text-blue-400"
          >
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </button>

          {/* Mobile Menu (Animated) */}
          <AnimatePresence>
            {nav && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="fixed left-0 top-0 w-full min-h-screen bg-[#0a0f1d] bg-opacity-95 backdrop-blur-lg flex items-center justify-center z-40"
                onClick={closeNav}
              >
                <ul className="font-semibold text-4xl space-y-8 text-center text-white">
                  {["About", "Portfolio", "Contact"].map((item, index) => (
                    <li key={index} className="relative group cursor-pointer">
                      <Link
                        to={item.toLowerCase()}
                        onClick={closeNav}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="transition-all duration-300 group-hover:text-blue-400"
                      >
                        {item}
                      </Link>
                      {/* Animated Underline */}
                      <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Spacer to prevent content from overlapping */}
      <div className="h-20"></div>
    </>
  );
}

export default Navbar;
