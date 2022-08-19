import React, { useEffect } from "react";
import styled from "styled-components";
import bike from "./../Images/bike2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Element } from "react-scroll";

import {
  small,
  mobile,
  mobileLand,
  tabletPo,
  smallTablet,
  desktop,
  large,
} from "../resp";

import insurance from "./../Images/insurance.png";
import sanitize from "./../Images/sanitize.png";
import hours from "./../Images/24hours.png";
import maintenance from "./../Images/maintenance.png";

const WhoContainer = styled.div`
  margin: 20px 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const WhoHeading = styled.h1`
  font-size: 20px;
  letter-spacing: 6px;
  font-weight: 500;
  font-family: "Bebas Neue", cursive;
  padding-bottom: 5px;
  color: red;
  ${mobileLand({ fontSize: "25px" })};
  ${desktop({ fontSize: "30px" })}
`;
const WhoTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f1f7e7;
  padding: 10px 15px;
  width: 80vw;
  height: 50vh;
  gap: 20px;
  align-items: center;
  justify-content: center;
  ${mobileLand({ height: "40vh" })};
  ${smallTablet({ height: "40vh" })};
  ${tabletPo({ height: "25vh" })};
  ${desktop({ height: "30vh" })}
  ${large({ width: "60vw", height: "30vh" })}
`;

const WhatUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 10px;
  ${desktop({ flexWrap: "no-wrap", gap: "10px" })}
`;
const WhatListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100px;
  height: 100px;
  padding: 5px;
`;
const WhatIcon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  padding: 5px;
  ${desktop({ width: "70px", height: "70px", padding: "15px" })}
`;

const WhatList = styled.li`
  list-style: none;
  text-align: center;
  font-size: 13px;
  letter-spacing: 1px;
  font-family: "Barlow Condensed", sans-serif;
  color: #5d534a;
  font-weight: 700;
  ${desktop({ fontSize: "15px" })}
`;

const What = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <Element id="services">
      <WhoContainer>
        <WhoHeading>What we provide ...</WhoHeading>

        <WhoTextContainer>
          <WhatUl>
            <WhatListContainer>
              <WhatIcon src={sanitize} data-aos="zoom-out" />
              <WhatList>Sanitized Vehicles</WhatList>
            </WhatListContainer>
            <WhatListContainer>
              <WhatIcon src={insurance} data-aos="zoom-in" />
              <WhatList>Vehicle Insurance</WhatList>
            </WhatListContainer>
            <WhatListContainer>
              <WhatIcon src={hours} data-aos="zoom-in" />
              <WhatList>24/7 Roadside Assistance</WhatList>
            </WhatListContainer>
            <WhatListContainer>
              <WhatIcon src={maintenance} data-aos="zoom-out" />
              <WhatList>Bike Maintenance</WhatList>
            </WhatListContainer>
          </WhatUl>
        </WhoTextContainer>
      </WhoContainer>
    </Element>
  );
};

export default What;
