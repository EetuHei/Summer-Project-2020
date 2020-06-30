import axios from "axios";

const baseUrl = "http://localhost:8080/api/v1/persons";

const GetAll = async () => {
  const request = await axios.get(baseUrl);
  return request.data;
};

const Create = async (newObject) => {
  const request = await axios.post(`${baseUrl}/add`, newObject);

  return request.data;
};

const Update = async (id, newObject) => {
  const request = await axios.put(`${baseUrl}/${id}`, newObject);
  console.log(request.data, "data in client update")
  return request.data;
};

const Delete = async (id) => {
  const req = await axios.delete(`${baseUrl}/delete/${id}`);
  return req.data;
};

export default {
  GetAll: GetAll,
  Create: Create,
  Update: Update,
  Delete: Delete,
};
