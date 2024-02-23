import * as React from "react";
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
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

import dayjs from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Header from "../Layouts/Header";
import themeSubHeading from "../Layouts/Theme";
function Demographics() {
  const navigate = useNavigate();
  const themeTitle = themeSubHeading();

  // gender selection state
  const [gender, setGender] = useState("");
  const [otherGender, setOtherGender] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleOtherGenderChange = (event) => {
    setOtherGender(event.target.value);
  };

  return (
    <div>
      <Header />

      <Paper
        elevation={3}
        sx={{
          marginRight: "15%",
          marginLeft: "15%",
          paddingBottom: "5%",
          fontFamily: "Noto Sans",
        }}
      >
        <Box sx={{ paddingRight: 5, paddingLeft: 5, paddingBottom: 5 }}>
          {/*Title of section: Demographics*/}
          <Typography variant="h6" gutterBottom sx={{ ...themeTitle }}>
            Demographics
          </Typography>

          {/*First Name text*/}
          <Box
            sx={{
              marginRight: "10%",
              marginLeft: "10%",
              paddingBottom: "40px",
              justifyContent: "left",
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={2}>
                <InputLabel
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    fontWeight: 700,
                  }}
                >
                  First Name
                </InputLabel>
              </Grid>

              {/*First Name text field*/}
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="firstName"
                  label="First Name"
                  fullWidth
                  size="small"
                  variant="outlined"
                />
              </Grid>

              {/*Last Name text*/}

              <Grid item xs={12} sm={2}>
                <InputLabel
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    fontWeight: 700,
                  }}
                >
                  Last Name
                </InputLabel>
              </Grid>

              {/*Last Name text field*/}
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="lastName"
                  label="Last Name"
                  fullWidth
                  size="small"
                  variant="outlined"
                />
              </Grid>

              {/*Case Number*/}
              <Grid item xs={12} sm={2}>
                <InputLabel
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    fontWeight: 700,
                  }}
                >
                  Case Number
                </InputLabel>
              </Grid>

              {/*Case Number Text Field*/}
              <Grid item xs={12} sm={10}>
                <TextField
                  required
                  id="caseNumber"
                  label="Case Number"
                  fullWidth
                  size="small"
                  variant="outlined"
                />
              </Grid>

              {/*Date of Birth*/}
              <Grid item xs={12} sm={2}>
                <InputLabel
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    fontWeight: 700,
                  }}
                >
                  Date of Birth
                </InputLabel>
              </Grid>

              {/*Date of Birth Selector*/}

              <Grid item xs={12} sm={2}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="DOB"
                    slotProps={{
                      textField: {
                        helperText: "MM/DD/YYYY",
                      },
                    }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={2}></Grid>

              {/*Gender Radio buttons*/}
              <Grid item xs={12} sm={6}>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  value={gender}
                  onChange={handleGenderChange}
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </Grid>

              {/*Other Gender Input*/}
              <Grid item xs={12} sm={2}>
                {gender === "other" && (
                  <TextField
                    label="Other Gender"
                    variant="outlined"
                    value={otherGender}
                    onChange={handleOtherGenderChange}
                  />
                )}
              </Grid>
            </Grid>
          </Box>

          {/*Divider*/}

          <Divider orientation="horizontal" flexItem />

          {/*Section title: Background*/}

          <Typography variant="h6" gutterBottom sx={{ ...themeTitle }}>
            Background
          </Typography>

          {/*Background Text Field*/}
          <Box
            sx={{
              marginLeft: "10%",
              marginRight: "10%",
              paddingBottom: "40px",
            }}
          >
            <Grid item xs={12} sm={10}>
              <TextField
                required
                multiline={true}
                rows={15}
                id="background"
                label="Background"
                fullWidth
                variant="outlined"
              />
            </Grid>
          </Box>
        </Box>
        <Button variant="contained" onClick={() => navigate("/familyDynamics")}>
          Next
        </Button>
      </Paper>
    </div>
  );
}

export default Demographics;
