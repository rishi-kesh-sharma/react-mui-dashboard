import { LOGIN, LOGOUT } from "./../actions/authActions";
import { loginUser, logoutUser } from "../apiCalls/auth";
const authReducer = async (
  state = [{ isLogged: false, loggedUser: {} }],
  action
) => {
  switch (action.type) {
    case LOGIN: {
      const { email, password } = action.payload;
      const response = await loginUser({ email, password });
      return state;
    }
    case LOGOUT:
      const response = await logoutUser();
      //   console.log(response);

      //   console.log(response);
      return state;

    default:
      return state;
  }
};

export default authReducer;
