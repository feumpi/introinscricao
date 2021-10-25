import { Children } from "react";

import { Box } from "@mui/material";

const StepLayout = ({ children }) => {
  const childrenArray = Children.toArray(children);

  return (
    <>
      <Box
        sx={{
          paddingX: {
            md: "50px",
            xs: "10px",
          },
          paddingY: "25px",
          display: "grid",
          gridTemplateColumns: {
            md: "1fr 1fr 1fr 1fr",
            xs: "1fr",
          },
          gridTemplateAreas: {
            md: `
            "instructions content content content"
          `,
            xs: `
          "instructions"
          "content"
        `,
          },
        }}
      >
        <Box sx={{ gridArea: "instructions" }}>{childrenArray[0]}</Box>

        <Box
          sx={{
            gridArea: "content",
            paddingLeft: {
              md: "50px",
              xs: 0,
            },
            marginTop: {
              xs: "50px",
            },
          }}
        >
          {childrenArray[1]}
        </Box>
      </Box>
    </>
  );
};

export default StepLayout;
