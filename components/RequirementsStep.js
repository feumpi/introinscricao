import Image from "next/image";

import { Box, Typography } from "@mui/material";
import StepInstructions from "./StepInstructions";
import StepLayout from "./StepLayout";

const RequirementsStep = () => {
  return (
    <>
      <StepLayout>
        <Box>
          <StepInstructions
            imgSrc="/img/step-requirements.svg"
            title="Vamos começar"
            description="Primeiro, vamos confirmar que você atende aos requisitos para participar do Introcomp."
          />
        </Box>
        <Box>Requirements</Box>
      </StepLayout>
    </>
  );
};

export default RequirementsStep;
