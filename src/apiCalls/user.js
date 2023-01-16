import axios from "axios";
import { BASE_URL } from "../constants/constants";

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/user/admin/all`);
    console.log(response);
  } catch (err) {
    console.log(err.response);
  }
};
