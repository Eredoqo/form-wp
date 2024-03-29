import { Box, TextField } from "@material-ui/core";

const Step1 = ({ register }) => {
  return (
    <>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          {...register("name")}
          label="Name"
          style={{ width: "300px" }}
        ></TextField>
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          {...register("lastName")}
          label="Last Name"
          style={{ width: "300px" }}
        ></TextField>
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          {...register("address")}
          label="Address"
          style={{ width: "300px" }}
        ></TextField>
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          {...register("email")}
          label="Email"
          style={{ width: "300px" }}
        ></TextField>
      </Box>
    </>
  );
};

export default Step1;
