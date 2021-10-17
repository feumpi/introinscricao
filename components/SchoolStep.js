import { Box } from "@mui/material";
import StepLayout from "./StepLayout";
import StepInstructions from "./StepInstructions";

const SchoolStep = () => {
  return (
    <>
      <StepLayout>
        <Box>
          <StepInstructions
            imgSrc="/img/step-school.svg"
            title="Sobre sua escola"
            description="Por último, vamos precisar de algumas informações sobre onde você estuda."
          />
        </Box>
        <Box>School</Box>
      </StepLayout>
    </>
  );
};

export default SchoolStep;
