import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import bikes from "./../Images/bikes.jpg";
import {
  mobile,
  mobileLand,
  tabletPo,
  smallTablet,
  desktop,
  large,
} from "../resp";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  width: 90vw;
  height: 40vh;
  ${tabletPo({ height: "50vh" })};
  ${desktop({ width: "95vw", height: "55vh" })};
  ${large({ width: "95vw", height: "60vh" })};
`;

const Image = styled.img`
  object-fit: cover;
  opacity: 0.7;
  width: 90vw;
  height: 40vh;
  ${tabletPo({ height: "50vh" })};
  ${desktop({ width: "95vw", height: "55vh" })};
  ${large({ width: "95vw", height: "60vh" })};
`;

const HeaderCon = styled.div`
  margin-top: 20px;
  padding: 8px;
  border: 2px dotted #78938a;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 20px;
  ${smallTablet({ width: "80px" })};
  ${tabletPo({ width: "100px", height: "25px" })};
  ${large({ width: "120px", height: "28px" })};
`;
const Header = styled.p`
  font-size: 18px;
  color: #ff4949;
  opacity: 1.2;
  font-family: "Bebas Neue", cursive;
  letter-spacing: 1px;
  ${smallTablet({ fontSize: "20px", letterSpacing: "1.5px" })};
  ${tabletPo({ fontSize: "22px", letterSpacing: "2px" })};
  ${large({ fontSize: "25px", letterSpacing: "2.5px" })};
`;

const TextContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5px 15px;
  width: 70vw;
  ${tabletPo({ width: "80vw" })}
`;

const Text = styled.p`
  font-family: "Comfortaa", cursive;
  text-align: center;
  font-size: 13px;
  line-height: 22px;
  letter-spacing: 0.2px;
  margin: 10px 0;
  ${tabletPo({ margin: "8px 0" })};
  ${desktop({ margin: "6px 0" })};
  ${large({ fontSize: "15px", letterSpacing: "0.5px" })}
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

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Container>
        <ImageContainer>
          <Image data-aos="zoom-in" src={bikes} />
        </ImageContainer>
        <HeaderCon>
          <Header>ABOUT US</Header>
        </HeaderCon>
        <TextContainer>
          <Text>
            Rent-A-Bike aims at providing comfortable travelling experience at a
            budget friendly cost to everyone.
          </Text>
          <Text>
            With an easy pick and drop vehicle service, one can travel at the
            ease of an own vehicle.
          </Text>
          <Text>
            We have services providing for about 36 states across India serving
            various locations, within the riders reach.
          </Text>
        </TextContainer>
        <TextContainer>
          <Text style={{ color: "red" }}>
            Check out the wide range of vehicles
          </Text>
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
        </TextContainer>
      </Container>
      <Footer />
    </>
  );
};

export default About;
