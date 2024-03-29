import { Box, MenuItem, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Step3 = () => {
  const { register, watch } = useForm();
  const [ports, setPorts] = useState([]);
  const fromPort = watch("fromPort");
  const toPort = watch("toPort");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryNames = data.map((country) => country.name.common);
        setPorts(countryNames);
      });
  }, []);

  console.log(ports);
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
            {ports
              .filter((port) => port.includes(fromPort))
              .map((port, index) => (
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
            {ports
              .filter((port) => port.includes(toPort))
              .map((port, index) => (
                <MenuItem key={index} value={port}>
                  {port}
                </MenuItem>
              ))}
          </TextField>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField label="Name" style={{ width: "300px" }}></TextField>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField label="Last Name" style={{ width: "300px" }}></TextField>
        </Box>
      </Box>
    </>
  );
};

export default Step3;
