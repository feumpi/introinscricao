import { useState, useEffect } from "react";
import axios from "axios";

import {
  Box,
  Typography,
  FormControl,
  FormGroup,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Autocomplete,
} from "@mui/material";
import StepLayout from "./StepLayout";
import StepInstructions from "./StepInstructions";
import FormSectionTitle from "./FormSectionTitle";

import StandardField from "./StandardField";
import AutocompleteField from "./AutocompleteField";

import validation from "../helpers/validation.js";

const StudentStep = () => {
  const [name, setName] = useState("");

  const [gender, setGender] = useState("");
  const [inputGender, setInputGender] = useState("");

  const [birthdate, setBirthdate] = useState("");
  const [cpf, setCpf] = useState("");
  const [motherName, setMotherName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [state, setState] = useState("");
  const [inputState, setInputState] = useState("");
  const [city, setCity] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");

  const genders = ["Masculino", "Feminino", "Outro", "Prefiro não dizer"];

  const [states, setStates] = useState([""]);

  const [cities, setCities] = useState([]);

  const handleState = (newState) => {
    setState(newState);

    if (newState) {
      const uf = newState.substr(0, 2);

      axios.get(`/api/cities/${uf}`).then((res) => {
        setCities(res.data);
      });
    } else {
      setCity("");
      setCities([]);
    }
  };

  useEffect(() => {
    axios.get("/api/states").then((res) => {
      setStates(res.data);
    });
  }, []);

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

        <Box
          component="form"
          autoComplete="off"
          noValidate
          sx={{
            "& .MuiTextField-root": { marginY: 1, width: "100%" },
          }}
        >
          <FormSectionTitle first>Dados básicos</FormSectionTitle>

          <StandardField
            label="Seu nome completo"
            placeholder="Ex: João da Silva Pereira"
            helperText="Não omita nenhum nome composto ou sobrenome."
            value={name}
            setValue={setName}
            errorText={validation.name(name)}
          />

          <AutocompleteField
            label="Seu gênero"
            placeholder="Escolha uma opção da lista ou digite o que preferir"
            options={genders}
            value={gender}
            setValue={setGender}
            inputValue={inputGender}
            setInputValue={setInputGender}
            free
          />

          <StandardField
            label="Sua data de nascimento"
            placeholder="Ex: 08/05/2003"
            helperText="Digite apenas os números, sem barras."
            value={birthdate}
            setValue={setBirthdate}
            errorText={validation.birthdate(birthdate)}
            mask="99/99/9999"
            number
          />

          <StandardField
            label="Seu CPF"
            placeholder="Ex: 447.791.810-03"
            mask="999.999.999-99"
            helperText="Digite apenas os números, sem pontos ou traços."
            value={cpf}
            setValue={setCpf}
            errorText={validation.cpf(cpf)}
            number
          />

          <StandardField
            label="Nome completo da sua mãe"
            placeholder="Ex: Maria da Silva Pereira"
            helperText="Ou o nome do responsável legal equivalente na sua identidade."
            value={motherName}
            setValue={setMotherName}
            errorText={validation.name(motherName)}
          />

          <FormSectionTitle>Dados de contato</FormSectionTitle>

          <StandardField
            label="E-mail"
            placeholder="Ex: joao.silva@gmail.com"
            helperText="Fique atento, vamos usá-lo para entrar em contato com você daqui em diante."
            value={email}
            setValue={setEmail}
            errorText={validation.email(email)}
          />

          <StandardField
            label="Seu telefone"
            placeholder="Ex: 27 98876-5648"
            mask="99 99999-9999"
            helperText="Não esqueça de incluir o DDD! Digite apenas os números, sem parênteses ou traços."
            value={phone}
            setValue={setPhone}
            errorText={validation.phone(phone)}
            number
          />

          <FormSectionTitle>Seu endereço</FormSectionTitle>

          <AutocompleteField
            label="Estado"
            placeholder="Digite um estado para pesquisar na lista"
            options={states}
            value={state}
            setValue={handleState}
            inputValue={inputState}
            setInputValue={setInputState}
          />

          <AutocompleteField
            label="Cidade"
            placeholder="Digite uma cidade para pesquisar na lista"
            options={cities}
            value={city}
            setValue={setCity}
            inputValue={inputCity}
            setInputValue={setInputCity}
          />

          <StandardField
            label="Bairro"
            placeholder="Ex: Goiabeiras"
            value={neighborhood}
            setValue={setNeighborhood}
          />
        </Box>
      </StepLayout>
    </>
  );
};

export default StudentStep;
