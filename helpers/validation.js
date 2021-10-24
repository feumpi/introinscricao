const name = (value) =>
  /^([A-Za-zÀ-ÖØ-öø-ÿ]{3,})+\s+([A-Za-zÀ-ÖØ-öø-ÿ\s]{3,})+$/i.test(value)
    ? ""
    : "Digite um nome válido (incluindo o sobrenome)";

const email = (value) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Digite um e-mail válido";

const birthdate = (value) =>
  /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(value)
    ? ""
    : "Digite uma data válida.";

const cpf = (value) =>
  /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(value) ? "" : "Digite um CPF válido.";

const phone = (value) =>
  /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/.test(value)
    ? ""
    : "Digite um telefone válido.";

const validation = { name, email, birthdate, cpf, phone };

export default validation;
