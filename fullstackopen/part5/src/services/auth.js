import axios from "axios";
const baseUrl = "/api/v1/";

const login = async (credentials) => {
  const req = axios.post(`${baseUrl}login`, credentials);
  const res = await req;
  return res.data;
};

export default { login };
