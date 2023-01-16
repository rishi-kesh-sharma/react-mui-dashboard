import axios from "axios";
import { BASE_URL } from "../constants/constants";
export const getAllBanks = async () => {
  const allBanks = await axios.get(`${BASE_URL}/bank/all`);
  return allBanks;
};
