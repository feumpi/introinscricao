const name = (value) =>
  /^([A-Za-zÀ-ÖØ-öø-ÿ]{3,})+\s+([A-Za-zÀ-ÖØ-öø-ÿ\s]{3,})+$/i.test(value)
    ? ""
    : "Digite um nome válido (incluindo o sobrenome)";

const email = (value) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Digite um e-mail válido";

const birthdate = (value) =>
  /^[0-9]{8}$/.test(value)
    ? ""
    : "Digite uma data válida (apenas números: 2 dígitos para o dia, 2 dígitos para o mês e 4 dígitos para o ano)";

const cpf = (value) =>
  /^[0-9]{11}$/.test(value)
    ? ""
    : "Digite um CPF válido (apenas números, com 11 dígitos)";

const phone = (value) =>
  /^[0-9]{10,11}$/.test(value)
    ? ""
    : "Digite um telefone válido (2 dígitos do DDD + 8 ou 9 dígitos do número)";

const validation = { name, email, birthdate, cpf, phone };

export default validation;
