import { Box, TextField } from "@material-ui/core";

const Step5 = ({ register }) => {
  return (
    <>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          {...register("insirance")}
          label="Insurance"
          style={{ width: "300px" }}
        ></TextField>
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          {...register("packing")}
          label="Do u need packing"
          style={{ width: "300px" }}
        ></TextField>
      </Box>
    </>
  );
};

export default Step5;
