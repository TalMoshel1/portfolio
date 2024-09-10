import React from "react";
import Me from "../photos/me.jpeg";
import styled from "styled-components";
// import AnimateMusicSvg from "./AnimateMusicSvg";
import MyPhoto from "./MyPhoto";



const HomeContainer = styled.main`
  height: 100svh;
  position: relative;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 200%;
    position: relative;
    left: 0;
    right: 0;
  }
`;

const ImgContainer = styled.div`
  width: 50%;
  height: 30%;
  overflow: hidden;
  border: 20px solid silver;
  border-radius: 100%;
  box-shadow: 2px 20px 12px -14px;

  @media (orientation: landscape) {
    & {
      width: 50%;
      height: 30%;
    }
  }

  @media (orientation: portrait) {
    & {
      width: 50%;
      height: 33%;
    }
  }
`;

const Home = (props) => {
  return (
    <HomeContainer>
      <MyPhoto/>
      <h1>Tal Moshel</h1>
      <h2>Web Developer</h2>
      <p style={{marginBlockStart: '0em'}}>
          I am Tal Moshel, web developer from Herzeliya, Israel. 
        </p>






    </HomeContainer>
  );
};

export default Home;
