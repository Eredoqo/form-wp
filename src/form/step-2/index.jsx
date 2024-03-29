import { Box, TextField } from "@material-ui/core";

const Step2 = ({ register }) => {
  return (
    <>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          {...register("ocean")}
          label="Ocean"
          style={{ width: "300px" }}
        ></TextField>
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          {...register("general")}
          label="General"
          style={{ width: "300px" }}
        ></TextField>
      </Box>
    </>
  );
};

export default Step2;
