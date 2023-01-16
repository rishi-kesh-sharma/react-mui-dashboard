import { SET_USERS } from "../actions/userActions";

const userReducer = (state = [], action) => {
  switch (action.type) {
    case SET_USERS:
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default userReducer;
