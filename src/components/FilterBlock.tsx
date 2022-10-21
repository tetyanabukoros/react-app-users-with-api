import { Box, Chip, FormControl, MenuItem, Paper, Select, SelectChangeEvent, Slider, Stack, Typography } from '@mui/material';
import React from 'react';

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

export const FilterBlock: React.FC<Props> = ( props ) => {
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
    <Box>
      <Typography
        style={{
          fontFamily: 'Work Sans',
          fontWeight: "700",
          fontSize: "34px",
          lineHeight: "40px",
          color: "#121212",
          margin: "32px 0"
        }}
      >
        Filter {select}
      </Typography>
      <Paper>
        <FormControl
          variant="standard"
          style={{ padding: "27px" }}
        >
          <Typography
            style={{
              fontFamily: 'Poppins',
              fontWeight: "500",
              fontSize: "12px",
              lineHeight: "18px",
              color: "#999",
              margin: "0 0 7px 0",
            }}
          >
            Name
          </Typography>
          <input
            style={{
              fontFamily: 'Poppins',
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#999",
              border: "1px solid #121212",
              borderRadius: "12px",
              padding: "14px",
              marginBottom: "24px"
            }}
            id="outlined-basic"
            placeholder="Search by name"
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event?.target.value)}
          />
          <Typography
            style={{
              fontFamily: 'Poppins',
              fontWeight: "500",
              fontSize: "12px",
              lineHeight: "18px",
              color: "#999",
              margin: "0 0 16px 0",
            }}
          >
            Age
          </Typography>
          <Slider
            getAriaLabel={() => 'Temperature range'}
            value={ageValue}
            onChange={handleChangeAgeValue}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
          <Typography
            style={{
              fontFamily: 'Poppins',
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "21px",
              color: "#333",
              margin: "0 0 24px 0",
            }}
          >
            {ageValue[0]} - {ageValue[1]}
          </Typography>
          <Typography
            style={{
              fontFamily: 'Poppins',
              fontWeight: "500",
              fontSize: "12px",
              lineHeight: "18px",
              color: "#999",
              margin: "0 0 16px 0",
            }}
          >
            Gender
          </Typography>
          <Stack mb={4} direction="row" spacing={1}>
            <Chip
              sx={{
                color: male ? "#52228C" : "#333",
                border: male ? "1px solid #52228C" : "1px solid #121212",
                backgroundColor: male ? "#ECD3FA" : "FFF",
                fontFamily: 'Poppins',
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
                fontFamily: 'Poppins',
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "21px",
              }}
              label="Female"
              variant="outlined"
              onClick={handleClickFemale}
            />
          </Stack>
          <Typography
            style={{
              fontFamily: 'Poppins',
              fontWeight: "500",
              fontSize: "12px",
              lineHeight: "18px",
              color: "#999",
              margin: "0 0 16px 0",
            }}
          >
            Sort by
          </Typography>
          {/* <select
            style={{
              fontFamily: 'Poppins',
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#121212",
              border: "1px solid #121212",
              borderRadius: "12px",
              padding: "14px",
              marginBottom: "24px"
            }}
            name="select"
            id="demo-simple-select"
            value={select}
            onChange={() => handleChangeSelect}
          >
            <option style={{ fontFamily: 'Poppins' }} value={10}>Name</option>
            <option style={{ fontFamily: 'Poppins' }} value={20}>Date of birth</option>
            <option style={{ fontFamily: 'Poppins' }} value={30}>City</option>
            <option style={{ fontFamily: 'Poppins' }} value={40}>Custom sort</option>
          </select> */}
          <Select
            style={{
              fontFamily: 'Poppins',
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
            value={select}
            onChange={(event) => handleChangeSelect(event)}
          >
            <MenuItem style={{ fontFamily: 'Poppins'}} value={'name'}>Name</MenuItem>
            <MenuItem style={{ fontFamily: 'Poppins'}} value={'birth'}>Date of birth</MenuItem>
            <MenuItem style={{ fontFamily: 'Poppins'}} value={'city'}>City</MenuItem>
            <MenuItem style={{ fontFamily: 'Poppins'}} value={'custom'}>Custom sort</MenuItem>
          </Select>
        </FormControl>
      </Paper>
    </Box>
  );
};