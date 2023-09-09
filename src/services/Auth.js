import axios from "axios";

const API = "https://vigilant-vaughan.74-208-39-204.plesk.page/deepia";
const ENV = process.env;

export const login = async (values) => {
  // console.log(values, "values on atuh login");
  try {
    // const response = await axios.post(`${API}/users/login`, {
    const response = await axios.post(`${ENV.REACT_APP_API_LOGIN}/users/login`, {
      username: values.username,
      password: values.password,
    });
    return response;
    // console.log(response);
  } catch (error) {
    console.error(error);
  }
};
