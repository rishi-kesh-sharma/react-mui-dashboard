import { Form, Formik } from "formik";
import * as Yup from "yup";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN } from "../actions/authActions";
import { checkTokenValidity, loginUser } from "../apiCalls/auth";
import { SET_ERROR } from "../actions/errorActions";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string().required("Password is a required field"),
});

const Login = () => {
  // const [tokenValidity, setTokenValidity] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const userData = useSelector((state) => state.authReducer);
  useEffect(async () => {
    const response = await checkTokenValidity();

    // setTokenValidity(response.isValid);
    if (response.isValid)
      dispatch({
        type: LOGIN,
        payload: {
          isAuthenticated: true,
          authenticatedUser: response.user,
        },
      });
    // navigate("/dashboard");
  }, []);
  const submitForm = async ({ email, password }) => {
    try {
      const response = await loginUser({ email, password });
      const { status, data } = await response;
      const { message, user, success, token } = await data;
      if (status == 200 && success) {
        dispatch({
          type: LOGIN,
          payload: {
            isAuthenticated: true,
            authenticatedUser: user,
          },
        });
        localStorage.setItem("auth-token", token);
        navigate("/dashboard");
      } else {
        dispatch({ type: SET_ERROR, payload: message });
      }
    } catch (err) {}
  };

  // const { isAuthenticated } = useSelector((state) => state.authReducer);
  // if (isAuthenticated) return <Navigate to="/dashboard" />;
  // if (tokenValidity) navigate("/dashboard");
  // if (tokenValidity) return <Navigate to="/dashboard" />;

  return (
    <>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={submitForm}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
        }) => (
          <div className="login">
            <div className="form">
              {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <Form>
                <span>Login</span>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id / username"
                  className="form-control inp_text"
                  id="email"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {(errors.password && touched.password && errors.password) ||
                    (isSubmitting && errors.password)}
                </p>
                {/* Click on submit button to submit the form */}
                <button type="submit">Login</button>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Login;
