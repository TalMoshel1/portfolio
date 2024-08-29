import React from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
// import '../app.css'

const Scroll = (props) => {
  const {scrollYProgress } = useScroll();

  return <motion.div className='scroll' style={{ scaleX: scrollYProgress, width:'100vw'}} />
};

export default Scroll;
