import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaCss3Alt, FaPython, FaGit, FaJs } from "react-icons/fa";
import { LiaNode } from "react-icons/lia";
import { SiTypescript } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io5";
import '../../App.css';
import { useInView } from "react-intersection-observer";

const Technologies = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger animation when 10% of the element is visible
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }} // Start hidden
      animate={inView ? { opacity: 1 } : { opacity: 0 }} // Animate when in view
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
      className="technologies-container"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <motion.h1
        style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
        initial={{ scale: 0.8 }}
        animate={inView ? { scale: 1 } : { scale: 0.8 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Technologies
      </motion.h1>
      <motion.div
        className="icons-container"
        style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <FaJs fill="#F7E018" size={50} />
        <SiTypescript fill="#2F74C0" size={50} />
        <FaPython fill="#FFCA1D" size={50} />
        <LiaNode fill="#8CC500" size={50} />
        <IoLogoHtml5 fill="#E64C18" size={50} />
        <FaReact fill="#61DBFB" size={50} />
        <FaCss3Alt fill="#2091EB" size={50} />
        <FaGit fill="#E84D31" size={50} />
      </motion.div>
    </motion.section>
  );
};

export default Technologies;
