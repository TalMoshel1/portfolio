import React from "react";
import styled from "styled-components";
import Me from "../photos/me.jpeg";

const MyPhoto = () => {
  const ImgContainer = styled.div`
    width: 50%;
    height: 30%;
    overflow: hidden;
    border: 20px solid silver;
    border-radius: 100%;
    box-shadow: 2px 20px 12px -14px;
    margin-bottom:1rem;

    @media (orientation: landscape) {
      & {
        width: 30%;
        height: 50%;
      }
    }

    @media (orientation: portrait) {
      & {
        width: 50%;
        height: 33%;
      }
    }

    img {
      width: 100%;
      height: 100%;
      position: relative;
      left: 0;
      right: 0;
    }
  `;

  return (
    <ImgContainer>
      <img src={Me} loading="lazy"/>
    </ImgContainer>
  );
};

export default MyPhoto;
