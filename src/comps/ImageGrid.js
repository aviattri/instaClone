import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
const ImageGrid = ({ setSelectedImg }) => {
  //useFirestore gets all the images for us from DB
  const { docs } = useFirestore("images");
  console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          //motion element
          <motion.div
            layout
            //animate the animation of  the opactiy to 1
            whileHover={{ opacity: 1 }}
            className="img-wrap"
            key={doc.id}
            //on click for the div that ?
            //pass url of the img
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              src={doc.url}
              alt="upload pic"
            />
          </motion.div>
        ))}
    </div>
  );
};
export default ImageGrid;
