import axios from "axios";
const baseUrl = "/api/v1/blogs";
const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
};

const getAll = async () => {
  const request = axios.get(baseUrl);
  const response = await request;
  return response.data;
};

const addNew = async (data) => {
  const req = axios.post(baseUrl, data, config);
  const res = await req;
  return res.data;
};

export default { getAll, addNew };
