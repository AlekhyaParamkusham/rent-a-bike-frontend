import React, { useState, useContext } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { ValuesContext } from "./context/ValuesContext";

const TimeComponent = () => {
  const [val, setVal] = useContext(ValuesContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({ ...val, [name]: value });
  };

  const WhiteBorderTextField = styled(TextField)`
    &label.Mui-focused {
      color: white;
    }
    &.MuiOutlinedInput-root {
      &.Mui-focused fieldset {
        border-color: white;
      }
    }
  `;

  return (
    <>
      <WhiteBorderTextField
        id="time"
        name="startTime"
        label="Start time"
        type="time"
        size="small"
        defaultValue={val.startTime}
        InputLabelProps={{
          shrink: true,
        }}
        step="3000"
        InputProps={{
          step: 3000,
        }}
        sx={{
          // input: { color: "white" },
          width: 110,
          // label: { color: "white" },
        }}
        onChange={handleChange}
      />

      <WhiteBorderTextField
        id="time"
        name="endTime"
        label="End time"
        type="time"
        size="small"
        defaultValue={val.endTime}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          step: 600, // 5 min
        }}
        sx={{
          // input: { color: "white" },
          width: 110,
          // label: { color: "white" },
        }}
        onChange={handleChange}
      />
    </>
  );
};

export default TimeComponent;
