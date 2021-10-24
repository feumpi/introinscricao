import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const response = await axios.get(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
    );
    const data = await response.data;

    const states = data.map((el) => {
      return `${el.sigla} - ${el.nome}`;
    });
    res.status(200).json(states);
  }
}
