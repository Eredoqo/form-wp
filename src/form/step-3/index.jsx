import { Box, MenuItem, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";

const Step3 = ({ register }) => {
  const [ports, setPorts] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryNames = data.map((country) => country.name.common);
        setPorts(countryNames);
      });
  }, []);

  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}
      >
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            {...register("fromPort")}
            select
            label="From"
            style={{ width: "300px" }}
          >
            {ports.map((port, index) => (
              <MenuItem key={index} value={port}>
                {port}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            {...register("toPort")}
            select
            label="To"
            style={{ width: "300px" }}
          >
            {ports.map((port, index) => (
              <MenuItem key={index} value={port}>
                {port}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            {...register("date")}
            label="Date"
            style={{ width: "300px" }}
          ></TextField>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            {...register("flag")}
            label="Flag"
            style={{ width: "300px" }}
          ></TextField>
        </Box>
      </Box>
    </>
  );
};

export default Step3;
