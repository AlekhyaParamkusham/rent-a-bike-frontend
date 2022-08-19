import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
import { DatesContext } from "./context/DatesContext";
import { ValuesContext } from "./context/ValuesContext";
import styled from "styled-components";
import moment from "moment";
import { format } from "date-fns";
import { ToastContainer, toast } from "react-toastify";
import { UserContext } from "./context/UserContext";
import Login from "./Login";
import "react-toastify/dist/ReactToastify.css";
import {
  small,
  mobile,
  mobileLand,
  tabletPo,
  smallTablet,
  desktop,
  large,
} from "../resp";

const Outer = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 8px;
  ${desktop({ marginTop: "25px" })};
`;

const WhoHeading = styled.h1`
  font-size: 18px;
  letter-spacing: 4px;
  font-weight: 500;
  font-family: "Bebas Neue", cursive;
  padding-bottom: 5px;
  color: red;
  margin: 5px;
  text-align: center;
  ${mobileLand({ fontSize: "20px" })};
  ${desktop({ fontSize: "20px" })}
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  ${tabletPo({ flexDirection: "row" })};
  ${desktop({ flexDirection: "row" })};
  ${large({ flexDirection: "row" })};
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  //   background-color: #eeeeee;
  padding: 10px;
  flex: 2;
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

const WhoText = styled.h5`
  font-size: 11px;
  line-height: 20px;
  letter-spacing: 1px;
  padding: 3px;
  font-family: "Comfortaa", cursive;
  color: red;

  ${desktop({
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "1.5px",
  })};
  ${large({ lineHeight: "26px" })}
`;

const WhoButton = styled.button`
  margin-bottom: 20px;
  background-color: #6d8b74;
  padding: 15px;
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

const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 10px;
  gap: 20px;
`;
const RightCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  border: 1px dashed black;
  margin-bottom: 10px;
`;

const Font = styled.p`
  margin: 8px 5px;
  font-size: 12px;
  font-family: "Pompiere", cursive;
  letter-spacing: 1.7px;
  font-weight: 600;
  text-align: center;
  ${large({ fontSize: "14px" })}
`;

const Booking = () => {
  const location = useLocation();
  const history = useHistory();
  const bikeId = location.pathname.split("/")[2];
  const API_URL = "https://rent-a-bike-server.herokuapp.com";

  const [bikeData, setBikeData] = useState([]);
  const [dealerVal, setDealerVal] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [val] = useContext(ValuesContext);
  const [newDate] = useContext(DatesContext);
  const [user] = useContext(UserContext);

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

  const handleBooking = async (bikeId) => {
    axios
      .patch(`${API_URL}/booking/${bikeId}`)
      // axios(config)
      .then((response) => {
        toast.success("Bike booked successfully!");
        // console.log(response);
        setTimeout(history.push("/thankyou"), 10000);
      })
      .catch(function (error) {
        toast.error(" Check request again!");
      });
  };

  return (
    <>
      <ToastContainer />
      {user == true ? (
        <Outer>
          <WhoHeading>Please find your booking details below!</WhoHeading>
          {bikeData.map((ele, index) => (
            <Inner key={index}>
              <ImageContainer>
                <Image src={ele.modelImage} />
                <Title>{ele.modelName}</Title>
              </ImageContainer>

              <Right>
                <WhoText>Booking Info</WhoText>
                <RightCon>
                  <Font>{val.selected} </Font>

                  <Font>
                    {`${format(newDate[0].startDate, "dd/MM/yyyy")} ${
                      val.startTime
                    }hrs to ${format(newDate[0].endDate, "dd/MM/yyyy")} ${
                      val.endTime
                    }`}
                    hrs
                  </Font>

                  <Font>Price - {val.hours * ele.basePrice}/-</Font>
                </RightCon>
                <WhoButton onClick={() => handleBooking(ele._id)}>
                  Confirm Booking
                </WhoButton>
              </Right>
            </Inner>
          ))}
        </Outer>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Booking;
