import { useState, useEffect } from "react";

import { Box, Button } from "@mui/material";
import StepLayout from "./StepLayout";
import StepInstructions from "./StepInstructions";
import FormSectionTitle from "./FormSectionTitle";

import StandardField from "./StandardField";
import AutocompleteField from "./AutocompleteField";

import validation from "../helpers/validation.js";

import { getStates, getCities } from "../helpers/api";

const StudentStep = ({ handleNext, handleBack, setData }) => {
  //Predefined options
  const genders = ["Masculino", "Feminino", "Outro", "Prefiro não dizer"];

  //Input state
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

  //Later fetched options state
  const [states, setStates] = useState([""]);
  const [cities, setCities] = useState([]);

  //On state input change
  const handleState = async (newState) => {
    setState(newState);

    //If not empty (valid option selected), update city list
    if (newState) {
      const uf = newState.substr(0, 2);

      const list = await getCities(uf);
      setCities(list);
      setCity("");
    }
    //Clear selected city and city options
    else {
      setCity("");
      setCities([]);
    }
  };

  //Fetch states from API on start
  useEffect(() => {
    const fetchStates = async () => {
      const list = await getStates();
      setStates(list);
    };
    fetchStates();
  }, []);

  const handleSubmit = () => {
    setData({
      name,
      gender,
      birthdate,
      cpf,
      motherName,
      email,
      phone,
      state,
      city,
      neighborhood,
    });
    handleNext();
  };

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
            label="Nome completo"
            placeholder="Ex: João Carlos da Silva Pereira"
            helperText="Digite seu primeiro nome (completo, se for composto) e todos os seus sobrenomes, como registrado nos seus documentos."
            value={name}
            setValue={setName}
            errorText={validation.name(name)}
          />

          <AutocompleteField
            label="Gênero"
            placeholder="Escolha uma opção da lista, deixe em branco ou digite o que preferir"
            options={genders}
            value={gender}
            setValue={setGender}
            inputValue={inputGender}
            setInputValue={setInputGender}
            free
          />

          <StandardField
            label="Data de nascimento"
            placeholder="Ex: 08/05/2003"
            helperText="Digite apenas números (2 dígitos para o dia, 2 dígitos para o mês e 4 dígitos para o ano)"
            value={birthdate}
            setValue={setBirthdate}
            errorText={validation.birthdate(birthdate)}
            mask="99/99/9999"
            number
          />

          <StandardField
            label="CPF"
            placeholder="Ex: 447.791.810-03"
            mask="999.999.999-99"
            helperText="Digite apenas os números do seu CPF"
            value={cpf}
            setValue={setCpf}
            errorText={validation.cpf(cpf)}
            number
          />

          <StandardField
            label="Nome completo da sua mãe"
            placeholder="Ex: Maria da Silva Pereira"
            helperText="Digite o primeiro nome (completo, se for composto) e todos os sobrenomes da sua mãe, como registrado nos seus documentos."
            value={motherName}
            setValue={setMotherName}
            errorText={validation.name(motherName)}
          />

          <FormSectionTitle>Dados de contato</FormSectionTitle>

          <StandardField
            label="E-mail"
            placeholder="Ex: joao.silva@gmail.com"
            helperText="É importante que seja um e-mail válido, vamos usá-lo para entrar em contato com você daqui pra frente."
            value={email}
            setValue={setEmail}
            errorText={validation.email(email)}
          />

          <StandardField
            label="Telefone"
            placeholder="Ex: 27 98876-5648"
            mask="99 99999-9999"
            helperText="Digite o seu telefone para contato (apenas números, incluindo o DDD)"
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
            helperText="Digite o nome do bairro onde você mora."
            value={neighborhood}
            setValue={setNeighborhood}
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
              Continuar
            </Button>
          </Box>
        </Box>
      </StepLayout>
    </>
  );
};

export default StudentStep;
