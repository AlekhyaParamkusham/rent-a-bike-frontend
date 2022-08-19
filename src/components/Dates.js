import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import arrow from "./../Images/Arrow.png";

import {
  mobile,
  mobileLand,
  tabletPo,
  smallTablet,
  desktop,
  large,
} from "../resp";
import DateContainer from "./DateContainer";
import TimeComponent from "./TimeComponent";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  // top: -20px;
`;

const Wrapper = styled.div`
  width: 85vw;
  height: 40vh;
  display: flex;
  gap: 5px;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  // background-color: #fbf8f1;
  background-color: transparent;
  border: 2px solid #857671;
  ${smallTablet({ width: "50vw" })};
  ${tabletPo({ flexDirection: "row", width: "90vw", height: "18vh" })};
  ${desktop({ width: "85vw", flexDirection: "row", height: "16vh" })};
  ${large({ flexDirection: "row", width: "90vw", height: "16vh" })}
`;

const HeaderSearchItem = styled.div`
  display: flex;
  align-items: center;
  color: #3e2c41;
  cursor: pointer;
  margin: 5px;
  background-color: #cfdac8;
  padding: 0 10px;
  border-radius: 30px;
  &:hover {
    background-color: #e4e9be;
  }
  ${large({ gap: "10px", margin: "10px", padding: "0 20px" })}
`;

const HeaderSearchText = styled.span`
  display: flex;
  align-items: center;
  font-family: "Comfortaa", cursive;
  gap: 6px;
  font-size: 10px;
  color: red;
  line-height: 14px;
  ${tabletPo({ fontSize: "11.5px" })}
  ${large({ fontSize: "13px", gap: "10px", padding: "20px" })}
`;

const ButtonItem = styled(HeaderSearchItem)`
  // background: #6d8b74;
  padding: 7px 15px;
  justify-content: evenly-spaced;
  ${mobile({ padding: "8px 18px" })};
  ${tabletPo({ padding: "5px 15px" })};
  ${large({ padding: "0 10px" })}
  &:hover {
    background-color: #82954b;
  }
`;

const ButtonText = styled(HeaderSearchText)`
  color: black;
  font-size: 10px;
  line-height: 18px;
  ${mobile({ fontSize: "11px" })}
  ${desktop({ fontSize: "11px" })}
  ${large({
    fontSize: "13px",
    fontWeight: "700",
    letterSpacing: "1px",
  })}
`;

const HeaderBtn = styled.button`
  color: #ff6464;
  border: none;
  cursor: pointer;
  background-color: #fbf8f1;
  border-radius: 30px;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 10px 15px;

  font-size: 10px;
  ${large({
    fontSize: "16px",
  })};

  &:hover {
    background-color: #ff7878;
    color: #fbf8f1;
    transform: scale(1.1);
    transition: 0.2s ease-in;
    font-weight: 500;
  }
`;

const Arrow = styled.img`
  width: 50px;
  height: 30px;
  margin: 0 5px;
  ${large({ width: "70px", height: "40px" })};
`;

const TimeContainer = styled.div`
  diplay: flex;
  justify-content: space-between;
  height: 40px;
  padding: 15px 10px;
  background-color: #f0a500;
  border-radius: 10px;
  ${tabletPo({
    gap: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })};
  ${desktop({
    height: "auto",
    display: "flex",
    flexWrap: "no-wrap",
    gap: "10px",
  })}
`;

const Dates = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <HeaderSearchItem>
            <DateContainer />
          </HeaderSearchItem>
          <TimeContainer>
            <TimeComponent />
          </TimeContainer>
          <ButtonItem>
            <ButtonText>Get your ride started!</ButtonText>
            <Arrow src={arrow} />
            <HeaderBtn>
              <Link
                to="/search"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                GO!
              </Link>
            </HeaderBtn>
          </ButtonItem>
        </Wrapper>
      </Container>
    </>
  );
};

export default Dates;
