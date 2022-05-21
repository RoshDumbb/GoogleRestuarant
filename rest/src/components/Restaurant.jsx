/** @format */

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import celebrities from "../celebrities.json";
import Mockdata from "../data.json";
import { Avatar, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [{ Mockdata }];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const navigate = useNavigate();
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };


  
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          "https://images.pexels.com/photos/5946083/pexels-photo-5946083.jpeg" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <p
          style={{
            fontSize: "50px",
            fontWeight: "700",
            color: "darkgreen",
          }}
        >
          <i> Restaurants Near By You</i>
        </p>
        <div>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "500",
              marginRight: "340px",
            }}
          >
            <i> Name of Restaurant</i>
          </p>
        </div>
      </div>
      <FormControl sx={{ m: 1, width: 450 }}>
        <InputLabel id="demo-multiple-name-label">
          <Avatar
            alt="Remy Sharp"
            src="https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI="
          />
        </InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {Mockdata.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name.first_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* LASTNAME */}
      <p
        style={{
          fontSize: "20px",
          fontWeight: "500",
          marginRight: "340px",
        }}
      >
        <i> Address of Restaurant</i>
      </p>
      <FormControl sx={{ m: 1, width: 450 }}>
        <InputLabel id="demo-multiple-name-label">
          <Avatar
            alt="Remy Sharp"
            src="https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI="
          />
        </InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {Mockdata.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name.address}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div>
        <button
          onClick={() => navigate("/gog")}
          className="fluid ui button blue"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
