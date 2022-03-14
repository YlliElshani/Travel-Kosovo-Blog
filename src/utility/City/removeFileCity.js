import axios from "axios";

const removeFileCity = async (id, file) => {
  const apiCaller = axios.create({
    baseURL: "http://localhost:1000/",
  });
  return apiCaller.put(`/cities/${id}/removeFile/${file.name}`, {});
};

export default removeFileCity;
