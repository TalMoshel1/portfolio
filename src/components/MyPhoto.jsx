import React from "react";
import styled from "styled-components";
import Me from "../photos/me.jpeg";

const ImgContainer = styled.div`
  width: 30%;
  aspect-ratio: 1 / 1; // Ensures it stays a perfect circle
  overflow: hidden;
  border: 20px solid silver;
  border-radius: 100%;
  box-shadow: 2px 20px 12px -14px;
  margin-bottom: 1rem;

  // @media (orientation: landscape) {
  //   width: 30%;
  // }

  @media (orientation: portrait) {
    width: 50%; // Adjusts size for portrait
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; // Ensures image covers the container while keeping its aspect ratio
    position: relative;
  }
`;

const MyPhoto = () => {
  return (
    <ImgContainer>
      <img src={Me} loading="lazy" alt="My Photo" />
    </ImgContainer>
  );
};

export default MyPhoto;
