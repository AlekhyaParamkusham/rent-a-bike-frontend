import React, { useEffect } from "react";
import styled from "styled-components";
import bike from "./../Images/bike2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import {
  small,
  mobile,
  mobileLand,
  tabletPo,
  smallTablet,
  desktop,
  large,
} from "../resp";

const WhoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const WhoImage = styled.img`
  width: 70vw;
  height: 60vh;
  margin: 15px 2px;
  ${tabletPo({ width: "40vw", height: "60vh" })}
  ${large({ width: "35vw", height: "65vh" })}
`;

const WhoLine = styled.hr`
  width: 18vw;
  margin: 30px 10px;
  border-top: 2px dashed #94b49f;
  ${tabletPo({ width: "12vw" })}
  ${large({ width: "6vw", margin: "40px 10px" })}
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
  height: 40vh;
  gap: 20px;
  align-items: center;
  justify-content: center;
  ${mobileLand({ height: "35vh" })};
  ${smallTablet({ height: "30vh" })};
  ${tabletPo({ height: "25vh" })};
  ${large({ width: "60vw", height: "20vh" })}
`;

const WhoSubTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  flex-direction: column;
  ${large({ padding: "20px" })}
`;

const WhoText = styled.h5`
  font-size: 11px;

  line-height: 20px;
  letter-spacing: 1px;
  padding: 3px;
  font-family: "Comfortaa", cursive;
  ${desktop({
    fontSize: "14px",
    lineHeight: "24px",
    letterSpacing: "1.5px",
  })};
  ${large({ lineHeight: "26px" })}
`;

const WhoButton = styled.button`
  margin-bottom: 20px;
  background-color: #6d8b74;
  padding: 10px 10px;
  border-radius: 30px;
  outline: none;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 12px;
  ${desktop({ fontSize: "13px", letterSpacing: "1.2px" })};
  &:hover {
    background-color: #82954b;
  }
`;

const Who = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <WhoContainer>
      <WhoImage data-aos="zoom-in-up" src={bike} alt="bike" />
      <WhoLine />
      <WhoHeading>Who we are ...</WhoHeading>

      <WhoTextContainer>
        <WhoSubTextContainer>
          <WhoText>
            <span style={{ color: "#FF0000" }}>Rent-A-Bike</span> is your
            one-stop place for having a comfortable travel experience, even in
            the absence of your own vehicle.
          </WhoText>
        </WhoSubTextContainer>

        <WhoSubTextContainer>
          <WhoText style={{ color: "#FF0000", textAlign: "center" }}>
            Learn more about us here
          </WhoText>
          <WhoButton>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              More About Us
            </Link>
          </WhoButton>
        </WhoSubTextContainer>
      </WhoTextContainer>
    </WhoContainer>
  );
};

export default Who;
