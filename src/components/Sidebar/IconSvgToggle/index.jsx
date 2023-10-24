import { motion } from "framer-motion";

function IconSvgToggle() {
  return (
    <svg width="23" height="23" viewBox="0 0 23 23" className="svg-icon">
      <motion.path
        strokeWidth="3"
        stroke="black"
        strokeLinecap="round"
        variants={{
          open: {
            d: "M 3 16.5 L 17 2.5",
          },
          closed: {
            d: "M 2 2.5 L 20 2.5",
          },
        }}
      />
      <motion.path
        strokeWidth="3"
        stroke="black"
        strokeLinecap="round"
        d="M 2 9.423 L 20 9.423"
        variants={{
          open: {
            opacity: 0,
          },
          closed: {
            opacity: 1,
          },
        }}
      />
      <motion.path
        strokeWidth="3"
        stroke="black"
        strokeLinecap="round"
        variants={{
          open: {
            d: "M 3 2.5 L 17 16.346",
          },
          closed: {
            d: "M 2 16.346 L 20 16.346",
          },
        }}
      />
    </svg>
  );
}

export default IconSvgToggle;
