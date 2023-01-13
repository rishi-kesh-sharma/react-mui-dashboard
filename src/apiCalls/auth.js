import axios from "axios";
import { BASE_URL } from "../constants/constants";

import { store } from "../App";
export const loginUser = async ({ email, password }) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      email,
      password,
    });
    console.log(response.data);
  } catch (err) {
    console.log(err.response.data.message);
  }
};
export const logoutUser = async () => {
  //   console.log(localStorage.getItem("token"));
  try {
    const response = await axios.get(`${BASE_URL}/auth/logout`);
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};
