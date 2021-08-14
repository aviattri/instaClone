import React from "react";
import { motion } from "framer-motion";
const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    //set the selected img to null
    if (e.target.classList.contains("backdrop")) setSelectedImg(null);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="backdrop"
      onClick={handleClick}
    >
      <motion.img
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        // className="backdrop-img"
        src={selectedImg}
        alt="end"
      />
    </motion.div>
  );
};
export default Modal;
