import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  small,
  mobile,
  mobileLand,
  tabletPo,
  smallTablet,
  desktop,
  large,
} from "./../../resp";
import AOS from "aos";
import "aos/dist/aos.css";

const Outer = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 8px;
  padding: 10px;
  ${desktop({ marginTop: "25px" })};
`;

const WhoHeading = styled.h1`
  font-size: 16px;
  letter-spacing: 4px;
  font-weight: 500;
  font-family: "Bebas Neue", cursive;
  padding-bottom: 5px;
  color: red;
  text-align: center;
  ${mobileLand({ fontSize: "20px" })};
  ${desktop({ fontSize: "24px" })}
`;

const Info = styled.p`
  color: #5f7161;
  font-size: 12px;
  margin: 5px;
  padding: 10px;
  ${desktop({ fontSize: "13px", letterSpacing: "1.5px" })}
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
  ${large({ fontSize: "13px", gap: "10px", padding: "10px" })}
`;
const ButtonItem = styled(HeaderSearchItem)`
  background: #6d8b74;
  gap: 10px;

  padding: 7px 15px;
  justify-content: evenly-spaced;
  ${mobile({ padding: "8px 18px" })};
  ${tabletPo({ padding: "5px 15px" })}
  ${large({ padding: "3px 10px" })}
  &:hover {
    background-color: #82954b;
  }
`;

const ButtonText = styled(HeaderSearchText)`
  color: white;
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
  padding: 5px 10px;

  font-size: 12px;
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

const Thankyou = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Outer>
        <WhoHeading>
          Thankyou for booking with us! Wishing you happy and safe travels.
        </WhoHeading>
        <Info>To book more rides, please check below.</Info>
        <ButtonItem data-aos="zoom-out">
          <ButtonText>
            <Link
              to="/search"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              EXPLORE!
            </Link>
          </ButtonText>
          <HeaderBtn>
            <Link
              to="/search"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              +
            </Link>
          </HeaderBtn>
        </ButtonItem>
      </Outer>
    </>
  );
};

export default Thankyou;
