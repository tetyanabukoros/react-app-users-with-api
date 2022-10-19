import { Box, Chip, FormControl, MenuItem, Paper, Select, SelectChangeEvent, Slider, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

export const FilterBlock = () => {
  const [value, setValue] = useState<number[]>([20, 37]);
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);

  const [select, setSelect] = useState<number>(10);

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setSelect(+event.target.value as number);
  };

  function valuetext(value: number) {
    return `${value}°C`;
  }

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleClickMale = () => {
    setMale(!male)
  };

  const handleClickFemale = () => {
    setFemale(!female)
  };

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
        Filter
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
          <TextField
            style={{
              fontFamily: 'Poppins',
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#999",
              border: "1px solid #121212",
              borderRadius: "12px",
            }} 
            id="outlined-basic" 
            label="" 
            placeholder="Search by name" 
            variant="outlined" 
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
            value={value}
            onChange={handleChange}
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
            {value[0]} - {value[1]}
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
          <Select
            style={{
              fontFamily: 'Poppins',
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#121212",
              border: "1px solid #121212",
              borderRadius: "12px",
            }}
            variant="outlined"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={select.toString()}
            // label="Age"
            onChange={handleChangeSelect}
          >
            <MenuItem style={{ fontFamily: 'Poppins'}} value={10}>Name</MenuItem>
            <MenuItem style={{ fontFamily: 'Poppins'}} value={20}>Date of birth</MenuItem>
            <MenuItem style={{ fontFamily: 'Poppins'}} value={30}>City</MenuItem>
            <MenuItem style={{ fontFamily: 'Poppins'}} value={40}>Custom sort</MenuItem>
          </Select>
        </FormControl>
      </Paper>
    </Box>
  );
};