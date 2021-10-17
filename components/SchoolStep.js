import { useState } from "react";

import { Box } from "@mui/material";

import FormSectionTitle from "./FormSectionTitle";
import StandardField from "./StandardField";
import AutocompleteField from "./AutocompleteField";
import RadioField from "./RadioField";

import StepLayout from "./StepLayout";
import StepInstructions from "./StepInstructions";

const SchoolStep = () => {
  const [schoolState, setSchoolState] = useState("");
  const [inputSchoolState, setInputSchoolState] = useState("");

  const [schoolCity, setSchoolCity] = useState("");
  const [inputSchoolCity, setInputSchoolCity] = useState("");

  const [schoolName, setSchoolName] = useState("");
  const [inputSchoolName, setInputSchoolName] = useState("");

  const [schoolType, setSchoolType] = useState("");

  const [schoolYear, setSchoolYear] = useState("");

  const states = [
    "ES - Espírito Santo",
    "SP - São Paulo",
    "RJ - Rio de Janeiro",
  ];

  const cities = ["Vitória", "Vila Velha", "Serra", "Cariacica"];

  const schoolNames = [
    "IFES campus Vitória",
    "IFES campus Serra",
    "Colégio Estadual",
  ];

  const schoolTypes = ["Estadual", "Federal"];
  const schoolYears = ["1º ano", "2º ano", "3º ano", "4º ano"];

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
        <Box
          component="form"
          autoComplete="off"
          noValidate
          sx={{
            "& .MuiTextField-root": { marginY: 1, width: "100%" },
          }}
        >
          <AutocompleteField
            label="Estado da sua escola"
            placeholder="Digite um estado para pesquisar na lista"
            options={states}
            value={schoolState}
            setValue={setSchoolState}
            inputValue={inputSchoolState}
            setInputValue={setInputSchoolState}
          />

          <AutocompleteField
            label="Cidade da sua escola"
            placeholder="Digite uma cidade para pesquisar na lista"
            options={cities}
            value={schoolCity}
            setValue={setSchoolCity}
            inputValue={inputSchoolCity}
            setInputValue={setInputSchoolCity}
          />

          <AutocompleteField
            label="Nome da sua escola"
            placeholder="Escolha uma opção da lista ou digite manualmente"
            options={schoolNames}
            value={schoolName}
            setValue={setSchoolName}
            inputValue={inputSchoolName}
            setInputValue={setInputSchoolName}
            free
          />

          <RadioField
            label="Sua escola faz parte de qual rede de ensino?"
            name="school-type"
            options={schoolTypes}
            value={schoolType}
            setValue={setSchoolType}
          />

          <RadioField
            label="Em qual ano do ensino médio você está matriculado nesse momento?"
            name="school-year"
            options={schoolYears}
            value={schoolYear}
            setValue={setSchoolYear}
          />
        </Box>
      </StepLayout>
    </>
  );
};

export default SchoolStep;
