import axios from "axios";
const baseUrl = "/api/v1/";

const login = async (credentials) => {
  const request = axios.post(`${baseUrl}login`, credentials);
  const response = await request;
  return response.data;
};

export default { login };