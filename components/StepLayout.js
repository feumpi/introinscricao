import { Box } from "@mui/material";

const StepLayout = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gridTemplateAreas: `
            "instructions content content content"
          `,
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default StepLayout;
