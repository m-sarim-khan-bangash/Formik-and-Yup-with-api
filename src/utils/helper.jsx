import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const postFormData = async (endpoint, values) => {
  try {
    const response = await axiosInstance.post(endpoint, values);
    return response.data;
  } catch (error) {
    console.error("There was an error submitting the form!", error);
  }
};
