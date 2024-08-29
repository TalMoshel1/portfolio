import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HomeIcon from "@mui/icons-material/Home";
import styled from "styled-components";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const Ul = styled.ul`
  z-index: 2;
  background-color: gold;
  height: 100vh; 
  margin-block-start: 0em;
  margin-block-end: 0em;
  padding-inline-start: 0px;
  width: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  li {
    list-style-type: none;
    text-align: center;
  }

  @media (orientation: landscape) {
    & {
      width: 25vw;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  z-index: 2;
  transition: left 0.5s ease-out;

    @media (orientation: landscape) {
    & {
        left: -25vw;

    }
  }

      @media (orientation: portrait) {
    & {
        left: -20vw;

    }
  }



  &.open {
    left: 0;
  }
`;

const Sidebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSetOpen = () => setIsOpen(!isOpen);

  return (
    <Nav className={isOpen ? "open" : ""}>
      <Ul>
        <li>
          <HomeIcon />
        </li>
        <li>Projects</li>
      </Ul>
      <button
        onClick={handleSetOpen}
        style={{
          position: "relative",
          top: "1rem",
          height: "3rem",
          border: 'none',
          backgroundColor: 'transparent'
        }}
      >
        <ArrowDropDownIcon
          style={{
            fill: "gold",
            transform: `scale(3) ${
              isOpen ? "rotate(90deg)" : "rotate(-90deg)"
            }`,
          }}
        />
      </button>
    </Nav>
  );
};

export default Sidebar;
