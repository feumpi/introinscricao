import { Typography } from "@mui/material";

const CardTitle = ({ children }) => {
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

export default CardTitle;
