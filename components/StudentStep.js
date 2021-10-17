import { Box } from "@mui/material";
import StepLayout from "./StepLayout";
import StepInstructions from "./StepInstructions";

const StudentStep = () => {
  return (
    <>
      <StepLayout>
        <Box>
          <StepInstructions
            imgSrc="/img/step-student.svg"
            title="Sobre você"
            description="Agora, precisamos de alguns dados pessoais para processar a sua matrícula."
          />
        </Box>
        <Box>Student</Box>
      </StepLayout>
    </>
  );
};

export default StudentStep;
