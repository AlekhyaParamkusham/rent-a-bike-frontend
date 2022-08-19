import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import {
  mobile,
  mobileLand,
  tabletPo,
  smallTablet,
  desktop,
  large,
} from "../resp";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { ValuesContext } from "./context/ValuesContext";

import { useLocation, Link } from "react-router-dom";
import Spinner from "./Spinner";
import locationImg from "./../Images/location.png";
import model from "./../Images/model.png";
import mileage from "./../Images/mileage.png";
import price from "./../Images/price.png";
import man from "./../Images/man.png";
import woman from "./../Images/woman.png";
import map from "./../Images/map-location.png";
import gas from "./../Images/gas.png";
import moto from "./../Images/moto-logo.png";
import Footer from "./Footer";

const Outer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //   background-color: #eeeeee;
  height: 100%;
`;
const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  width: 85vw;
  height: 99vh;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 10px;
  ${tabletPo({
    width: "95vw",
    height: "75vh",
    marginTop: "50px",
  })};
  ${desktop({ height: "85vh" })};
  ${large({ height: "100vh" })}
`;
const Top = styled.div`
  display: flex;
  //   align-items: center;
  //   justify-content: center;
  flex-direction: column;
  padding-bottom: 20px;
  gap: 10px;
  ${smallTablet({ flexDirection: "row" })};
  ${tabletPo({ flexDirection: "row" })};
  ${desktop({ flexDirection: "row" })};
  ${large({ flexDirection: "row" })};
`;
const SingleLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  //   padding: 5px 0;
  flex: 2;
`;
const SingleRight = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  height: 100%;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  //   justify-content: center;
  flex-direction: column;
  background: #f7f7e8;
  padding: 20px;
  height: 85%;
  // ${smallTablet({ padding: "4px", height: "85%" })};
  // ${tabletPo({ height: "65%" })};
  // ${large({ height: "70%" })}
`;

const SingleDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  //   background-color: #eeeeee;
  padding: 10px;
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Title = styled.h3`
  margin: 10px 5px;
  padding: 10px;
  font-size: 18px;
  font-family: "Bebas Neue", cursive;
  letter-spacing: 1.5px;
  font-weight: 400;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 90%;
  padding: 5px;
  flex: 1;
  ${desktop({ width: "80%", justifyContent: "space-evenly" })}
`;

const Sub = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const IconSub = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  width: 80px;
  height: 40px;
  gap: 5px;
`;

const Icon = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  flex: 1;
`;

const Font = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  letter-spacing: 1.2px;
  flex: 1;
  color: black;
  line-height: 24px;
  font-family: "PT Sans Narrow", sans-serif;
  ${large({ fontSize: "13px" })}
`;

const LocContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const LocFont = styled(Font)`
  flex: none;
  margin: 7px;
`;
const ProfileContainer = styled(ImageContainer)`
  height: 20vh;
  flex: 0;
`;
const Profile = styled(Image)`
  width: 100%;
  height: 20vh;
`;
const Desc = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5px;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  //   height: 30vh;
`;

const WhoHeading = styled.h1`
  font-size: 20px;
  letter-spacing: 6px;
  font-weight: 500;
  font-family: "Bebas Neue", cursive;
  padding-bottom: 5px;
  color: red;
  margin: 5px 0;
  ${mobileLand({ fontSize: "25px" })};
  ${desktop({ fontSize: "30px" })}
`;

const Booking = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  cursor: pointer;
  background: #4e9f3d;
  color: white;
  border-radius: 5px;
  font-family: "Bebas Neue", cursive;
  border: none;
  letter-spacing: 2px;
`;
const Single = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  const location = useLocation();
  const bikeId = location.pathname.split("/")[2];

  const [isLoading, setIsLoading] = useState(true);
  const API_URL = "https://rent-a-bike-server.herokuapp.com";

  const [bikeData, setBikeData] = useState([]);
  const [dealerVal, setDealerVal] = useState([]);
  const [val] = useContext(ValuesContext);

  const getBike = async () => {
    const response = await axios.get(`${API_URL}/bike/${bikeId}`);
    const dName = response.data.data.bike.dealerInfo;
    const dealerData = await axios.get(`${API_URL}/dealer?dealerName=${dName}`);

    setBikeData([response.data.data.bike]);
    setDealerVal(dealerData.data.data.filtered);
    setIsLoading(false);
  };

  useEffect(() => {
    getBike();
  }, []);

  const renderData = (
    <>
      <Outer>
        {bikeData.map((ele, i) => (
          <Wrapper key={i}>
            <Top>
              <SingleLeft>
                <ImageContainer data-aos="zoom-in">
                  <Image
                    style={{
                      flex: 0,
                      boxShadow: "5px 8px 8px #888888",
                      border: "1px solid #EEEEEE",
                    }}
                    src={ele.modelImage}
                  ></Image>
                  <Title>{ele.modelName}</Title>
                </ImageContainer>
                <IconContainer>
                  <Sub>
                    <IconSub>
                      <Icon src={moto}></Icon>
                      <Font>{ele.vehicleType}</Font>
                    </IconSub>
                    <IconSub>
                      <Icon src={locationImg}></Icon>
                      <Font>{ele.location}</Font>
                    </IconSub>
                  </Sub>
                  <Sub>
                    <IconSub>
                      <Icon src={model}></Icon>
                      <Font>{ele.year}</Font>
                    </IconSub>
                    <IconSub>
                      <Icon src={mileage}></Icon>
                      <Font>{ele.mileage}cc.</Font>
                    </IconSub>
                  </Sub>
                </IconContainer>
              </SingleLeft>

              <Center>
                <IconSub>
                  <Icon src={price}></Icon>
                  <Font>{val.hours * ele.basePrice}/-</Font>
                </IconSub>
                <IconSub>
                  <Icon src={gas}></Icon>
                  <Font>{ele.fuelType}</Font>
                </IconSub>

                <Booking>
                  <Link
                    to={`/booking/${ele._id}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Book Now!
                  </Link>
                </Booking>
              </Center>

              <SingleRight>
                <Right
                  style={{
                    boxShadow: "5px 8px 8px #888888",
                    border: "1px solid #EEEEEE",
                  }}
                >
                  <ProfileContainer>
                    {dealerVal[0].gender === "female" ? (
                      <Profile src={woman} />
                    ) : (
                      <Profile src={man} />
                    )}
                  </ProfileContainer>
                  <LocFont style={{ fontSize: "15px", fontWeight: 600 }}>
                    {dealerVal[0].dealerName}
                  </LocFont>
                  <LocFont style={{ letterSpacing: "2px" }}>
                    <span style={{ fontSize: "15px", color: "red" }}>
                      {dealerVal[0].rating}
                    </span>
                    /5
                  </LocFont>
                  <LocContainer>
                    <ImageContainer>
                      <Image
                        src={map}
                        style={{ height: "20vh", opacity: 0.6 }}
                      />
                    </ImageContainer>

                    <LocFont
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        fontWeight: 600,
                        letterSpacing: "1.5px",
                      }}
                    >
                      {dealerVal[0].dealerLocation}
                    </LocFont>
                  </LocContainer>
                  <LocFont>Joined in {dealerVal[0].joinedYear}</LocFont>
                </Right>
              </SingleRight>
            </Top>
            <SingleDescription>
              <Desc>
                <WhoHeading>Description</WhoHeading>
                <Font>{ele.description}</Font>
              </Desc>
            </SingleDescription>
            <Footer />
          </Wrapper>
        ))}
      </Outer>
    </>
  );

  return <div>{isLoading ? <Spinner /> : renderData}</div>;
};

export default Single;
