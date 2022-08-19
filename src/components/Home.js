import React, { useState, useEffect } from "react";
import styled from "styled-components";
import cover from "./../Images/coverpic.png";
import axios from "axios";
import Dates from "./Dates";
import {
  mobile,
  mobileLand,
  tabletPo,
  smallTablet,
  desktop,
  large,
} from "../responsive";
import Navbar from "./Navbar";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  margin-top: 100px;
  width: 95vw;
  height: 85vh;
  background-color: #f1f7e7;
  display: flex;
  flex-direction: row;
  ${mobile({ width: "85vw", height: "90vh", flexDirection: "column" })};
  ${mobileLand({ width: "85vw", height: "90vh", flexDirection: "column" })};
  ${smallTablet({ width: "85vw", height: "90vh", flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 80px;
  margin-top: 30px;
  ${mobile({ marginTop: "15px", alignItems: "center" })}
`;
const StyledText = styled.h1`
  font-size: 32px;
  letter-spacing: 3px;
  font-family: "Comfortaa", cursive;
  line-height: 50px;
  ${tabletPo({
    fontSize: "25px",
    lineHeight: "40px",
    letterSpacing: "2.5px",
    paddingLeft: "10px",
  })};
  ${mobile({
    fontSize: "20px",
    textAlign: "center",
    lineHeight: "35px",
    letterSpacing: "2.5px",
    padding: "5px",
  })},
  ${mobileLand({
    textAlign: "center",
  })};
  ${desktop({
    margin: "5px 3px",
    padding: "2px 7px",
  })}
`;

const StyledSubText = styled.p`
  font-size: 18px;
  letter-spacing: 1.5px;
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 700;
  line-height: 28px;
  ${mobile({
    fontSize: "14px",
    textAlign: "center",
    lineHeight: "20px",
    letterSpacing: "1.3px",
    padding: "0px 5px",
    margin: "5px 3px",
  })};
  ${mobileLand({
    textAlign: "center",
    lineHeight: "24px",
    padding: "2px 4px",
  })};
  ${tabletPo({
    lineHeight: "26px",
    padding: "2px 7px",
    margin: "5px 3px",
  })};
  ${desktop({
    margin: "5px 3px",
    padding: "2px 7px",
  })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const CoverImage = styled.img`
  margin-top: 40px;
  width: 450px;
  height: 350px;
`;

const Home = () => {
  var headers = new Headers();
  headers.append("X-CSCAPI-KEY", "API_KEY");

  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  const [states, setStates] = useState({});

  const fetchStates = async () => {
    const state = await axios(
      "https://api.countrystatecity.in/v1/countries/IN/states",
      requestOptions
    );
    //     fetch("https://api.countrystatecity.in/v1/countries/IN/states", requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetchStates();
  }, []);

  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <TextContainer>
              <StyledText>
                Get started with your <span style={{ color: "red" }}>RIDE</span>{" "}
                now!
              </StyledText>
              <StyledSubText>
                Make your everyday rides hassle-free with our rental services.
                Rent your vehicle now!
              </StyledSubText>
              <StyledSubText>
                <span style={{ color: "#FF0000" }}>Select your city below</span>
              </StyledSubText>
            </TextContainer>
          </Left>
          <Right>
            <CoverImage src={cover} alt="cover" />
          </Right>
        </Wrapper>
      </Container>
      <Dates />
    </>
  );
};

export default Home;
