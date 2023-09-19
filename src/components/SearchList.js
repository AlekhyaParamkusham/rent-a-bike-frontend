import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  mobile,
  mobileLand,
  tabletPo,
  smallTablet,
  desktop,
  large,
} from "../resp";
import { ValuesContext } from "./context/ValuesContext";
import { DatesContext } from "./context/DatesContext";

import { GoLocation } from "react-icons/go";
import { AiOutlineEye } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { IoBagAddOutline } from "react-icons/io5";
import { ImCalendar } from "react-icons/im";
import DateContainer from "./DateContainer";
import TimeComponent from "./TimeComponent";
import axios from "axios";
import Spinner from "./Spinner";
import { format } from "date-fns";
import moment from "moment";

const initialStates = [
  "Hyderabad",
  "Bengalore",
  "Jaipur",
  "Gurugram",
  "Mysore",
  "Ahmedabad",
];

const Outer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  margin-top: 50px;
  // background-color: #f1f7e7;
  display: flex;
  width: 85vw;
  height: 100vh;
  flex-direction: column;
  gap: 20px;
  ${tabletPo({
    width: "95vw",
    height: "75vh",
    marginTop: "50px",
  })};
  ${desktop({ height: "85vh" })};
  ${large({ height: "80vh" })}
`;
const Left = styled.div`
  flex: 1;
  background: #f1eee9;
  position: sticky;
  z-index: 10;
  padding: 10px;
`;
const Result = styled.div`
  display: flex;
  align-items: center;
  // justify-content: space-evenly;
  flex-direction: column;
  gap: 20px;
  ${desktop({ justifyContent: "space-evenly", flexDirection: "row" })};
