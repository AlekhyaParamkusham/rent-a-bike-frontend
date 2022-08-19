import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import cover from "./../Images/coverpic.png";
import bike from "./../Images/bike2.png";
import axios from "axios";
import Dates from "./Dates";
import Spinner from "./Spinner";
import AOS from "aos";
import "aos/dist/aos.css";
import { ValuesContext } from "./context/ValuesContext";

import {
  small,
  mobile,
  mobileLand,
  tabletPo,
  smallTablet,
  desktop,
  large,
} from "../resp";

import Who from "./Who";
import What from "./What";
import Footer from "./Footer";
import { DatesContext } from "./context/DatesContext";
const initialStates = [
  "Hyderabad",
  "Bengalore",
  "Jaipur",
  "Gurugram",
  "Ahmedabad",
];
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://images.unsplash.com/photo-1606768667300-1b8400e992dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
  background-size: cover;
  opacity: 0.9;
`;
const Wrapper = styled.div`
  margin-top: 70px;
  // background-color: #f1f7e7;
  display: flex;
  width: 100vw;
  height: 80vh;
  flex-direction: column;
  padding-bottom: 15px;
  ${smallTablet({ marginTop: "50px" })};
  ${tabletPo({
    width: "95vw",
    height: "60vh",
    marginTop: "85px",
  })};
  ${desktop({ width: "95vw", height: "60vh", marginTop: "120px" })};
  ${large({ width: "95vw", height: "75vh", marginTop: "30px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  ${smallTablet({ alignItems: "flex-start" })};
  ${tabletPo({ alignItems: "flex-start" })};
  ${desktop({ alignItems: "flex-start" })};
  ${large({ alignItems: "flex-start" })}
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 80px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: white;
  $
  ${mobileLand({ marginTop: "30px" })};
  ${smallTablet({ marginTop: "10px" })};
  ${desktop({ width: "400px" })};
  ${large({ marginTop: "90px", width: "450px" })}
`;
const StyledText = styled.h1`
  font-size: 20px;
  text-align: center;
  line-height: 35px;
  letter-spacing: 2.5px;
  padding: 5px;
  font-family: "Comfortaa", cursive;

  ${tabletPo({
    fontSize: "22px",
    lineHeight: "40px",
    letterSpacing: "2.5px",
    paddingLeft: "10px",
    textAlign: "left",
  })};

  ${desktop({
    margin: "5px 3px",
    padding: "2px 7px",
    fontSize: "32px",
    letterSpacing: "3px",
    lineHeight: "50px",
    textAlign: "left",
  })};
  ${large({
    fontSize: "38px",
    lineHeight: "60px",
    marginBottom: "15px",
    textAlign: "left",
  })}
`;

const StyledSubText = styled.p`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 14px;
  text-align: center;
  line-height: 20px;
  letter-spacing: 1.3px;
  padding: 0px 5px;
  margin: 5px 3px;
  font-weight: 700;
  ${mobileLand({
    lineHeight: "26px",
    padding: "2px 4px",
  })};
  ${tabletPo({
    lineHeight: "26px",
    padding: "2px 7px",
    margin: "4px 3px",
    textAlign: "left",
    fontSize: "16px",
  })};
  ${desktop({
    letterSpacing: "1.5px",
    lineHeight: "28px",
    fontSize: "17px",
    textAlign: "left",
  })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const CoverImage = styled.img`
  margin-top: 40px;
  width: 200px;
  height: 200px;
  padding-bottom: 30px;
  ${tabletPo({
    width: "300px",
  })};
  ${desktop({
    width: "400px",
    height: "300px",
  })};
  ${large({
    width: "420px",
    height: "320px",
  })};
`;

const CitySelector = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 80px;
  margin: 10px 2px;
  padding: 10px 2px;
  gap: 10px;
  align-items: center;
  ${desktop({ height: "100px", alignItems: "left" })}
`;

const SelectTag = styled.select`
  width: 70vw;
  margin: 10px 2px;
  padding: 4px;
  cursor: pointer;
  border: 1px dashed #809a6f;
  outline: none;
  border-radius: 20px;
  color: black;
  ${smallTablet({ width: "30vw" })};
  ${tabletPo({ width: "20vw" })};
  ${desktop({ width: "15vw" })};
  ${large({ width: "20vw", padding: "6px" })};
  &:focus {
    background: #fdfaf6;
  }
`;

const Test = () => {
  const [val, setVal] = useContext(ValuesContext);
  const [newDate, setNewDate] = useContext(DatesContext);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    setIsLoading(false);
  };
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    getData();
  }, []);

  // const handleChange = (e) => {
  //   setSelected(e.target.value);
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({
      ...val,
      [name]: value,
    });
  };

  const renderUser = (
    <>
      <Container>
        <Wrapper>
          <Left>
            <TextContainer>
              <StyledText>
                Get started with your{" "}
                <span style={{ color: "#e88a1a" }}> RIDE</span> now!
              </StyledText>
              <StyledSubText>
                Make your everyday rides hassle-free with our rental services.
                Rent your vehicle now!
              </StyledSubText>

              <StyledSubText>
                <span style={{ color: "#CED89E" }}>
                  Select your state below
                </span>
              </StyledSubText>
              <SelectTag
                value={val.selected}
                name="selected"
                onChange={handleChange}
              >
                {initialStates.map((ele, i) => (
                  <option value={ele} key={i}>
                    {ele}
                  </option>
                ))}
              </SelectTag>
            </TextContainer>
          </Left>
          <Dates />
        </Wrapper>
      </Container>

      <Who />
      <What />
      <Footer />
    </>
  );

  return <div>{isLoading ? <Spinner /> : renderUser}</div>;
  // return <div>{renderUser}</div>;
};

export default Test;
