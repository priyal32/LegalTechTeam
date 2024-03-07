import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Header from "../Layouts/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Grid,
  Typography,
  TextField,
  Box,
  Paper,
  InputLabel,
  Divider,
  MenuItem,
  FormControl,
  Select,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import dayjs from "dayjs";
import themeSubHeading from "../Layouts/Theme";
import AddQuotes from "./AddQuotes";
function RadioYesNo(props) {
  const [answer1, setAnswer1] = useState("");

  const handleAnswer1Change = (event) => {
    setAnswer1(event.target.value);
  };
  return (
    <>
      {/*Question 1 text*/}

      <Grid item xs={12} sm={8}>
        <InputLabel
          sx={{
            display: "flex",
            justifyContent: "left",
            fontWeight: 700,
          }}
        >
          {props.question}
        </InputLabel>
      </Grid>

      {/*Yes/No Radio buttons*/}
      <Grid item xs={12} sm={4} style={{ display: "flex" }}>
        <RadioGroup
          row
          aria-label="answer"
          name="answer"
          value={answer1}
          onChange={handleAnswer1Change}
        >
          <FormControlLabel value="no" control={<Radio />} label="No" />
          <FormControlLabel value="yes" control={<Radio />} label="yes" />
        </RadioGroup>
        <AddQuotes />
      </Grid>
    </>
  );
}

export default RadioYesNo;
