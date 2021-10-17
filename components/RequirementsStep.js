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

import FormSectionTitle from "./FormSectionTitle";
import AutocompleteField from "./AutocompleteField";
import RadioField from "./RadioField";

const RequirementsStep = () => {
  const [edital, setEdital] = useState(false);
  const [highSchool, setHighSchool] = useState(false);
  const [publicSchool, setPublicSchool] = useState(false);
  const [device, setDevice] = useState(false);

  const [ref, setRef] = useState("");
  const [inputRef, setInputRef] = useState("");

  const [knowledgeLevel, setKnowledgeLevel] = useState("");

  const refs = ["Instagram", "YouTube", "Twitch", "Por meio de um amigo"];

  const knowledgeLevels = ["Não, nenhum", "Sim, um pouco", "Sim, bastante"];

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

        <Box
          component="form"
          autoComplete="off"
          noValidate
          sx={{
            "& .MuiTextField-root": { marginY: 1, width: "100%" },
          }}
        >
          <FormSectionTitle first>Requisitos</FormSectionTitle>
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

          <FormSectionTitle>Outros</FormSectionTitle>

          <AutocompleteField
            label="Como você ficou sabendo do introcomp?"
            placeholder="Escolha uma opção da lista ou digite manualmente"
            options={refs}
            value={ref}
            setValue={setRef}
            inputValue={inputRef}
            setInputValue={setInputRef}
            free
          />

          <RadioField
            label="Você tem algum conhecimento prévio em programação?"
            name="programming-knowledge"
            options={knowledgeLevels}
            value={knowledgeLevel}
            setValue={setKnowledgeLevel}
          />
        </Box>
      </StepLayout>
    </>
  );
};

export default RequirementsStep;
