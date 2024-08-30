import React from "react";
import MyPhoto from "./MyPhoto";
import '../App.css'


const About = (props) => {
  return (
    <section
      style={{
        width: "100%",
        height: "100vh", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <MyPhoto />
      <div
        style={{
          width: "90%", 
          maxWidth: "600px", // Optional: Adjust to fit your design needs
          backgroundColor: 'white',
          padding: "1rem",
          boxSizing: "border-box",
          lineHeight: "1.5", // Adjust for line spacing
          whiteSpace: "pre-wrap", // Preserve whitespace
          textAlign: "left", // Left-align text
          overflowWrap: "break-word", // Ensure long words break correctly
          borderRadius: 'var(--border-radius)',
          display:'flex',
          flexDirection: 'column',
        }}
      >
        <p style={{marginBlockStart: '0em'}}>
          I am Tal Moshel, web developer from Tel Aviv, Israel. Experienced in
          React, Node.js, HTML, CSS.
        </p>

        <button
        style={{
            borderRadius: 'var(--border-radius)',
            backgroundColor: 'gold',
            width: 'max-content',
            marginTop:'1rem'
        }}
        >Download CV</button>
      </div>
    </section>
  );
};

export default About;
