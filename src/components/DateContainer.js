import React, { useState, useContext } from "react";
import moment from "moment";
import styled from "styled-components";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { ImCalendar } from "react-icons/im";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { DatesContext } from "./context/DatesContext";
import {
  mobile,
  mobileLand,
  tabletPo,
  smallTablet,
  desktop,
  large,
} from "../resp";

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

const Heading = styled.h5`
  font-family: "Comfortaa";
  font-size: 10px;
  margin: 6px;
  padding: 3px;
  line-height: 14px;
  ${mobileLand({ fontSize: "11px" })};
  ${tabletPo({ fontSize: "11.5px" })};
  ${large({ fontSize: "12px", padding: "2px" })}
`;

const ModifiedDate = styled(DateRange)`
  position: absolute;
  font-size: 9px;
  width: 270px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9900;
  margin-bottom: 10px;
  ${mobileLand({ fontSize: "10px", width: "280px" })};
  ${smallTablet({ fontSize: "10.2px", width: "280px" })};
  ${tabletPo({ fontSize: "10.8px", width: "300px" })};
  ${desktop({ fontSize: "11.5px", width: "320px" })};
  ${large({ fontSize: "12px", width: "340px" })}
`;

const DateContainer = () => {
  const [newDate, setNewDate] = useContext(DatesContext);
  const [openDate, setOpenDate] = useState(false);

  const onChange = (ranges) => {
    if (
      moment(ranges.startDate).format("dd/MM/yyyy") !==
      moment(ranges.endDate).format("dd/MM/yyyy")
    ) {
      setOpenDate(false);
    } else if (ranges.startDate === "" && ranges.endDate === "") {
      setOpenDate(false);
    }
  };
  const handleOnChange = (ranges) => {
    const { selection } = ranges;
    onChange(selection);

    setNewDate([selection]);
  };

  return (
    <>
      <ImCalendar onClick={() => setOpenDate(!openDate)}></ImCalendar>
      <Heading>Start and End Date </Heading>
      {/* <HeaderSearchText>{`${format(
        date[0].startDate,
        "dd/MM/yyyy"
      )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</HeaderSearchText> */}

      <HeaderSearchText>{`${format(
        newDate[0].startDate,
        "dd/MM/yyyy"
      )} to ${format(newDate[0].endDate, "dd/MM/yyyy")}`}</HeaderSearchText>
      {openDate && (
        <ModifiedDate
          onChange={handleOnChange}
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          ranges={newDate}
          minDate={new Date()}
          autoClose={true}
        />
      )}
    </>
  );
};

export default DateContainer;
