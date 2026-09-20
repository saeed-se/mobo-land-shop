import { motion } from "framer-motion";

const MarqueeItem = ({ images, from, to }) => {
  return (
    <div className="flex MyGradient">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex shrink-0"
      >
        {images.map((image, index) => (
          <img
            className="h-30 md:h-40 w-40 md:w-50 object-contain pr-20"
            src={image}
            key={index}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex shrink-0"
      >
        {images.map((image, index) => (
          <img
            className="h-30 md:h-40 w-40 md:w-50 object-contain pr-20"
            src={image}
            key={`second-${index}`}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
