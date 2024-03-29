import { Box, TextField } from "@material-ui/core";

const Step4 = ({ register }) => {
  return (
    <>
      <Box>
        <TextField
          {...register("volume")}
          label="Volume"
          style={{ width: "300px" }}
        ></TextField>
        <TextField
          {...register("weight")}
          label="Metric tones"
          style={{ width: "300px", marginLeft: "50px" }}
        ></TextField>
      </Box>
    </>
  );
};

export default Step4;
