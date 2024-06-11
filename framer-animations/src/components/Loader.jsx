import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        repeat: Infinity, // repeat the animation indefinitely
        repeatType: "reverse", // reverse the animation direction on each repeat
        duration: 0.5,
      },
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};
const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
      ></motion.div>
      <div onClick={() => cycleAnimation()}>⚽</div>
    </>
  );
};
export default Loader;
