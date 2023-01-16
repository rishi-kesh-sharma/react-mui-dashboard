import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Redirect, Route, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const navigate = useNavigate();

  const data = useSelector((state) => state.authReducer);

  return (
    <Fragment>hello</Fragment>
    // <Fragment>
    // <Route
    //   {...rest}
    //   render={(props) => {
    //     if (data.isLogged === false) {
    //       return <Navigate to="/login" />;
    //     }

    //     return <Component {...props} />;
    //   }}
    // />
    // {/* </Fragment> */}
  );
};

export default ProtectedRoute;
