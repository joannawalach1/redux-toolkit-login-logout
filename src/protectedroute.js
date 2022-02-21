import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Login, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  console.log("this", isAuthenticated);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Login {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default ProtectedRoute;
