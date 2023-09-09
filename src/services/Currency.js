import axios from "axios";

const API = "http://20.241.168.61:8000";
const ENV = process.env;

export const getData = async () => {
  try {
    // const response = await axios.get(`${API}/pred_20min`);
    console.log(ENV);
    const response = await axios.get(`${ENV.REACT_APP_API_DATA}/pred_20min`);
    return response?.data;
    // console.log(response);
  } catch (error) {
    console.error(error);
  }
};
