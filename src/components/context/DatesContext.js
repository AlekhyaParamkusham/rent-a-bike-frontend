import React, { createContext, useState } from "react";

export const DatesContext = createContext();

export const DatesProvider = (props) => {
  const [newDate, setNewDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // console.log(newDate);

  return (
    <DatesContext.Provider value={[newDate, setNewDate]}>
      {props.children}
    </DatesContext.Provider>
  );
};
