import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    x: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

function Links() {
  const dataLinks = [
    {
      id: 1,
      url: "#Homepage",
      name: "Homepage",
    },
    {
      id: 2,
      url: "#Services",
      name: "Services",
    },
    {
      id: 3,
      url: "#Portfolio",
      name: "Portfolio",
    },
    {
      id: 4,
      url: "#Contact",
      name: "Contact",
    },
    {
      id: 5,
      url: "#About",
      name: "About",
    },
  ];

  return (
    <motion.div className="links" variants={variants}>
      <ul className="link-list">
        {dataLinks.map((_link) => {
          return (
            <motion.li
              key={_link.id}
              className="link-item"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }} // when clicked.
            >
              <a href={_link.url}>{_link.name}</a>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
}

export default Links;
