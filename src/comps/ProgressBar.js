import React from "react";
import { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";
const ProgressBar = ({ file, setFile }) => {
  //call the useStorage hook
  const { url, progress } = useStorage(file);
  useEffect(() => {
    //if the url value is pressent the set the file to null to hide progress bar
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
};
export default ProgressBar;
