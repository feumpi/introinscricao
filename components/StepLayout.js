import { Children } from "react";

import { Box } from "@mui/material";

const StepLayout = ({ children }) => {
  const childrenArray = Children.toArray(children);

  return (
    <>
      <Box
        sx={{
          paddingX: "50px",
          paddingY: "25px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gridTemplateAreas: `
            "instructions content content content"
          `,
        }}
      >
        <Box sx={{ gridArea: "instructions" }}>{childrenArray[0]}</Box>

        <Box sx={{ gridArea: "content", paddingLeft: "50px" }}>
          {childrenArray[1]}
        </Box>
      </Box>
    </>
  );
};

export default StepLayout;
