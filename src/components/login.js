import React from "react";
import { useSelector } from "react-redux";

const Login = () => {
  const isAuthentificated = useSelector((state) => state.login);

  return (
    <div>
      <h2>Login</h2>
      <p>{isAuthentificated}</p>
    </div>
  );
};

export default Login;
