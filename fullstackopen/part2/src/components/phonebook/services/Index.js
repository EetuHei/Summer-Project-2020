import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const GetAll = () => {
  const request = axios.get(baseUrl);
  return request.then(res => res.data);
};

const Create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((res) => res.data);
};

const Update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((res) => res.data);
};

const Delete = (id) => {
  const req = axios.delete(`${baseUrl}/${id}`)
  return req.then(res => res.data)
}

export default { GetAll: GetAll, Create: Create, Update: Update, Delete: Delete };
