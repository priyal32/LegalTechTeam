import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Typography,
  TextField,
  Box,
  Paper,
  InputLabel,
  Divider,
  FormGroup,
  Checkbox,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import dayjs from "dayjs";

import Header from "../Layouts/Header";
import themeSubHeading from "../Layouts/Theme";
import DropDown from "../HelperFunctions/DropDown";
import RadioYesNo from "../HelperFunctions/RadioYesNo";
import CheckboxWithAdd from "../HelperFunctions/CheckBoxWithAdd";
import { SaveJSON, ReturnExistingInput } from "../HelperFunctions/formatJSON";
function PeersRoleModels() {
  const navigate = useNavigate();
  const themeTitle = themeSubHeading();

  const peerList = [
    {
      label: "Association with delinquent peers",
    },
    {
      label: "Involvement in gangs",
    },
    {
      label: "Enjoy or admire street guys in my neighborhood",
    },
    {
      label: "Enjoy or admire the gangsta lifestyle",
    },
  ]

  useEffect(() => {
    const existingData = ReturnExistingInput("peersAndRoleModels");
    if (existingData) {
      setFormData(existingData);
    }
  }, []); 

  const [formData, setFormData] = useState({
    associationWithPeers: "",
    involvementInGangs: "",
    enjoyAdmireStreetGuys: "",
    enjoyAdmireGangstaLifestyle: "",
    numberNeighborhoodCollege: {
      numberNeighborhoodCollege: "",
      notes: [],
    },
    numberNeighborhoodPrison: {
      numberNeighborhoodPrison: "",
      notes: [],
    },
    numberRelativesArrested: {
      numberRelativesArrested: "",
      notes: [],
    },
    neighborhoodArrests: "",
    neighborhoodDegrees: "",
    mentalHealthIssues: {
      mentalHealthIssues: "",
      notes: [],
    },
    affectedByMentalHealth: {
      affectedByMentalHealth: "",
      notes: [], 
    },
    otherRiskFactors: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleRadioChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: { ...formData[id], [id]: value }});
  };

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: { ...formData[name], [name]: value }});
  }

  const handleQuotesChange = (subSection, newQuotes) => {    
    setFormData({ ...formData, [subSection]: { ...formData[subSection], ["notes"]: newQuotes }});
  };

  const options = ["None", "1", "< 5", "More than 5"];

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
          <Typography variant="h6" gutterBottom sx={{ ...themeTitle }}>
            Peers and Role Models
          </Typography>

          {/*Check boxes*/}
          <Box
            sx={{ marginLeft: "10%", marginRight: "5%", paddingBottom: "30px" }}
          >
            <Grid container>
              <Grid item xs={6}>
                <InputLabel
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    fontWeight: 700,
                    marginBottom: 1, // Adjust spacing as needed
                  }}
                >
                  Other traumatic experiences
                </InputLabel>
              </Grid>
              <Grid container spacing={4} justifyContent="flex-end" alignItems="center">
                <Grid item>
                  <FormGroup>
                    {peerList.map((peer, index) => (
                      <CheckboxWithAdd
                        key={index}
                        label={peer.label}
                      />
                    ))}
                  </FormGroup>
                </Grid>
              </Grid>               
            </Grid>
          </Box>

          {/*Dropdown*/}
          <Box
            sx={{
              marginLeft: "10%",
              marginRight: "10%",
              paddingBottom: "30px",
            }}
          >
            <Grid container>
              <Grid container spacing={3}>
                <DropDown
                  options={options}
                  id={"numberNeighborhoodCollege"}
                  section={"peersAndRoleModels"}
                  question={"How many peers in your neighborhood went to college?"}
                  placeholder="Select an option"
                  value={formData.numberNeighborhoodCollege?.numberNeighborhoodCollege}
                  onChange={handleDropdownChange}
                  handleQuotesChange={newQuotes => handleQuotesChange("numberNeighborhoodCollege", newQuotes)}
                />
                <DropDown
                  options={options}
                  id={"numberNeighborhoodPrison"}
                  section={"peersAndRoleModels"}
                  question={"How many of them went to prison?"}
                  placeholder="Select an option"
                  value={formData.numberNeighborhoodPrison?.numberNeighborhoodPrison}
                  onChange={handleDropdownChange}
                  handleQuotesChange={newQuotes => handleQuotesChange("numberNeighborhoodPrison", newQuotes)}
                />
                <DropDown
                  options={options}
                  id={"numberRelativesArrested"}
                  section={"peersAndRoleModels"}
                  question={"How many relatives have been arrested?"}
                  placeholder="Select an option"
                  value={formData.numberRelativesArrested?.numberRelativesArrested}
                  onChange={handleDropdownChange}
                  handleQuotesChange={newQuotes => handleQuotesChange("numberRelativesArrested", newQuotes)}
                />
              </Grid>
            </Grid>
          </Box>

          {/*input one*/}
          <Box
            sx={{
              marginLeft: "10%",
              marginRight: "10%",
              paddingBottom: "30px",
            }}
          >
            <Grid item xs={12} sm={10}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  fontWeight: 700,
                }}
              >
                In your neighborhood, do most youths and adults get arrested?
              </InputLabel>

              <TextField
                required
                multiline={true}
                rows={3}
                id="neighborhoodArrests"
                label="Neighborhood arrests"
                fullWidth
                variant="outlined"
                value={formData.neighborhoodArrests}
                onChange={handleChange}
              />
            </Grid>
          </Box>

          {/*input two*/}
          <Box
            sx={{
              marginLeft: "10%",
              marginRight: "10%",
              paddingBottom: "30px",
            }}
          >
            <Grid item xs={12} sm={10}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  fontWeight: 700,
                }}
              >
                In your neighborhood, do most youths and adults have degrees?
              </InputLabel>

              <TextField
                required
                multiline={true}
                rows={3}
                id="neighborhoodDegrees"
                label="Neighborhood degrees"
                fullWidth
                variant="outlined"
                value={formData.neighborhoodDegrees}
                onChange={handleChange}
              />
            </Grid>
         

          <Divider orientation="horizontal" flexItem />

          <Typography variant="h6" gutterBottom sx={{ ...themeTitle }}>
            Any Other Risk Factors
          </Typography>


          <Grid container spacing={3}>
            <RadioYesNo 
                  id={"mentalHealthIssues"}
                  section={"peersAndRoleModels"}
                  question={"Ever experienced mental health issues?"} 
                  value={formData.mentalHealthIssues?.mentalHealthIssues}
                  onChange={handleRadioChange}
                  checkedValue={formData.mentalHealthIssues?.mentalHealthIssues}
                  handleQuotesChange={newQuotes => handleQuotesChange("mentalHealthIssues", newQuotes)}
                />
            <RadioYesNo 
              id={"affectedByMentalHealth"}
              section={"peersAndRoleModels"}
              question={"Ever been affected by mental health issues?"} 
              value={formData.affectedByMentalHealth?.affectedByMentalHealth}
              onChange={handleRadioChange}
              checkedValue={formData.affectedByMentalHealth?.affectedByMentalHealth}
              handleQuotesChange={newQuotes => handleQuotesChange("affectedByMentalHealth", newQuotes)}
            />
          </Grid>
          </Box>

          {/*last input*/}
          <Box
            sx={{
              marginLeft: "10%",
              marginRight: "10%",
              paddingBottom: "30px",
            }}
          >
            <Grid item xs={12} sm={10}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  fontWeight: 700,
                }}
              >
                Potential other risk factors experienced
              </InputLabel>

              <TextField
                required
                multiline={true}
                rows={3}
                id="otherRiskFactors"
                label="Other"
                fullWidth
                variant="outlined"
                value={formData.otherRiskFactors}
                onChange={handleChange}
              />
            </Grid>
          </Box>
        </Box>
        <Button variant="contained" onClick={() => navigate("/aceTwo")}>
          Previous
        </Button>
        <span style={{ marginLeft: "10px", marginRight: "10px" }}></span>
        <Button variant="contained" onClick={() => { SaveJSON(formData, "peersAndRoleModels"); navigate("/mental-health"); }}>
          Next
        </Button>
      </Paper>
    </div>
  );
}
export default PeersRoleModels;
