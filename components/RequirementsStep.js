import { useState } from "react";

import Image from "next/image";

import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import StepInstructions from "./StepInstructions";
import StepLayout from "./StepLayout";

const RequirementsStep = () => {
  const [edital, setEdital] = useState(false);
  const [highSchool, setHighSchool] = useState(false);
  const [publicSchool, setPublicSchool] = useState(false);
  const [device, setDevice] = useState(false);

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

        <Box>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Eu confirmo que li o edital do Introcomp"
              checked={edital}
              onChange={(e) => setEdital(e.target.checked)}
            />

            <FormControlLabel
              control={<Checkbox />}
              label="Eu confirmo que estou matriculado no 1º, 2º, 3º ou 4º ano do ensino médio"
              checked={highSchool}
              onChange={(e) => setHighSchool(e.target.checked)}
            />

            <FormControlLabel
              control={<Checkbox />}
              label="Eu confirmo que estudo em escola pública"
              checked={publicSchool}
              onChange={(e) => setPublicSchool(e.target.checked)}
            />

            <FormControlLabel
              control={<Checkbox />}
              label="Eu confirmo que tenho um computador ou celular com acesso à internet"
              checked={device}
              onChange={(e) => setDevice(e.target.checked)}
            />
          </FormGroup>
        </Box>
      </StepLayout>
    </>
  );
};

export default RequirementsStep;
