import { useState, useEffect } from "react";

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

  //Global state
  const [requirementsData, setRequirementsData] = useState(null);
  const [studentData, setStudentData] = useState(null);
  const [schoolData, setSchoolData] = useState(null);

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
    {
      label: "Requisitos",
      component: RequirementsStep,
      setData: setRequirementsData,
    },
    { label: "Sobre você", component: StudentStep, setData: setStudentData },
    {
      label: "Sobre sua escola",
      component: SchoolStep,
      setData: setSchoolData,
    },
  ];

  const StepComponent =
    activeStep < steps.length ? steps[activeStep].component : () => <>acabou</>;

  const stepProps =
    activeStep < steps.length
      ? {
          handleNext,
          handleBack,
          setData: steps[activeStep].setData,
        }
      : {};

  useEffect(() => {
    if (activeStep >= steps.length) {
      console.log(requirementsData, studentData, schoolData);
    }
  }, [activeStep, steps.length, requirementsData, studentData, schoolData]);

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
            <StepComponent {...stepProps} />
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default EnrollCard;
