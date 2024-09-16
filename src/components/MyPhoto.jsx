import React from "react";
import styled from "styled-components";
// import Me from "../photos/me.jpeg";
import Me from '../../public/photos/me.jpeg'

const ImgContainer = styled.div`
  width: 30vw; 
  height: 30vw;
  min-height: 30vh;
  overflow: hidden;
  border: 20px solid silver;
  border-radius: 100%;
  box-shadow: 2px 20px 12px -14px;
  margin-bottom: 1rem;

  @media (orientation: portrait) {
    width: 50vw; // Adjust size for portrait mode
    height: 50vw;
    min-height: 50vh;

  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
