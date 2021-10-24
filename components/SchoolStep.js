import { useState, useEffect } from "react";

import { Box, Button } from "@mui/material";

import FormSectionTitle from "./FormSectionTitle";
import StandardField from "./StandardField";
import AutocompleteField from "./AutocompleteField";
import RadioField from "./RadioField";

import StepLayout from "./StepLayout";
import StepInstructions from "./StepInstructions";

import { getStates, getCities } from "../helpers/api";

const SchoolStep = ({ handleBack, handleNext, setData }) => {
  const [schoolState, setSchoolState] = useState("");
  const [inputSchoolState, setInputSchoolState] = useState("");

  const [schoolCity, setSchoolCity] = useState("");
  const [inputSchoolCity, setInputSchoolCity] = useState("");

  const [schoolName, setSchoolName] = useState("");
  const [inputSchoolName, setInputSchoolName] = useState("");

  const [schoolType, setSchoolType] = useState("");

  const [schoolYear, setSchoolYear] = useState("");

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const schoolNames = [
    "IFES campus Vitória",
    "IFES campus Serra",
    "Colégio Estadual",
  ];

  const schoolTypes = ["Estadual", "Federal"];
  const schoolYears = ["1º ano", "2º ano", "3º ano", "4º ano"];

  //On state input change
  const handleSchoolState = async (newState) => {
    setSchoolState(newState);

    //If not empty (valid option selected), update city list
    if (newState) {
      const uf = newState.substr(0, 2);

      const list = await getCities(uf);
      setCities(list);
      setSchoolCity("");
    }
    //Clear selected city and city options
    else {
      setSchoolCity("");
      setCities([]);
    }
  };

  const handleSubmit = () => {
    setData({ schoolState, schoolCity, schoolName, schoolType, schoolYear });
    handleNext();
  };

  //Fetch states from API on start
  useEffect(() => {
    const fetchStates = async () => {
      const list = await getStates();
      setStates(list);
    };
    fetchStates();
  }, []);

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
            setValue={handleSchoolState}
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

          <Box
            sx={{ display: "flex", justifyContent: "end", marginTop: "30px" }}
          >
            <Button color="primary" onClick={handleBack}>
              Voltar
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleSubmit}
              sx={{
                marginLeft: "20px",
              }}
            >
              Concluir
            </Button>
          </Box>
        </Box>
      </StepLayout>
    </>
  );
};

export default SchoolStep;
