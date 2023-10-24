import { useState } from "react";
import { motion } from "framer-motion";

import "./index.scss";
import Links from "./Links";
import ToggleButton from "./toggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 25px 25px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(10px at 25px 25px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg-sidebar" variants={variants}>
        <Links />
      </motion.div>

      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
}

export default Sidebar;
