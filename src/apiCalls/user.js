import axios from "axios";
import { BASE_URL } from "../constants/constants";

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/user/admin/all`, {
      headers: {
        "auth-token": localStorage.getItem("auth-token"),
      },
    });
    return response.data
  } catch (err) {
    console.log(err.response);
  }
};
