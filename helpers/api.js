import axios from "axios";

const getStates = async () => {
  const res = await axios.get("/api/states");
  return res.data;
};

const getCities = async (uf) => {
  const res = await axios.get(`/api/cities/${uf}`);
  return res.data;
};

export { getStates, getCities };
