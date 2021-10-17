import { useState } from "react";

import {
  Box,
  Card,
  CardContent,
  Stepper,
  Step,
  StepLabel,
  Button,
} from "@mui/material";

import RequirementsStep from "./RequirementsStep";
import StudentStep from "./StudentStep";
import SchoolStep from "./SchoolStep";

const EnrollCard = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const steps = [
    { label: "Requisitos", component: RequirementsStep },
    { label: "Sobre você", component: StudentStep },
    { label: "Sobre sua escola", component: SchoolStep },
  ];

  const StepComponent = steps[activeStep].component;

  return (
    <>
      <Card>
        <CardContent>
          <Stepper activeStep={activeStep} sx={{ padding: "20px" }}>
            {steps.map((step, index) => (
              <Step key={index}>
                <StepLabel>{step.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Box sx={{ padding: "50px" }}>
            <StepComponent />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button
              color="primary"
              onClick={handleBack}
              disabled={activeStep <= 0}
            >
              Voltar
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleNext}
              sx={{
                marginLeft: "20px",
              }}
              disabled={activeStep >= steps.length - 1}
            >
              Continuar
            </Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default EnrollCard;
