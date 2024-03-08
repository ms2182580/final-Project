import { useState } from "react";
import { useNavigate } from "react-router";
import { userLogin } from "../Products/Http";
import { useMutation } from "@tanstack/react-query";
const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await userLogin({ username: name, password: password });
      console.log("Login response======", response);

      // localStorage.setItem("token", JSON.stringify(response?.token));
      navigate("/Products");
    } catch (error) {
      console.error("Login failed=======", error);
    }
  };
  return (
    <>
      <div className="login-page">
        <div className="login">
          <h3 style={{ color: "white" }}>LOG IN</h3>
          <div className="input-name">
            <i className="fa-solid fa-user"></i>
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          </div>
          <hr />
          <div className="input-password">
            <i className="fa-solid fa-lock"></i>
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          <hr />

          <button onClick={handleLogin}>Login</button>
          <h6 style={{ color: "white", marginTop: "40px" }}> SIGN UP NOW</h6>
        </div>
      </div>
    </>
  );
};
export default Login;
