import React, { createContext, useState, useReducer } from "react";

export const ValuesContext = createContext();

export const ValuesProvider = (props) => {
  const [val, setVal] = useState({
    selected: "Hyderabad",
    startTime: "08:00",
    endTime: "09:00",
    hours: 1,
  });

  return (
    <ValuesContext.Provider value={[val, setVal]}>
      {props.children}
    </ValuesContext.Provider>
  );
};
