import { Box, Typography } from "@mui/material";

const FormSectionTitle = ({ first, children }) => {
  return (
    <>
      <Typography
        sx={{
          marginTop: first ? "0" : "30px",
          marginBottom: "10px",
          fontWeight: "500",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        {children}
      </Typography>
    </>
  );
};

export default FormSectionTitle;
