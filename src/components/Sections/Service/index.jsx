import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import "./index.scss";

function Service({ type }) {
  const scrollRef = useRef();

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      ref={scrollRef}
      className={`service ${
        type === "service" ? "bg-service" : "bg-portfolio"
      }`}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "service" ? "What We Do?" : "What We Did? "}
      </motion.h1>

      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "service"
              ? "/src/assets/planets.png"
              : "/src/assets/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </motion.div>
  );
}

export default Service;