`;

const LocDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DateDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed #ebd8c3;
  border-radius: 10px;
  padding: 0px 5px;
`;
const TimeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Modify = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  font-family: "Bebas Neue", cursive;
  border-radius: 5px;
  font-size: 14px;
  letter-spacing: 2px;
  border: none;
  background: #ff6b6b;
  color: #ffffde;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  padding: 10px;
  margin: 10px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
  ${smallTablet({ gridTemplateColumns: "repeat(2, 1fr)", gap: "30px" })};
  ${tabletPo({ gridTemplateColumns: "repeat(2, 1fr)", gap: "30px" })};
  ${desktop({ gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" })}
`;
const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  z-index: 1;
  border: 1px dashed #99a799;
  transition: transform 0.1s ease-in-out;
  opacity: 0.9;
  animation-timing-function: ease-in-out;
  -webkit-animation-timing-function: ease-in-out;
  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2;
  flex-direction: column;
  background-color: white;
`;
const ModifiedImage = styled.img`
  // width: 100%;
  // flex-grow: 1;
  // object-fit: cover;
  width: 200px;
  height: 200px;
  object-fit: scale-down;
`;
const TextContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 13px;
  color: #f9f3ee;
  padding: 15px 0;
  width: 100%;
  background-color: #413f42;
`;
const Title = styled.h3`
  margin: 10px 5px;
  padding: 10px;
  font-size: 14px;
  font-family: "Bebas Neue", cursive;
  letter-spacing: 1.5px;
  font-weight: 400;
`;

const BookingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
  font-size: 12px;
  color: #251d3a;
  padding: 10px 0;
  width: 100%;
  letter-spacing: 1px;
  background: #5f7161;
  color: white;
  font-family: "PT Sans Narrow", sans-serif;
`;
const Book = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  &:hover {
    color: #ecb390;
  }
`;

const View = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  &:hover {
    color: #f7ec09;
  }
`;

const Font = styled.p`
  margin: 2px 5px;
`;
const Location = styled.div`
  background: white;
  border: none;
  padding: 3px 7px;
  width: -moz-fit-content;
  width: fit-content;
  font-size: 11px;
  color: black;
  letter-spacing: 0.7px;
  border-radius: 10px;
  font-family: "PT Sans Narrow", sans-serif;
`;

const Loc = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin: 5px 0;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin: 5px 0;
  font-size: 10px;
  letter-spacing: 1.5px;
  font-family: "Bebas Neue", cursive;
  font-weight: 200;
  color: #d0c9c0;
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d0c9c0;
  border-radius: 10px;
  margin: 5px 0;
  font-family: "Bebas Neue", cursive;
  letter-spacing: 1.5px;
  font-size: 14px;
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
  ${smallTablet({ width: "50vw" })};
  ${tabletPo({ width: "40vw" })};
  ${desktop({ width: "30vw" })};
  ${large({ width: "20vw", padding: "6px" })};
  &:focus {
    background: #fdfaf6;
  }
`;

const First = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  ${tabletPo({ flexDirection: "row" })};
  ${desktop({ flexDirection: "row" })};
  ${large({ flexDirection: "row" })};
`;

const SearchList = () => {
  const [val, setVal] = useContext(ValuesContext);
  const [newDate, setNewDate] = useContext(DatesContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({
      ...val,
      [name]: value,
    });
  };
  const [isLoading, setIsLoading] = useState(true);
  const [bikes, setBikes] = useState([]);
  const total = Math.abs(newDate[0].endDate - newDate[0].startDate) / 36e5 + 24;
  const start = parseInt(val.startTime.split(":")[0]);
  const end = parseInt(val.endTime.split(":")[0]);
  const finalHrs = total - (start + (24 - end));

  // console.log(total, start, end, finalHrs);

  const API_URL = "https://rent-a-bike-backend.vercel.app";
  const getData = async () => {
    setVal({
      ...val,
      hours: finalHrs,
    });
    const response = await axios.get(
      `${API_URL}/booking?city=${val.selected}&isAvailable=true`
    );
    setBikes([...response.data.data.filtered]);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const modifyFields = () => {
    getData();
  };

  const renderSearch = (
    <>
      <Outer>
        <Wrapper>
          <Left>
            <Result>
              <First>
                <LocDiv>
                  <GoLocation />
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
                </LocDiv>
                <DateDiv>
                  <DateContainer onChange={setNewDate(newDate)} />
                </DateDiv>
              </First>
              <First>
                <TimeDiv>
                  <TimeComponent />
                </TimeDiv>
                <Modify onClick={modifyFields}>Modify</Modify>
              </First>
            </Result>
          </Left>
          <Right>
            {bikes.map((ele, i) => (
              <Card key={i}>
                <ImageContainer>
                  <Title>{ele.modelName}</Title>
                  <ModifiedImage src={ele.modelImage} />
                </ImageContainer>

                <TextContainer>
                  <Price>
                    <BiRupee />
                    <Font>{val.hours * ele.basePrice}/-</Font>
                  </Price>

                  <Loc>
                    <GoLocation />
                    <Location>{ele.location}</Location>
                  </Loc>
                  <Details>
                    <Font>{ele.chargePerHr}/hr</Font>
                    <Font>Excess {ele.excessKms}/km</Font>
                  </Details>
                </TextContainer>
                <BookingContainer>
                  <View>
                    <AiOutlineEye />
                    <Link
                      to={`/bike/${ele._id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      View Details
                    </Link>
                  </View>
                  <Book>
                    <IoBagAddOutline />
                    <Link
                      to={`/booking/${ele._id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Book Now
                    </Link>
                  </Book>
                </BookingContainer>
              </Card>
            ))}
          </Right>
        </Wrapper>
      </Outer>
    </>
  );
  return <div>{isLoading ? <Spinner /> : renderSearch}</div>;
  {
    /* <Card>
              <ImageContainer>
                <Title>Classic 350 BS6</Title>
                <ModifiedImage src="https://www.rentrip.in/uploads/products/bike/500x350/593184IMG_1652185400.jpg" />
              </ImageContainer>

              <TextContainer>
                <Price>
                  <BiRupee />
                  <Font>99/-</Font>
                </Price>

                <Loc>
                  <GoLocation />
                  <Location>Vinayak Nagar</Location>
                </Loc>
                <Details>
                  <Font>49kms Free</Font>
                  <Font>Excess 2/km</Font>
                </Details>
              </TextContainer>
              <BookingContainer>
                <Link
                  to="/single"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <View>
                    <AiOutlineEye />
                    View Details
                  </View>
                </Link>

                <Book>
                  <IoBagAddOutline />
                  Book Now
                </Book>
              </BookingContainer>
            </Card>
            <Card>
              <ImageContainer>
                <Title>Classic 350 BS6</Title>
                <ModifiedImage src="https://www.rentrip.in/uploads/products/bike/500x350/593184IMG_1652185400.jpg" />
              </ImageContainer>

              <TextContainer>
                <Price>
                  <BiRupee />
                  <Font>99/-</Font>
                </Price>

                <Loc>
                  <GoLocation />
                  <Location>Vinayak Nagar</Location>
                </Loc>
                <Details>
                  <Font>49kms Free</Font>
                  <Font>Excess 2/km</Font>
                </Details>
              </TextContainer>
              <BookingContainer>
                <View>
                  <AiOutlineEye />
                  View Details
                </View>
                <Book>
                  <IoBagAddOutline />
                  Book Now
                </Book>
              </BookingContainer>
            </Card>
            <Card>
              <ImageContainer>
                <Title>Classic 350 BS6</Title>
                <ModifiedImage src="https://www.rentrip.in/uploads/products/bike/500x350/593184IMG_1652185400.jpg" />
              </ImageContainer>

              <TextContainer>
                <Price>
                  <BiRupee />
                  <Font>99/-</Font>
                </Price>

                <Loc>
                  <GoLocation />
                  <Location>Vinayak Nagar</Location>
                </Loc>
                <Details>
                  <Font>49kms Free</Font>
                  <Font>Excess 2/km</Font>
                </Details>
              </TextContainer>
              <BookingContainer>
                <View>
                  <AiOutlineEye />
                  View Details
                </View>
                <Book>
                  <IoBagAddOutline />
                  Book Now
                </Book>
              </BookingContainer>
            </Card> */
  }
};
export default SearchList;
