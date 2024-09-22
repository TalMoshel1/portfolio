import React from "react";
import { motion } from "framer-motion";
import MyPhoto from "./MyPhoto";
import "../App.css";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const Paragraph = styled.p`
  text-align: center;
  @media (orientation: landscape) {
    width: 30%;
  }

  @media (orientation: portrait) {
    width: 50%;
  }
`;

const About = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }} // No y offset to avoid shifting
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <MyPhoto />
      <motion.div
        style={{
          width: "90%",
          maxWidth: "600px", // Optional: Adjust to fit your design needs
          backgroundColor: "black",
          color: "white",
          fontWeight: 900,
          padding: "1rem",
          boxSizing: "border-box",
          lineHeight: "1.5", // Adjust for line spacing
          whiteSpace: "pre-wrap", // Preserve whitespace
          textAlign: "left", // Left-align text
          overflowWrap: "break-word", // Ensure long words break correctly
          borderRadius: "var(--border-radius)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        initial={{ scale: 0.8 }}
        animate={inView ? { scale: 1 } : { scale: 0.8 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Paragraph style={{ marginBlockStart: "0em", fontSize: '2rem' }}>
          Hi, I am Tal Moshel, web developer from Herzeliya, Israel.
        </Paragraph>
      </motion.div>
    </motion.section>
  );
};

export default About;
