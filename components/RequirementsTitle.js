import { Typography } from "@mui/material";

const RequirementsTitle = ({ children }) => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", paddingTop: "30px", paddingBottom: "20px" }}
      >
        {children}
      </Typography>
    </>
  );
};

export default RequirementsTitle;
