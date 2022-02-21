import { useState } from "react";
import { useDispatch } from "react-redux";
import { signin, signout } from "./../features/user";

const FakeLoginComponent = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated] = useState(false);
  const dispatch = useDispatch();

  localStorage.setItem("login", login);
  localStorage.setItem("password", password);
  localStorage.setItem("isAuthentificated", isAuthenticated);

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor="login">Login: </label>
        <input
          type="text"
          name="login"
          placeholder="write login"
          autoComplete="on"
          onChange={(e) => setLogin(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="surname">Password: </label>
        <input
          type="password"
          name="password"
          placeholder="write password"
          autoComplete="on"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <button
        onClick={() =>
          dispatch(
            signin({ login: login, password: password, isAuthenticated: true })
          )
        }
      >
        Login
      </button>
      <button onClick={() => dispatch(signout())}>Logout</button>
    </div>
  );
};

export default FakeLoginComponent;
