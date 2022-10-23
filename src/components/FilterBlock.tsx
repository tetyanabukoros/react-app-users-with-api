import React from "react";
import {
  Box,
  Chip,
  FormControl,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Slider,
  Stack,
} from "@mui/material";

interface Props {
  searchQuery: string;
  setSearchQuery: (_: string) => void;
  ageValue: number[];
  handleChangeAgeValue: (event: Event, newValue: number | number[]) => void;
  male: boolean;
  female: boolean;
  handleClickMale: () => void;
  handleClickFemale: () => void;
  select: string;
  handleChangeSelect: (event: SelectChangeEvent) => void;
}

export const FilterBlock: React.FC<Props> = (props) => {
  const {
    searchQuery,
    setSearchQuery,
    ageValue,
    handleChangeAgeValue,
    male,
    female,
    handleClickMale,
    handleClickFemale,
    select,
    handleChangeSelect
  } = props;

  function valuetext(value: number) {
    return `${value}`;
  }

  return (
    <Box mr={8.5}>
      <h2 className="filterBlock__title">Filter</h2>
      <Paper>
        <FormControl
          variant="standard"
          style={{ padding: "27px" }}
        >
          <p
            className="filterBlock__label filterBlock__label-name"
          >
            Name
          </p>
          <input
            className="filterBlock__input"
            id="outlined-basic"
            placeholder="Search by name"
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event?.target.value)}
          />
          <p
            className="filterBlock__label filterBlock__label-age"
          >
            Age
          </p>
          <Slider
            getAriaLabel={() => "Age range"}
            value={ageValue}
            onChange={handleChangeAgeValue}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
          <p className="filterBlock__rangeTitle">
            {ageValue[0]} - {ageValue[1]}
          </p>
          <p className="filterBlock__label filterBlock__label-gender">
            Gender
          </p>
          <Stack mb={3} direction="row" spacing={3}>
            <Chip
              sx={{
                color: male ? "#52228C" : "#333",
                border: male ? "1px solid #52228C" : "1px solid #121212",
                backgroundColor: male ? "#ECD3FA" : "FFF",
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "21px",
              }}
              label="Male"
              variant="outlined"
              onClick={handleClickMale}
            />
            <Chip
              sx={{
                color: female ? "#52228C" : "#333",
                border: female ? "1px solid #52228C" : "1px solid #121212",
                backgroundColor: female ? "#ECD3FA" : "FFF",
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "21px",
              }}
              label="Female"
              variant="outlined"
              onClick={handleClickFemale}
            />
          </Stack>
          <p className="filterBlock__label filterBlock__label-sort">
            Sort by
          </p>
          <Select
            style={{
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#121212",
              outline: "1px solid #121212",
              borderRadius: "12px",
            }}
            variant="outlined"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={"name"}
            value={select}
            onChange={(event) => handleChangeSelect(event)}
          >
            <MenuItem
              style={{ fontFamily: "Poppins" }}
              value={"name"}
            >
              Name
            </MenuItem>
            <MenuItem
              style={{ fontFamily: "Poppins" }}
              value={"birth"}
            >
              Date of birth
            </MenuItem>
            <MenuItem
              style={{ fontFamily: "Poppins" }}
              value={"city"}
            >
              City
            </MenuItem>
            <MenuItem
              style={{ fontFamily: "Poppins" }}
              value={"custom"}
            >
              Custom sort
            </MenuItem>
          </Select>
        </FormControl>
      </Paper>
    </Box>
  );
};