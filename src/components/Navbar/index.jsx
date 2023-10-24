import { motion } from "framer-motion";

import "./index.scss";
import { socialIcons } from "../../assets";
import Sidebar from "../Sidebar";

function Navbar() {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />

      <div className="wrapper">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          PORTFOLIO
        </motion.h1>

        <div className="social">
          {socialIcons.map((_icon) => {
            return (
              <a href="#" key={_icon.id}>
                <img
                  src={_icon.icon}
                  alt={_icon.icon}
                  className="social-icon"
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
