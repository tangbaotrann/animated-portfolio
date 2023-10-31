import { motion } from "framer-motion";

import "./index.scss";
import { images } from "../../../assets";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const slidingVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

function Home() {
  return (
    <div className="home">
      {/* Left */}
      <motion.div
        className="left"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h2 variants={textVariants}>NEFT LIFE</motion.h2>
        <motion.h1 variants={textVariants}>
          WEB DEVELOPER AND UI DESIGNER
        </motion.h1>

        <motion.div className="buttons" variants={textVariants}>
          <motion.button variants={textVariants}>
            See the Latest Works
          </motion.button>
          <motion.button variants={textVariants}>Contact Me</motion.button>
        </motion.div>

        <motion.img
          src={images.homeScroll}
          className="img-scroll"
          loading="lazy"
          alt="img-scroll"
          variants={textVariants}
          animate="scrollButton"
        />
      </motion.div>

      {/* Sliding text */}
      <motion.div
        className="sliding-text"
        variants={slidingVariants}
        initial="initial"
        animate="animate"
      >
        CREATOR
      </motion.div>

      {/* Right */}
      <img
        src={images.homeHero}
        className="img-hero"
        loading="lazy"
        alt="image-hero"
      />
    </div>
  );
}

export default Home;
