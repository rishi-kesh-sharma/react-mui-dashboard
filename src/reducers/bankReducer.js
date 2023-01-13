import {
  ADD_BANK,
  DELETE_BANK,
  UPDATE_BANK,
  GET_SINGLE_BANK,
  GET_ALL_BANKS,
} from "../actions/bankActions";
import { getAllBanks } from "../apiCalls/banks";
const bankReducer = async (state = [], action) => {
  switch (action.type) {
    case GET_ALL_BANKS:
      const banks = await getAllBanks();
      return banks;
    case ADD_BANK:
      return state;
    case UPDATE_BANK:
      return state;
    case DELETE_BANK:
      return state;
    case GET_SINGLE_BANK:
      return state;
    default:
      return state;
  }
};

export default bankReducer;
