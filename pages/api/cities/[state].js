import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { state } = req.query;

    const response = await axios.get(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`
    );
    const data = await response.data;

    const cities = data.map((el) => {
      return el.nome;
    });
    res.status(200).json(cities);
  }
}
