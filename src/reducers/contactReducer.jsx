import { SET_CONTACTS } from "./../actions/contactAction";

const contactReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CONTACTS:
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default contactReducer;
