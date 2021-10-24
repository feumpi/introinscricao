import { useState } from "react";

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
  const [inputNeighborhood, setInputNeighborhood] = useState("");

  const genders = ["Masculino", "Feminino", "Outro", "Prefiro não dizer"];

  const states = [
    "ES - Espírito Santo",
    "SP - São Paulo",
    "RJ - Rio de Janeiro",
  ];

  const cities = ["Vitória", "Vila Velha", "Serra", "Cariacica"];

  const neighborhoods = ["Centro", "Maruípe", "Goiabeiras", "Jardim da Penha"];

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
            number
          />

          <StandardField
            label="Seu CPF"
            placeholder="Ex: 447.791.810-03"
            helperText="Digite apenas os números, sem pontos ou traços."
            value={cpf}
            setValue={setCpf}
            number
          />

          <StandardField
            label="Nome completo da sua mãe"
            placeholder="Ex: Maria da Silva Pereira"
            helperText="Ou o nome do responsável legal equivalente na sua identidade."
            value={motherName}
            setValue={setMotherName}
          />

          <FormSectionTitle>Dados de contato</FormSectionTitle>

          <StandardField
            label="E-mail"
            placeholder="Ex: joao.silva@gmail.com"
            helperText="Fique atento, vamos usá-lo para entrar em contato com você daqui em diante."
            value={email}
            setValue={setEmail}
          />

          <StandardField
            label="Seu telefone"
            placeholder="Ex: (27) 98876-5648"
            helperText="Não esqueça de incluir o DDD! Digite apenas os números, sem parênteses ou traços."
            value={phone}
            setValue={setPhone}
            number
          />

          <FormSectionTitle>Seu endereço</FormSectionTitle>

          <AutocompleteField
            label="Estado"
            placeholder="Digite um estado para pesquisar na lista"
            options={states}
            value={state}
            setValue={setState}
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

          <AutocompleteField
            label="Bairro"
            placeholder="Digite um bairro para pesquisar na lista"
            options={neighborhoods}
            value={neighborhood}
            setValue={setNeighborhood}
            inputValue={inputNeighborhood}
            setInputValue={setInputNeighborhood}
          />
        </Box>
      </StepLayout>
    </>
  );
};

export default StudentStep;
