import axios from "axios";
export const getAllBanks = async () => {
  const allBanks = await axios.get("http://localhost:4000/api/bank/all");
  console.log(allBanks);
};
